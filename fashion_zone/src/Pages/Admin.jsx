import React from "react";
import { Link as RouterLink } from "react-router-dom";
export default function Admin() {
  return (
    <div>
      <RouterLink to="/faizan">
        <h1 style={{ color: "red", fontSize: "5rem" }}>Admin ➡️ ➡️</h1>
      </RouterLink>
    </div>
  );
}
