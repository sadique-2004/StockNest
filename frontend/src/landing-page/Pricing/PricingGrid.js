import React from "react";
import PricingCard from "./PricingCard";

function PricingGrid() {
  const pricingData = [
    {
      image: "Media/Assets/pricingEquity.svg",
      title: "Free equity delivery",
      description: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
    },
    {
      image: "Media/Assets/intradayTrades.svg",
      title: "Intraday and F&O trades",
      description: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
    },
    {
      image: "Media/Assets/pricingEquity.svg",
      title: "Free direct MF",
      description: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
    }
  ];

  return (
    <div className="container">
      <div className="row mb-5 p-4">
        {pricingData.map((item, index) => (
          <PricingCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default PricingGrid;

