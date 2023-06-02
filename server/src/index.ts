import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.NODE_ENV === "dev" ? process.env.CLIENT_DEV_ORIGIN : "",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Authorization"],
  })
);

app.get("/", async (req, res) => {
  res.send("Hello, World");
});

app.listen(3000);
