import React from "react";
import { Link } from "react-router-dom";

const partners = [
  {
    img: "https://zerodha.com/static/images/partners/zerodhafundhouse.png",
    desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    img: "https://zerodha.com/static/images/products/sensibull-logo.svg",
    desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    img: "https://zerodha.com/static/images/partners/tijori.svg",
    desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
  {
    img: "https://zerodha.com/static/images/products/streak-logo.png",
    desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
  },
  {
    img: "https://zerodha.com/static/images/products/smallcase-logo.png",
    desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
  },
  {
    img: "https://zerodha.com/static/images/products/ditto-logo.png",
    desc: "Personalized advice on life and health insurance. No spam and no mis-selling.",
  },
];

const Universe = () => {
  return (
    <div className="container py-5 text-center">
      <p className="fs-4 mb-4">
        Want to know more about our technology stack? Check out the{" "}
        <Link className="text-decoration-none fw-bold" to="/">
          StockNest.tech
        </Link>{" "}
        blog.
      </p>

      <h2 className="text-muted mb-2">The StockNest Universe</h2>
      <p className="mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row justify-content-center g-5">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="col-12 col-md-4 d-flex flex-column align-items-center text-center"
          >
            <img
              src={partner.img}
              alt="partner"
              className="img-fluid"
              style={{ maxWidth: "120px" }}
            />
            <p className="text-muted mt-3 small" style={{ maxWidth: "300px" }}>
              {partner.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <button className="btn btn-custom-primary btn-lg w-25">Sign up for free</button>
      </div>
    </div>
  );
};

export default Universe;
