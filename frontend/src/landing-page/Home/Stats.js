import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Stats() {
  return (
    <div className="container mt-5 px-4">
      <div className="row mt-5">
        {/* Text Content */}
        <div className="col-12 col-md-6 mb-4">
          <h2 className="mb-4 text-center text-md-start">Trust with confidence</h2>

          <div className="mb-4">
            <h4>Customer-first always</h4>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
              investments and contribute to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h4>No spam or gimmicks</h4>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications. High quality
              apps that you use at your pace, the way you like.{" "}
              <a href="#" className="text-decoration-none">
                Our philosophies.
              </a>
            </p>
          </div>

          <div className="mb-4">
            <h4>The STOCK NEST universe</h4>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups
              offer you tailored services specific to your needs.
            </p>
          </div>

          <div className="mb-4">
            <h4>Do better with money</h4>
            <p>
              With initiatives like{" "}
              <a href="#" className="text-decoration-none">
                Nudge
              </a>{" "}
              and{" "}
              <a href="#" className="text-decoration-none">
                Kill Switch
              </a>
              , we don't just facilitate transactions, but actively help you do better with
              your money.
            </p>
          </div>
        </div>

        {/* Image and Links */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <img
            src="Media/Assets/ecosystem.png"
            alt="Stats"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />

          <div className="text-center mb-4" style={{ fontSize: "1.1rem" }}>
            <a href="#" className="text-decoration-none d-block mb-2">
              Explore our products <IoIosArrowRoundForward />
            </a>
            <a href="#" className="text-decoration-none d-block">
              Try Kite demo <IoIosArrowRoundForward />
            </a>
          </div>
        </div>

        {/* Press Logos */}
        <div className="col-12 text-center mt-4">
          <a href="#" className="text-decoration-none">
            <img
              src="Media/Assets/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "70%" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
