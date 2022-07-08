import "./Navbar.css";
import earth from "../assets/earth.svg";
import React from "react";

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <img className="navbar__icon" src={earth} alt="earth icon" />
        <p className="navbar__title">my travel journal.</p>
      </div>
    </React.Fragment>
  );
}
