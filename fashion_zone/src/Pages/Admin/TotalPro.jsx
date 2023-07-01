import React from "react";
import "./TotalPro.css";
import { Link as RouterLink } from "react-router-dom";
import "../Styles/Admins.css";
export default function TotalPro() {
  return (
    <div>
      <div id="main_container">
        <div id="sidebar">
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
          <ProductsCard />
        </div>
      </div>
    </div>
  );
}

function ProductsCard() {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div div id="maincont">
      {arr.map((ele, i) => (
        <div class="containerr">
          <div class="cardd">
            <img
              id="proimgs"
              src="https://rukminim1.flixcart.com/image/832/832/kkh6zrk0/t-shirt/w/j/n/m-t344hs-whsb-new-eyebogler-original-imafztgjdpkvr8ab.jpeg?q=70"
            />

            <h2 class="card__title">
              Product <span class="card__titleSpan">One</span>
            </h2>
            <div class="card__content">
              <div class="card__features">
                <p class="card__feature">Feature Number One</p>
                <p class="card__feature">Feature Number Two</p>
                <p class="card__feature">Feature Number Tree</p>
              </div>
              <a href="#" class="card__link">
                Go to Product
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// https://rukminim1.flixcart.com/image/832/832/kkh6zrk0/t-shirt/w/j/n/m-t344hs-whsb-new-eyebogler-original-imafztgjdpkvr8ab.jpeg?q=70
