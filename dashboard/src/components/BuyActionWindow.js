import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [successMsg, setSuccessMsg] = useState("");

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    axios
      .post("http://localhost:8080/neworder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      })
      .then((res) => {
        setSuccessMsg(`Successfully bought ${stockQuantity} stokes of ${uid}`);
        setTimeout(() => {
          closeBuyWindow();
        }, 3000);
      })
      .catch((err) => {
        console.error("Buy order error:", err);
        alert("Something went wrong while placing the order!");
      });
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      {successMsg && <div className="success-msg">{successMsg}</div>}
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
