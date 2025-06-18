require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const { HoldingsModel } = require("./model/HoldingsModels.js");
const { PositionModel } = require("./model/PositionsModels.js");
const { OrderModel} = require('./model/OrdersModels.js')

const PORT = process.env.PORT || 8080; // Default port
const URL = process.env.MONGO_URL; // MongoDB connection string

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get("/sadique", (req, res) => {
//   let tempData = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempData.forEach(async (item) => {
//     const PositionMod = new PositionModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     await PositionMod.save();
//   });
//   res.send("Data saved successfully");
// });

app.get("/holdings", async (req, res) => {
  let AllHoldings = await HoldingsModel.find({});
  res.json(AllHoldings);
});

app.get("/positions", async (req, res) => {
  let AllPositions = await PositionModel.find({});
  res.json(AllPositions);
});

app.post("/neworder", async(req, res)=> {
  let newOrderData = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrderData.save();
  res.json({ message: "New order created successfully" });
})

app.listen(PORT, () => {
  console.log(`App Started &  Server is running on http://localhost:${PORT}`);
  // console.log(`MongoDB URI: ${URL}`);

  mongoose.connect(URL).then(() => {
    console.log("Connected to MongoDB");
  });
});
