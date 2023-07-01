import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Styles/Admins.css";
import Form from "./Admin/Form";
export default function Admin() {
  return (
    <div>
      <div id="main_container">
        <div id="sidebar">
          <h1>Admin Dashboard</h1>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Products</li>
            <li>Admin</li>
          </ul>
        </div>
        <div id="content">
          <Form />
        </div>
      </div>
    </div>
  );
}
