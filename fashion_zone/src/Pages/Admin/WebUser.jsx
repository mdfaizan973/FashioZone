import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// import "../Styles/Admins.css";
import "./Web.css";
import axios from "axios";
export default function WebUser() {
  // let arr = [1, 2, 3, 4, 5, 7, 8];
  const [data, setData] = useState([]);
  const getdata = () => {
    axios
      .get("http://localhost:8888/users")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
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
        <div id="content">
          {data.map((ele, i) => (
            <Userfunc
              key={ele.id}
              datas={ele}
              // name={ele.name}
              // pass={ele.pass}
              // email={ele.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
//
function Userfunc(data) {
  console.log(data.datas.name);
  return (
    <div id="mainconti">
      <div class="mainq">
        <div class="containeq">
          <img
            class="profile-img"
            src="https://cdn.dribbble.com/users/1223630/screenshots/8115260/media/8145a871d9c4d67ec06e047ccc6574b4.gif"
          />
          <img
            class="background-img"
            src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
          />
          <p class="name">
            <img
              class="icon"
              src="https://cdn1.iconfinder.com/data/icons/micon-social-pack/512/twitch-512.png"
            />
            {data.datas.name}
          </p>
          <p class="bio">Email: {data.datas.email}</p>
          <p class="bio">Pass: {data.datas.pass}</p>
        </div>
      </div>
    </div>
  );
}
