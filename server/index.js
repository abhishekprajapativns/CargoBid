const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("CargoBid Server Running!");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port 5000! ");
  });
});
