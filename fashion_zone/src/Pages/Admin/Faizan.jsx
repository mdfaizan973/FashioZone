import React from "react";

import { Link as RouterLink } from "react-router-dom";
import "../Styles/Admins.css";
export default function Faizan() {
  return (
    <div>
      <div id="main_container">
        <div id="sidebar">
          <h1>Admin Dashboard</h1>
          <ul>
            <RouterLink to="/adminpanel">
              <li>Dashboard</li>
            </RouterLink>
            <RouterLink to="/adminuser">
              <li>Users</li>
            </RouterLink>
            <RouterLink to="/allprod">
              <li>Products</li>
            </RouterLink>
            <RouterLink to="/faizan">
              <li>Admin</li>
            </RouterLink>
          </ul>
        </div>
        <div id="content">Faizan</div>
      </div>
    </div>
  );
}
