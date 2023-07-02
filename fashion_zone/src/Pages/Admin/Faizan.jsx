import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Faizan.css";
export default function Faizan() {
  return (
    <div>
      <div id="main_container_cc">
        <div id="sidebar_rr">
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
        <div id="content">
          <Faizancard />
        </div>
      </div>
    </div>
  );
}

function Faizancard() {
  return (
    <>
      <div>Hello</div>
    </>
  );
}
