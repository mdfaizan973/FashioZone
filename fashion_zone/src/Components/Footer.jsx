import React from "react";
import "./Styles/Foot.css";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <div id="main_footer">
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-logo">FashionZone</div>
          <ul class="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="footer-social-icons">
          <a href="#">
            <AiFillTwitterCircle />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
        </div>
        <p class="footer-contact">
          Phone: 123-456-7890 | Email: info@example.com
        </p>
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
