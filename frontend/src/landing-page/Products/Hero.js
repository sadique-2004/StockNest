import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h1 className="display-5 fw-bold mb-3" style={{ color: "#3B7CD3" }}>
              Stock Nest Products
            </h1>
            <p className="fs-5 text-muted mb-4">
              Sleek, modern, and intuitive trading platforms
            </p>
            <p className="mb-0">
              <Link to="/" className="btn btn-outline-primary px-4 py-2">
                Explore investment offerings →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
