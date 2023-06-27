import React, { useState } from "react";
import "./Styles/Account.css";
import axios from "axios";
import { toast } from "react-toastify";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const submituser = (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      pass,
    };

    axios
      .post(`http://localhost:8888/users`, obj)
      .then((res) => {
        console.log(res);
        toast.success("Account Created Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div id="body">
        <div className="signin-container">
          <div className="login-logo"></div>

          <h2 className="login-title">Create Account</h2>

          <form className="login-form" onSubmit={submituser}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input type="submit" value="Register" />
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
