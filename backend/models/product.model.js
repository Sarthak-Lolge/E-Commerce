import mongoose from "mongoose";


const productSchema = mongoose.Schema({
  name:{
    type: String,
    required : true
  },
  description : {
    type: String,
    required : true
  },
  price : {
    type: Number,
    required : true
  },
  category : {
    type : String,
    required : true
  },
  subCategory : {
    type : String,
    required : true
  },
  images : {
    type : Array,
    required : true
  },
  size : {
    type: Array,
    required : true
  },
  bestseller : {
    type : Boolean
  },
    createdAt: {  // ✅ tracks when product was added
    type: Date,
    default: Date.now
  }
})

const productModel = mongoose.models.product ||  mongoose.model("product", productSchema);
export default productModel