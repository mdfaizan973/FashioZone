import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Styles/Admins.css";
export default function Admin() {
  return (
    <div>
      <div id="main_container">
        <div id="sidebar">
          <h1>Admin Dashboard</h1>
          <ul>
            <li class="active">Dashboard</li>
            <li>Users</li>
            <li>Products</li>
            <li>Orders</li>
          </ul>
        </div>
        <div id="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil
          quos inventore quas consectetur necessitatibus, tempore distinctio
          dolores. Reprehenderit commodi sint veniam fuga officiis eos
          reiciendis ipsa quis temporibus repudiandae quibusdam odit asperiores
          exercitationem dolorum officia eaque, sit corrupti iure, iste labore
          ducimus vitae deleniti accusantium hic. Molestiae, temporibus quidem?
        </div>
      </div>
    </div>
  );
}
