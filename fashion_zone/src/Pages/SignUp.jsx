import React, { useState } from "react";
import "./Styles/Account.css";
import axios from "axios";
import { toast } from "react-toastify";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [genders, setGenders] = useState("");
  const submituser = (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      pass,
      genders,
    };
    axios
      .post(`https://fashionzonelink.onrender.com/users`, obj)
      .then((res) => {
        console.log(res);
        toast.success("Account Created Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="hello">
      <div id="bodys">
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

            <div class="form-group">
              <label for="gender">Gender</label>
              <select
                id="gender"
                onChange={(e) => setGenders(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
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
            Allready an Account to FashionZone! <a href="/">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
