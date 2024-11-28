import productModel from "../models/productModel.js";
//food ke jagah pe product
import fs from "fs";




//add product
const addProduct = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        console.log("Uploaded File:", req.file);

        let image_filename = req.file ? req.file.filename : null;

        if (!image_filename) {
            return res.status(400).json({
                success: false,
                message: "Image upload failed. Please provide a valid image.",
            });
        }

        const product = new productModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        await product.save();
        res.json({ success: true, message: "Product has been added successfully!" });
    } catch (error) {
        console.error("Error in addProduct:", error);
        res.status(500).json({
            success: false,
            message: "Error adding product",
            error: error.message,
        });
    }
};


//all food list
const listProduct = async(req,res)=>{
    try {
        const products = await productModel.find({});
        res.json({success:true,data:products})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error has occured bro"})
    }
}


//remove product items
const removeProduct = async(req,res)=>{
    try {
        const product = await productModel.findById(req.body.id);//find product model by the id
        fs.unlink(`uploads/${product.image}` , ()=>{})//image deletion from folder

        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true , message:"Product removed"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error aya"});
    }
} 




export {addProduct , listProduct, removeProduct};