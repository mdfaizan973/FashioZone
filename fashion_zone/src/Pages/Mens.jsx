import React from "react";
import "./Styles/Mens.css";
export default function Mens() {
  let arrays = [1, 2, 3, 4];
  return (
    <div id="maincontainer">
      <div id="pdoducts">
        {arrays.map((ele, i) => (
          <ProductsCard />
        ))}
      </div>
    </div>
  );
}

function ProductsCard() {
  const products = [
    {
      name: "Product 1",
      price: 9.99,
      description: "Lorem ipsum dolor sit amet.",
      image:
        "https://m.media-amazon.com/images/I/41hEm7yG6oL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
      name: "Product 2",
      price: 14.99,
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:
        "https://m.media-amazon.com/images/I/41hEm7yG6oL._AC_UL600_FMwebp_QL65_.jpg",
    },
  ];
  return (
    <div id="productscards">
      <div class="flipkart-card">
        <img
          src="https://m.media-amazon.com/images/I/71V0UjkEnpL._UY679_.jpg"
          alt="Product Image"
          class="product-image"
        />
        <p class="product-title">Peter England University </p>
        <p class="product-price">$99.99</p>
        <div class="product-rating">
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9734;</span>
          <span class="star">&#9734;</span>
        </div>
        <p class="product-description">
          Product Description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <button class="add-to-cart">
          <i class="fas fa-heart"></i>Add to Cart
        </button>
      </div>
    </div>
  );
}
