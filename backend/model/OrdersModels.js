const {model} = require("mongoose");

const {OrderSchema} = require('../schemas/OrderSchema.js');

const OrderModel = model("order", OrderSchema);

module.exports = { OrderModel };
