const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cargoRoutes = require("./routes/cargoRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/cargo", cargoRoutes);

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("CargoBid Server Running!");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port 5000! ");
  });
});
