const mongoose = require("mongoose");

const cargoQuoteSchema = new mongoose.Schema(
  {
    cargoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cargo",
      required: true,
    },

    transporterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    message: {
      type: String,
    },

    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const CargoQuote = mongoose.model("CargoQuote", cargoQuoteSchema);
module.exports = CargoQuote;
