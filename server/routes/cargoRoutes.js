const express = require("express");
const router = express.Router();
const { postCargo, getMyCargos } = require("../controllers/cargoController");
const { Protect } = require("../middleware/authMiddleware");

router.post("/post", postCargo);
router.get("/my-cargos", Protect, getMyCargos);

module.exports = router;
