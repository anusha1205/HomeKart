import express from "express"
import { addProduct, listProduct, removeProduct } from "../controllers/productController.js"
import multer from "multer"

const productRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
    // destination:"uploads",
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Ensure 'uploads' folder exists
    },
    filename:(req, file, cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

//middleware thingy to uplaod images in uploads file
const upload = multer({storage:storage})

productRouter.post("/add",upload.single("image"),addProduct)

//4:10:57 pe hai ye continue karo
productRouter.get("/list",listProduct)//getting the list of products
//gives array list containing multiple objects
//each objects representing diff products

//removing product
productRouter.post("/remove", removeProduct);





export default productRouter;