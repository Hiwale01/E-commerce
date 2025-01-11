import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm py-3 sticky-top"
      style={{
        background: "linear-gradient(90deg, #222831, #393E46)", // Dark gradient
        borderBottom: "2px solid #00ADB5", // Highlight color
      }}
    >
      <div className="container">
        <NavLink
          className="navbar-brand fw-bold fs-4 text-uppercase px-2"
          to="/"
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#EEEEEE", // Light text
            letterSpacing: "1px",
          }}
        >
          React Ecommerce
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink
                className="nav-link px-3"
                to="/"
                style={{
                  fontSize: "16px",
                  color: "#EEEEEE", // Light text
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                }}
                activeStyle={{ color: "#00ADB5" }} // Active link color
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3"
                to="/product"
                style={{
                  fontSize: "16px",
                  color: "#EEEEEE",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                }}
                activeStyle={{ color: "#00ADB5" }}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3"
                to="/about"
                style={{
                  fontSize: "16px",
                  color: "#EEEEEE",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                }}
                activeStyle={{ color: "#00ADB5" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3"
                to="/contact"
                style={{
                  fontSize: "16px",
                  color: "#EEEEEE",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                }}
                activeStyle={{ color: "#00ADB5" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            <NavLink
              to="/login"
              className="btn btn-outline-light m-2"
              style={{
                borderRadius: "20px",
                padding: "8px 15px",
                fontSize: "14px",
                border: "1px solid #00ADB5",
                color: "#00ADB5",
                transition: "all 0.3s ease",
              }}
            >
              <i className="fa fa-sign-in-alt mr-1"></i> Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-outline-light m-2"
              style={{
                borderRadius: "20px",
                padding: "8px 15px",
                fontSize: "14px",
                border: "1px solid #00ADB5",
                color: "#00ADB5",
                transition: "all 0.3s ease",
              }}
            >
              <i className="fa fa-user-plus mr-1"></i> Register
            </NavLink>
            <NavLink
              to="/cart"
              className="btn btn-outline-light m-2"
              style={{
                borderRadius: "20px",
                padding: "8px 15px",
                fontSize: "14px",
                border: "1px solid #00ADB5",
                color: "#00ADB5",
                transition: "all 0.3s ease",
              }}
            >
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
