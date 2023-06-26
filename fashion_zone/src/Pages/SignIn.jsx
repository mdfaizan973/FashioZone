import React, { useState } from "react";
import "./Styles/Account.css";
import { toast } from "react-toastify";
import axios from "axios";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleuser_submit = (e) => {
    e.preventDefault();
    // let obj = {
    //   email,
    //   pass,
    // };
    if (email == "eve.holt@reqres.in") {
      fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pass }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("Admin Login Success...");
          window.location.href = "/"; //here should be admin
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch("http://localhost:8888/users")
        .then((response) => response.json())
        .then((users) => {
          const user = users.find(
            (user) => user.email === email && user.pass === pass
          );
          if (user) {
            toast.success("Login successful");
            let st = setTimeout(() => {
              window.location.href = "/";

              return () => st;
            }, 1000);
          } else {
            toast.error("Login Failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <div>
      <div id="body">
        <div className="login-container">
          <div className="login-logo"></div>

          <h2 className="login-title">Login</h2>

          <form className="login-form" onSubmit={handleuser_submit}>
            <div className="form-group">
              <label for="username">Email address</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPass(e.target.value)}
                required
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
