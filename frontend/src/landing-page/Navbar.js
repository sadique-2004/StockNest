import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import { WelcomeBanner } from "./WelcomeBanner";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom p-2 sticky-top bg-white">
        <div className="container">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <Link className="navbar-brand" to="/">
              <img
                src="Media/Assets/logo.png"
                alt="Logo"
                style={{ width: "15%" }}
                className="img-fluid"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/products", label: "Products" },
                  { to: "/pricing", label: "Pricing" },
                  { to: "/support", label: "Support" },
                ].map(({ to, label }) => (
                  <li className="nav-item mx-3" key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `nav-link ${
                          isActive ? "custom-primary active" : "text-muted"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </form>

            <SignedOut>
              <SignInButton mode="modal" redirectUrl="/">
                <button
                  type="button"
                  className="btn nav-item text-muted"
                  style={{}}
                >
                  SignIn
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center space-x-2">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8", // Size of avatar
                    },
                  }}
                  afterSignOutUrl="/"
                />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
      <WelcomeBanner />
    </>
  );
};

export default Navbar;
