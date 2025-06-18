import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Pricing() {
  return (
    <div className="container mt-5 px-5">
      <div className="row mt-5  mx-5">
        <div className="col-3.5">
          <h2 className="mb-3">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none ">
            See pricing <IoIosArrowRoundForward />
          </a>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-2.5 d-flex align-items-center ">
          <img
            src="Media/Assets/pricing0.svg"
            alt="Pricing"
            className="img-fluid mb-2"
            style={{ width: "80px", height: "80px", }}
          />
          <p className="mb-0 small">Free account opening</p>
        </div>

        <div className="col-2.5 d-flex align-items-center ">
          <img
            src="Media/Assets/pricing0.svg"
            alt="Pricing"
            className="img-fluid mb-2"
            style={{ width: "80px", height: "80px", }}
          />
          <p className="mb-0 small">Free equity delivery and direct mutual funds</p>
        </div>

        <div className="col-3 d-flex align-items-center ">
          <img
            src="Media/Assets/pricing20.svg"
            alt="Pricing"
            className="img-fluid mb-2"
            style={{ width: "80px", height: "80px", }}
          />
          <p className="mb-0 small">Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
