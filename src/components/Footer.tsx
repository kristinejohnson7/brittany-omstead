import React from "react";
import "../sass/Footer.scss";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="logoImg">
        <img src={logo} alt="footer logo" />
      </div>
    </div>
  );
}
