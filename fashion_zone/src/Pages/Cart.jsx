import React from "react";
import "./Styles/Carts.css";
import { BiCartAlt, BiBadgeCheck } from "react-icons/bi";
export default function Cart() {
  let cart_arr = [1, 2, 3];
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
        {cart_arr.map((ele, i) => (
          <div className="cart-item">
            <div className="cart-item__image">
              <img
                src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/b/3/2/xxl-st10-vebnor-original-imagzdu7azhy9tvf.jpeg?q=70"
                alt="Product Image"
              />
            </div>
            <div className="cart-item__details">
              <div className="cart-item__name">TShirt</div>
              <div className="cart-item__title">
                Men Striped Round Neck Cotton Blend Blue T-Shirt
              </div>
              <div className="cart-item__price">$10.00</div>
              <div className="cart-item__quantity">
                <div className="cart-item__quantity-controls">
                  <button>-</button>
                  <div className="cart-item__quantity-value">1</div>
                  <button>+</button>
                </div>
              </div>
              <div className="cart-item__remove">Remove</div>
            </div>
          </div>
        ))}
        <div className="cart-page__subtotal">
          Total Quantity: {cart_arr.length}
        </div>
        <div className="cart-page__subtotal">Total Price: $40.00</div>

        <a href="/checkout" className="cart-page__checkout-btn">
          Proceed to Checkout <BiBadgeCheck />
        </a>
      </div>
    </div>
  );
}
