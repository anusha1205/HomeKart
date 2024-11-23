import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//app config
const app = express();
const port = 4000;

//middlewares
app.use(express.json());
app.use(cors());
app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.listen(port , ()=>{
    console.log(`Server started on http://localhost:${port}`);
})

//mongodb+srv://hyperstack:Certech69@cluster0.1kffr.mongodb.net/?