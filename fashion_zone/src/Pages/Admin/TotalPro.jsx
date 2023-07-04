import React, { useEffect, useState } from "react";
import "./TotalPro.css";
import { Link as RouterLink } from "react-router-dom";
import { FiEdit, FiDelete } from "react-icons/fi";
import axios from "axios";
export default function TotalPro() {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <div id="main_containeraa">
        <div id="sidebarsaa">
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
        <div id="contentaa">
          <ProductsCard />
        </div>
      </div>
    </div>
  );
}

function ProductsCard() {
  const [data, setData] = useState([]);
  const getdata = () => {
    axios
      .get("http://localhost:8080/web_data")
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

  const handledelete = (id) => {
    axios
      .delete(`http://localhost:8080/web_data/${id}`)
      .then((res) => {
        // console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div div id="maincont">
      {data.reverse().map((ele, i) => (
        <div class="containerr">
          <div class="cardd">
            <img id="proimgs" src={ele.img1} />

            <h2 class="card__title"></h2>
            <div class="card__content">
              <div class="card__features">
                <p class="card__feature">{ele.title.substring(0, 20)}</p>
                <p class="card__feature">
                  {ele.name} - {ele.gender.toUpperCase()}
                </p>
                <p class="card__feature">$ {ele.price}</p>
              </div>
              <div id="btngrp">
                <a class="card__link" id="edits">
                  <RouterLink to={`/edit/${ele.id}`}>
                    <FiEdit />
                  </RouterLink>
                </a>
                <button onClick={() => handledelete(ele.id)} class="card__link">
                  <FiDelete />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// https://rukminim1.flixcart.com/image/832/832/kkh6zrk0/t-shirt/w/j/n/m-t344hs-whsb-new-eyebogler-original-imafztgjdpkvr8ab.jpeg?q=70
