import customerModel from "../models/customerModel.js";
import jwt from "jsonwebtoken" //auth
import bcrypt from "bcrypt" //payment
import validator from "validator" //validation auth
import { response } from "express";


//login customer
const loginCustomer = async (req, res) => {
    const { email, password } = req.body;
    try {
        const customer=await customerModel.findOne({email}) //get the customer by email which is unique
        if(!customer){
            return res.json({success:false,message:"Customer doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password , customer.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(customer._id);
        res.json({success:true,token})



    } catch (error) {
        console.log(error);;
        res.json({success:false,message:"Error in logging in"})
        
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


// register customer

const registerCustomer = async (req, res) => {
    const { name, password, email, role } = req.body; // Include role
    try {
        // Check for existing customer
        const exists = await customerModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "Customer already exists" });
        }

        // Validate email and password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new customer
        const newCustomer = new customerModel({
            name,
            email,
            password: hashedPassword,
            role,
        });

        const customer = await newCustomer.save();

        // Generate token and send response
        const token = createToken(customer._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error occurred" });
    }
};


export { loginCustomer, registerCustomer };