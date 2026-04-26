const express = require("express");
const router = express.Router();
const {
  placeQuote,
  getQuotesByCargo,
} = require("../controllers/cargoQuoteController");
const { protect } = require("../middleware/authMiddleware");

router.post("/place", protect, placeQuote);
router.get("/:cargoId", protect, getQuotesByCargo);

module.exports = router;
