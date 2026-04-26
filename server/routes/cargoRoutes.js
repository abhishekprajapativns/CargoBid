const express = require("express");
const router = express.Router();
const {
  postCargo,
  getMyCargos,
  getAllCargos,
} = require("../controllers/cargoController");
const { protect } = require("../middleware/authMiddleware");

router.post("/post", protect, postCargo);
router.get("/my-cargos", protect, getMyCargos);
router.get("/all", protect, getAllCargos);

module.exports = router;
