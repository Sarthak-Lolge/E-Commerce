import express from "express"
import cors from "cors"
import 'dotenv/config'

const app = express()
// const port = process.env.PORT || 7000

// middlewares 
app.use(express.json())
app.use(cors())

// api endpoints
app.get('/',(req,res)=>{
 res.send("Hello")
//  console.log("Api wroking")
})

app.listen(process.env.PORT,()=>{
  console.log(`Server is runing on port ${process.env.PORT}`)
})

