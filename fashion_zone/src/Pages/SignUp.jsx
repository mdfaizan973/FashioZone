import React from "react";
import "./Styles/Account.css";
export default function SignUp() {
  return (
    <div>
      <div id="body">
        <div className="login-container">
          <div className="login-logo"></div>

          <h2 className="login-title">Create Account</h2>

          <form className="login-form">
            <div className="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </div>

            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Enter your Email" />
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
            Allready an Account to FashionZone! <a href="/signin">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
