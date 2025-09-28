require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const { HoldingsModel } = require("./model/HoldingsModels.js");
const { PositionModel } = require("./model/PositionsModels.js");
const { watchlistModel } = require("./model/WatchlistModels.js");
const { OrderModel } = require("./model/OrdersModels.js");

const PORT = process.env.PORT || 8080; // Default port
const URL = process.env.MONGO_URL; // MongoDB connection string

const app = express();

app.use(cors());
app.use(bodyParser.json());

// this is just for save the initial data to the database
// run this only once and then comment it out or delete it
// app.get("/sadique", (req, res) => {
//   let tempData = [
//     {
//       name: "INFY",
//       price: 1555.45,
//       percent: "-1.60%",
//       isDown: true,
//     },
//     {
//       name: "ONGC",
//       price: 116.8,
//       percent: "-0.09%",
//       isDown: true,
//     },
//     {
//       name: "TCS",
//       price: 3194.8,
//       percent: "-0.25%",
//       isDown: true,
//     },
//     {
//       name: "KPITTECH",
//       price: 266.45,
//       percent: "3.54%",
//       isDown: false,
//     },
//     {
//       name: "QUICKHEAL",
//       price: 308.55,
//       percent: "-0.15%",
//       isDown: true,
//     },
//     {
//       name: "WIPRO",
//       price: 577.75,
//       percent: "0.32%",
//       isDown: false,
//     },
//     {
//       name: "M&M",
//       price: 779.8,
//       percent: "-0.01%",
//       isDown: true,
//     },
//     {
//       name: "RELIANCE",
//       price: 2112.4,
//       percent: "1.44%",
//       isDown: false,
//     },
//     {
//       name: "HUL",
//       price: 512.4,
//       percent: "1.04%",
//       isDown: false,
//     },
//   ];

//   tempData.forEach(async (item) => {
//     const watchlistMod = new watchlistModel({
//       name: item.name,
//       price: item.price,
//       percent: item.percent,
//       isDown: item.isDown,
//     });
//     await watchlistMod.save();
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

app.get("/orders", async (req, res) => {
  let AllOrders = await OrderModel.find({});
  res.json(AllOrders);
});

app.post("/neworder", async (req, res) => {
  let newOrderData = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrderData.save();
  res.json({ message: "New order created successfully" });
});





mongoose
  .connect(URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    // Start the server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });
