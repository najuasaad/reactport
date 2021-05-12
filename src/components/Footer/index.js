import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg fixed-bottom navbar-light bg-white justify-content-center">
      <div><p className="footfoot">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
        </p></div>
    </nav>
  );
}

export default Footer;