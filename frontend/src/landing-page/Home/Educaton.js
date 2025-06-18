import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Education() {
  return (
    <div className="container mt-5 px-4">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="Media/Assets/education.svg"
            alt="Free and open market education"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-md-6">
          <h2 className="mb-4">Free and open market education</h2>
          <p>
            <strong>Varsity</strong>, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none d-inline-flex align-items-center mb-4">
            Varsity <IoIosArrowRoundForward size={20} className="ms-2" />
          </a>

          <p>
            <strong>TradingQ&A</strong>, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a href="#" className="text-decoration-none d-inline-flex align-items-center">
            TradingQ&A <IoIosArrowRoundForward size={20} className="ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
