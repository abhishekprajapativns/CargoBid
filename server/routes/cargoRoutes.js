const express = require("express");
const router = express.Router();
const { postCargo, getMyCargos } = require("../controllers/cargoController");
const { protect } = require("../middleware/authMiddleware");

router.post("/post", protect, postCargo);
router.get("/my-cargos", protect, getMyCargos);

module.exports = router;
