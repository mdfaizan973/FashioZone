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
    if (email === "admin_fz@gmail.com" && pass === "hello_admin") {
      fetch("https://fashionzonelink.onrender.com/admin")
        .then((response) => response.json())
        .then((users) => {
          const user = users.find(
            (user) => user.email === email && user.pass === pass
          );
          if (user) {
            toast.success("Admin Login Successful");
            let st = setTimeout(() => {
              window.location.href = "/adminpanel";
              return () => st;
            }, 1000);
          } else {
            toast.error("Login Failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      fetch("https://fashionzonelink.onrender.com/users")
        .then((response) => response.json())
        .then((users) => {
          const user = users.find(
            (user) => user.email === email && user.pass === pass
          );
          if (user) {
            toast.success("Login successful");
            let st = setTimeout(() => {
              window.location.href = "/home";
              return () => st;
            }, 1000);
          } else {
            let st2 = setTimeout(() => {
              toast.error("User Not Found");
              return () => st2;
            }, 1000);
            let st3 = setTimeout(() => {
              toast.info("If You Are New User Please Create Your Account");
              return () => st3;
            }, 2800);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <div id="hello">
      <div id="bodys">
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
