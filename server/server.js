
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MediQueue Backend is running!");
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MediQueue API is working",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`MediQueue server running on port ${PORT}`);
});
