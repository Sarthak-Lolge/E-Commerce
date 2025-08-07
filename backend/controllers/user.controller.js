import userModel from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { json } from "express";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN);
};

//route for user login
const userLogin = async(req, res) => {
  try {
      const {email,password} = req.body
  //checking weather the user is exists
  const user = await userModel.findOne({email})
  if(!user){
    return res.json({
      success : false,
      message : "User doesn't exists"
    })
  }
  //checking password
  const isMatch = await bcrypt.compare(password, user.password)
  if(isMatch){
    const userToken = createToken(user._id)
    res.json({
      success:true,
      userToken  
    })
  }else{
    return res.json({
      success:false,
      message : "Invalid Credentials"
    })
  }
    
  } catch (error) {
    console.log(error)
    res.json({
      success:false,
      message:error.message 
    })    
  }
};



//route for user sign up
const userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //checking already user is exits or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "User Already exists",
      });
    }

    //validating email format and password
    if (!validator.isEmail(email)) {
      return res.json({
        message: "This eamil is not in valid format",
      });
    }
    if (password.lenght < 8) {
      return res.json({
        message: "Please enter strong password",
      });
    }

    // hasing user password
    const salt = await bcrypt.genSalt(20);
    const hashPassword = await bcrypt.hash(password, salt);

    //saving the data of users
    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
    });
    const user = await newUser.save();

    //token
    const userToken = createToken(user._id);
    res.json({
      success: true,
      userToken,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      success:false,
      message : err.message
  })
  }
};



//route for Admin login
const admin = async(req, res) => {
  try {
    const{email,password} = req.body;
  if (email === "admin@forever.com" && password === "admin123") {
    const token = jwt.sign((email+password),process.env.JWT_TOKEN);
    res.json({
      success:true,
      token
    });
  }
  else{
    res.json({
      success:false,
      message : "Invalid credentials"
    })
  }
  } catch (error) {
    res.json({
      success : false,
      message : error.message
    })
  }
};

export { userLogin, userSignUp, admin };
