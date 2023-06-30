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
          <RouterLink to="/home">
            <div class="web-logo">
              Fashion<span className="zone">Zone</span>
            </div>
          </RouterLink>
        </div>
        <div id="link" className={isMenuOpen ? "open" : ""}>
          <button className="link-button"></button>
          <RouterLink to="/mens">
            <button className="link-button">MENS ▽</button>
          </RouterLink>
          <RouterLink to="/womens">
            <button className="link-button">WOMENS ▽</button>
          </RouterLink>
          <RouterLink to="/mens">
            <button className="link-button">BOYS ▽</button>
          </RouterLink>
          <RouterLink to="/womens">
            <button className="link-button">GIRLS ▽</button>
          </RouterLink>
          <RouterLink to="/cart">
            <button className="refer-button">
              Your Cart -
              <FaOpencart />
            </button>
          </RouterLink>
          <RouterLink to="/">
            <button className="login">
              LOGIN -
              <HiUserCircle />
            </button>
          </RouterLink>
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
