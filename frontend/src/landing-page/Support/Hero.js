import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center py-5"
      style={{ backgroundColor: "#3B7CD3", minHeight: "400px" }}
    >
      <div className="text-center text-white px-3">
        <h1 className="fw-bold display-5">Support Portal</h1>
        <p className="lead">Track tickets</p>
        <p className="mt-3">
          Search for an answer or browse help topics to create a ticket
        </p>
      </div>

      {/* Search Bar */}
      <div
        className="input-group mt-4 w-100 px-3"
        style={{ maxWidth: "500px" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
        <span className="input-group-text bg-white">
          <CiSearch size={20} className="text-primary" />
        </span>
      </div>

      {/* Information Sections */}
      <div className="row mt-5 text-white w-100 px-4">
        {/* Featured */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-semibold">Featured</h5>
          <ol className=" mt-2 ">
            <li className="text-decoration-underline">
              Scheme of arrangement in ABFRL
            </li>
            <li className="text-decoration-underline">
              Surveillance measure on scrips - May 2025
            </li>
          </ol>
        </div>

        {/* Quick Links */}
        <div className="col-md-4 mb-4 text-center">
          <h5 className="fw-semibold">Quick Links</h5>
          <ul className="list-unstyled mt-2 ">
            <li>
              <a href="#" className="text-white text-decoration-underline">
                Track account opening
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-underline">
                Track segment activation
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-underline">
                Intraday margins
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-underline">
                Kite user manual
              </a>
            </li>
          </ul>
        </div>

        {/* Optional Additional Info */}
        <div className="col-md-4 mb-4 text-center">
          <h5 className="fw-semibold">Need Help?</h5>
          <p className="mt-2">
            Can't find your answer? <br /> Contact support for further
            assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
