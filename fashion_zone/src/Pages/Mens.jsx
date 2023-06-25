import React from "react";
import "./Styles/Mens.css";
import { Link as RouterLink } from "react-router-dom";
export default function Mens() {
  const products = [
    {
      name: "Product 1",
      price: 9.99,
      description: "Lorem ipsum dolor sit amet.",
      image:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/r/i/v/xxl-aks-0150-ausk-original-imagk4nyd4c4hwug.jpeg?q=70",
    },
    {
      name: "Product 2",
      price: 14.99,
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:
        "https://m.media-amazon.com/images/I/41hEm7yG6oL._AC_UL600_FMwebp_QL65_.jpg",
    },
    {
      name: "Product 2",
      price: 14.99,
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://m.media-amazon.com/images/I/71V0UjkEnpL._UY679_.jpg",
    },
    {
      name: "Product 2",
      price: 14.99,
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/j/5/c/m-mennevypenalnew-dark-culture-original-imagktwhc4nzs8qu.jpeg?q=70",
    },
  ];
  return (
    <div id="maincontainer">
      <div id="pdoducts">
        {products.map((ele, i) => (
          <ProductsCard data={ele} />
        ))}
      </div>
    </div>
  );
}

function ProductsCard(data) {
  console.log(data.data.name);
  return (
    <div id="productscards">
      <RouterLink to={`/details/:${1}`}>
        <div className="flipkart-card">
          <img
            src={data.data.image}
            alt="Product Image"
            className="product-image"
          />
          <p className="product-title">{data.data.name}</p>
          <p className="product-price">${data.data.price}</p>
          <div className="product-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
            <span className="star">&#9734;</span>
          </div>
          <p className="product-description">{data.data.description}</p>
          <button className="add-to-cart">
            <i className="fas fa-heart"></i>Add to Cart
          </button>
        </div>
      </RouterLink>
    </div>
  );
}
