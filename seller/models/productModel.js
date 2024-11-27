import mongoose from "mongoose";

// Define the seller product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
});

// Create and export the model
const productModel = mongoose.models.sellerProd || mongoose.model("product", productSchema);
export default productModel;

//3:50:18 video
//foodSchema is productSchema
//"food" is product
//foodModel is productModel