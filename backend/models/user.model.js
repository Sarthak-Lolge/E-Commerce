import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: [8, 'Password must at least contain 8 characters']
  },
  cartData: {
    type: Object,
    default: {}
  }
}, { minimize: false });



const userModel = mongoose.models.users || mongoose.model("user", userSchema)
export default userModel;