import React, { useEffect, useState } from "react";
import "./Styles/Carts.css";
import { BiCartAlt, BiBadgeCheck } from "react-icons/bi";
import axios from "axios";
export default function Cart() {
  const [cart_pro, setCart_Pro] = useState([]);
  const [tprice, setTprice] = useState(0);
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
  return (
    <div>
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
              <div className="cart-item__title">{ele.title}</div>
              <div className="cart-item__price">${ele.price}</div>
              <div className="cart-item__quantity">
                <div className="cart-item__quantity-controls">
                  <button>-</button>
                  <div className="cart-item__quantity-value">1</div>
                  <button>+</button>
                </div>
              </div>
              <div
                onClick={() => handleDelete(ele.id)}
                className="cart-item__remove"
              >
                Remove
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
    </div>
  );
}
