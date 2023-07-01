import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Styles/Admins.css";
import Form from "./Admin/Form";
export default function Admin() {
  return (
    <div>
      <div id="main_container">
        <div id="sidebars">
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
        <div id="contentr">
          <Form />
        </div>
      </div>
    </div>
  );
}
