import React from "react";
import {Link} from "react-router-dom";

function Term() {
  return (
    <div className="container my-5">
      <div className="row">
        <h2
          className="text-center text-muted mb-4"
        >
          OUR BOSS
        </h2>
      </div>

      <div className="row align-items-center text-muted fs-6">
        {/* Image and Name */}
        <div className="col-12 col-md-4 mb-4 text-center">
          <img
            src="/Media/Assets/ceoImg.jpg"
            alt="Founder Md Sadique"
            className="img-fluid rounded mb-3"
            style={{ maxHeight: "320px", objectFit: "cover" }}
          />
          <h2>Md Sadique</h2>
          <h5 className="text-secondary">Founder & CEO</h5>
        </div>

        {/* About Section */}
        <div className="col-12 col-md-8 px-4" style={{ textAlign: "justify" }}>
          <p>
            Md Sadique founded <strong>StockNest</strong> in 2025 as a passion
            project to explore and understand stock market technologies more
            deeply. Inspired by platforms like Zerodha, StockNest is built for
            learning and experimentation.
          </p>
          <p>
            The platform is focused on integrating live stock market APIs,
            simulating trading features, and helping developers understand how
            such systems work under the hood.
          </p>
          <p>
            Built entirely from scratch using modern web technologies, StockNest
            reflects Sadique's dedication to learning full-stack development
            through real-world challenges.
          </p>
          <p>
            When not coding, he enjoys sharing knowledge, exploring financial
            systems, and occasionally diving into open-source contributions.
          </p>
          <p>
            Connect - {" "}
            <Link to="https://sadiquedev.xyz/" className="text-decoration-none">
              Portfolio
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Term;
