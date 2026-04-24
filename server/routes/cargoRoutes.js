const express = require("express");
const router = express.Router();
const { postCargo } = require("../controllers/cargoController");

router.post("/post", postCargo);

module.exports = router;
