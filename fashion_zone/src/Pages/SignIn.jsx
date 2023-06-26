import React from "react";
import "./Styles/Account.css";
export default function SignIn() {
  return (
    <div>
      <div id="body">
        <div className="login-container">
          <div className="login-logo"></div>

          <h2 className="login-title">Login</h2>

          <form className="login-form">
            <div className="form-group">
              <label for="username">Email address</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </div>

            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="form-group">
              <input type="submit" value="Login" />
            </div>
          </form>

          <div className="register-link">
            New to FashionZone? <a href="/signup">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
