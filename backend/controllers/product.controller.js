import { v2 as cloudinary } from "cloudinary";
import Product from "../models/product.model.js"; // make sure model exists
import productModel from "../models/product.model.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
      date,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    const imgUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    console.log("Uploaded Image URLs:", imgUrl);

    const product = new Product({
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes,
      bestseller: bestseller == "true" ? "true" : "false",
      images: imgUrl,
    });

    await product.save();

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const removeProduct = async(req, res) => {
  x
};

const singleProduct = (req, res) => {};

export { addProduct, listProducts, removeProduct, singleProduct };
