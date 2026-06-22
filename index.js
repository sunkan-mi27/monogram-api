import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./authRoutes.js";
import orderRoutes from "./orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Monogram API is running🎨");
});

app.use("/auth", authRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost: ${PORT}`);
});
