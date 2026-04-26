const CargoQuote = require("../models/CargoQuote");

const placeQuote = async (req, res) => {
  try {
    const { cargoId, price, message } = req.body;

    const newQuote = await CargoQuote.create({
      cargoId,
      transporterId: req.user.id,
      price,
      message,
    });

    res
      .status(201)
      .json({ message: "quote placed successfully!", quote: newQuote });
  } catch (error) {
    res.status(500).json({ message: "Server error!", error: error.message });
  }
};

const getQuotesByCargo = async (req, res) => {
  try {
    const quotes = await CargoQuote.find({ cargoId: req.params.cargoId });
    res.status(200).json({ quotes });
  } catch (error) {
    res.status(500).json({ message: "Server error!", error: error.message });
  }
};

module.exports = { placeQuote, getQuotesByCargo };
