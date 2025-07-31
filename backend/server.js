import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/user.route.js"

const app = express()

// database connection - function called
connectDB().then(()=>{
  app.on("connected",()=>{
     console.log("MongoDB connected successfully.");
  })
}).catch((err)=>{
  console.log(err) 
})

  // connection eastblish  of cloudinary
connectCloudinary().then(()=>{
  app.on("connected",()=>{
    console.log("Cloudinary connection successfully")
  })
}).catch((err)=>{
  console.log(err)
})



// middlewares 
app.use(express.json())
app.use(cors())

// api endpoints

// app.get('/',(req,res)=>{
//  res.send("API Working")
// })

app.use("/api/user", userRouter);

app.listen(process.env.PORT,()=>{
  console.log(`Server is runing on port ${process.env.PORT}`)
})


