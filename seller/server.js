import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js"
import customerRouter from "./routes/customerRoute.js";
import 'dotenv/config'



// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

//api endpoints
app.use("/api/product", productRouter)
app.use("/images", express.static('uploads'))
app.use("/api/customer", customerRouter)

// Routes
app.get("/", (req, res) => {
    res.send("hi bitch");
});

// Server start
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
