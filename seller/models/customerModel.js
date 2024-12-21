import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    // three types of role are
        // 1.seller
        // 2.customer
        // 3.delivery agent
    cartData: { type: Object, default: {} },
}, { minimize: false })

const customerModel = mongoose.models.customer || mongoose.model("customer", customerSchema);
export default customerModel;