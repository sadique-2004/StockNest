import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Stats() {
  return (
    <div className="container mt-5 px-5">
      <div className="row mt-5  mx-5">
        <div className="col-5">
          <h2 className="mb-5">Trust with confidence</h2>

          <div className="mb-4">
            <h3>Customer-first always</h3>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h3>No spam or gimmicks</h3>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Our philosophies.
              </a>{" "}
            </p>
          </div>

          <div className="mb-4">
            <h3>The STOCK NEST universe</h3>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-4">
            <h3>Do better with money</h3>
            <p>
              With initiatives like{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Nudge
              </a>{" "}
              and{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Kill Switch
              </a>
              , we don't just facilitate transactions, but actively help you do
              better with your money.
            </p>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img
            src="Media/Assets/ecosystem.png"
            alt="Stats"
            // className="img-fluid"
            style={{ width: "90%" }}
          />

          <div
            className=" mt-5 text-center"
            style={{ fontSize: "1.2rem", margin: "auto" }}
          >
            <a href="#" className="text-decoration-none">
              Explore our products <IoIosArrowRoundForward />
            </a>
            <a href="#" className="text-decoration-none mx-5">
              Try Kite demo <IoIosArrowRoundForward />
            </a>
          </div>
        </div>
        <div className="col-12 mt-5 text-center">
          <a href="#" className="text-decoration-none mt-5">
            <img
              src="Media/Assets/pressLogos.png"
              alt="Awards"
              className="margin-auto"
              style={{ width: "60%" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
