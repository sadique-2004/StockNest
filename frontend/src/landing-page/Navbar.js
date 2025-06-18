import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom p-2 sticky-top bg-white">
      <div className="container">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img
              src="Media/Assets/logo.png"
              alt="Logo"
              style={{ width: "20%" }}
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
      { to: "/Signup", label: "Signup" },
      { to: "/about", label: "About" },
      { to: "/products", label: "Products" },
      { to: "/pricing", label: "Pricing" },
      { to: "/support", label: "Support" },
    ].map(({ to, label }) => (
      <li className="nav-item mx-3" key={to}>
        <NavLink
          to={to}
          className={({ isActive }) =>
            `nav-link ${isActive ? "custom-primary active" : "text-muted"}`
          }
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
</form>

          {/* <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive ? "active text-primary" : "text-muted"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  to="/Signup"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive ? "active text-primary" : "text-muted"
                    }`
                  }
                >
                  Signup
                </NavLink>
              </li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : "text-muted"}`
                }
                style={({ isActive }) =>
                  isActive ? { color: "#3B7CD3", fontWeight: "bold" } : {}
                }
              >
                About
              </NavLink>

              <li className="nav-item mx-3">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive ? "active text-primary" : "text-muted"
                    }`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive ? "active text-primary" : "text-muted"
                    }`
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive ? "active text-primary" : "text-muted"
                    }`
                  }
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
