import React, { useEffect, useState } from "react";
import "./Styles/Carts.css";
import { BiCartAlt, BiBadgeCheck } from "react-icons/bi";
import axios from "axios";
import { HiBackspace } from "react-icons/hi";
import SampleProCards from "./Cards/SampleProCards";
import Navbars from "../Components/Navbar";
import Footer from "../Components/Footer";
import Prosection from "./Cards/Prosection";
export default function Cart() {
  const [cart_pro, setCart_Pro] = useState([]);
  const [qty, setQty] = useState(1);

  const getcartdata = () => {
    axios
      .get(`http://localhost:8888/cart`)
      .then((res) => {
        setCart_Pro(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8888/cart/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getcartdata();
  }, []);

  let sum = 0;
  for (let elem of cart_pro) {
    sum += +elem.price;
  }
  const handleClick = (val) => {
    setQty(qty + val);
  };
  return (
    <div>
      <Navbars />

      <div className="cart-page">
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          My Cart - <BiCartAlt />
        </h1>
        {cart_pro.map((ele, i) => (
          <div key={ele.id} className="cart-item">
            <div className="cart-item__image">
              <img src={ele.img1} alt="Product Image" />
            </div>
            <div className="cart-item__details">
              <div className="cart-item__name">{ele.name}</div>
              <div className="cart-item__title">
                {ele.title} <span id="genspan">{ele.gender.toUpperCase()}</span>
              </div>
              <div className="cart-item__price">${ele.price}</div>
              <div className="cart-item__quantity">
                <div className="cart-item__quantity-controls">
                  <button disabled={qty === 1} onClick={() => handleClick(-1)}>
                    -
                  </button>
                  <div className="cart-item__quantity-value">{qty}</div>
                  <button onClick={() => handleClick(1)}>+</button>
                </div>
              </div>
              <div
                onClick={() => handleDelete(ele.id)}
                className="cart-item__remove"
              >
                <HiBackspace /> Remove
              </div>
            </div>
          </div>
        ))}
        <div className="cart-page__subtotal">
          Total Quantity: {cart_pro.length}
        </div>
        <div className="cart-page__subtotal">Total Price: $ {sum}</div>

        <a href="/checkout" className="cart-page__checkout-btn">
          Proceed to Checkout <BiBadgeCheck />
        </a>
      </div>
      <Prosection />
      <Footer />
    </div>
  );
}
