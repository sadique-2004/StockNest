import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Pricing() {
  return (
    <div className="container mt-5 px-4">
      <div className="row justify-content-center text-center text-md-start">
        <div className="col-12 col-md-4 mb-4">
          <h2 className="mb-3">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none">
            See pricing <IoIosArrowRoundForward />
          </a>
        </div>

        <div className="col-12 col-sm-6 col-md-2 d-flex flex-column align-items-center mb-4">
          <img
            src="Media/Assets/pricing0.svg"
            alt="Free account opening"
            className="img-fluid mb-2"
            style={{ width: "80px", height: "80px" }}
          />
          <p className="mb-0 small text-center">Free account opening</p>
        </div>

        <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center mb-4">
          <img
            src="Media/Assets/pricing0.svg"
            alt="Free equity delivery"
            className="img-fluid mb-2"
            style={{ width: "80px", height: "80px" }}
          />
          <p className="mb-0 small text-center">
            Free equity delivery and direct mutual funds
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center mb-4">
          <img
            src="Media/Assets/pricing20.svg"
            alt="Intraday and F&O"
            className="img-fluid mb-2"
            style={{ width: "80px", height: "80px" }}
          />
          <p className="mb-0 small text-center">Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
