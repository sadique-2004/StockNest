import React from "react";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/clerk-react";

function Hero() {
  return (
    <div className="container p-5 text-center">
      <div className="row ">
        <img
          src="Media/Assets/homeHero.png"
          alt="Hero"
          className="img-fluid mb-5"
          style={{ maxHeight: "350px", objectFit: "contain" }}
        />

        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <SignedIn>
          <a
            href="https://stock-nest-dashboard.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg col-8 col-sm-6 col-md-4 col-lg-2 btn-custom-primary text-center"
            style={{ margin: "auto" }}
          >
            Start investing
          </a>
        </SignedIn>

        <SignedOut>
          <SignUpButton mode="modal">
            <button
              className="btn btn-lg col-8 col-sm-6 col-md-4 col-lg-2 btn-custom-primary text-center"
              style={{ margin: "auto" }}
            >
              Sign up for free
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </div>
  );
}

export default Hero;
