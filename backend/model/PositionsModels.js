const {model} = require("mongoose");

const {PositionSchema} = require('../schemas/PositionsSchema.js');

const PositionModel = model("position", PositionSchema);

module.exports = { PositionModel };