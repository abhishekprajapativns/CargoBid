const express = require("express");
const router = express.Router();
const {
  placeQuote,
  getQuotesByCargo,
  acceptQuote,
} = require("../controllers/cargoQuoteController");
const { protect } = require("../middleware/authMiddleware");

router.post("/place", protect, placeQuote);
router.get("/:cargoId", protect, getQuotesByCargo);
router.put("/:quoteId/accept", protect, acceptQuote);

module.exports = router;
