import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hyperstack:Certech69@cluster0.vgdka.mongodb.net/HomeKart').then(()=>console.log("DB CONNECTED"));
}

