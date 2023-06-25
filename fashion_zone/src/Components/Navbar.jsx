import React, { useState } from "react";
import "./Styles/Navb.css";
import { FaOpencart } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi2";
import { Link as RouterLink } from "react-router-dom";

export default function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className="img">
          <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="" />
        </div>
        <div id="link" className={isMenuOpen ? "open" : ""}>
          <button className="link-button"></button>
          <RouterLink to="/mens">
            <button className="link-button">MENS</button>
          </RouterLink>
          <button className="link-button">WOMENS</button>
          <button className="link-button">SPORTS</button>
          <button className="link-button">CATEGORY ▽</button>
          <button className="refer-button">
            Your Cart -
            <FaOpencart />
          </button>
          <button className="login">
            LOGIN -
            <HiUserCircle />
          </button>
        </div>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}
