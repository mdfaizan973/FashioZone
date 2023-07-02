import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import "./Web.css";
import axios from "axios";
import { toast } from "react-toastify";
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
            <Userfunc key={ele.id} datas={ele} />
          ))}
        </div>
      </div>
    </div>
  );
}
//
function Userfunc(data) {
  const deleteuser = (id) => {
    axios
      .delete(`http://localhost:8888/users/${id}`)
      .then((res) => {
        toast.error("Delete User Successfully");
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="mainconti">
      <div class="mainq">
        <div class="containeq">
          {data.datas.genders === "male" ? (
            <img
              class="profile-img"
              src="https://media.tenor.com/MFVP5T7W8okAAAAM/natsuya-kirishima-anime.gif"
            />
          ) : (
            <img
              class="profile-img"
              src="https://i.pinimg.com/originals/d2/26/d8/d226d8712d3974c1c1f5b3be1e76273b.gif"
            />
          )}

          <img
            class="background-img"
            src="https://gifdb.com/images/high/light-trails-wave-background-r4tz04b0l8kqi6do.gif"
          />
          <p class="name">
            <img
              class="icon"
              src="https://cdn1.iconfinder.com/data/icons/micon-social-pack/512/twitch-512.png"
            />
            {data.datas.name.toUpperCase()}
          </p>
          <p class="bio">Email: {data.datas.email}</p>
          <div id="btnpss">
            <p class="bio">Password: {data.datas.pass}</p>
            <button className="dbtn" onClick={() => deleteuser(data.datas.id)}>
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
