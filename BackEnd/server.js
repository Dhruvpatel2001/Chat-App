import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    //root route https://localhost5000/
    res.send("Hello world!");   
});

app.use("/api/auth",authRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));