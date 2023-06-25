import React, { useState, useEffect } from "react";
import "./Styles/Mens.css";
import { Input, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
export default function Mens() {
  const [prod, setProd] = useState([]);
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
  // http://localhost:8888/mens_data

  const getData = () => {
    axios
      .get("http://localhost:8888/mens_data")
      .then((res) => {
        // console.log(res.data);
        setProd(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div id="searchingcon">
        <h2 className="searstext">SEARCH....</h2>
        <Input
          border={"2px solid black"}
          color={"black"}
          w={"30%"}
          placeholder="Search...."
        />
      </div>
      <div id="img_ban">
        <img src="https://olavi.in/cdn/shop/files/olavi_bnners_mens_1944x.jpg?v=1667538472" />
      </div>
      <div id="maincontainer">
        <div id="pdoducts">
          {prod.map((ele, i) => (
            <ProductsCard data={ele} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProductsCard(data) {
  let item = data.data;
  // console.log(item);

  return (
    <div id="productscards">
      <RouterLink to={`/details/${item.id}`}>
        <div className="flipkart-card">
          <img src={item.img1} alt="Product Image" className="product-image" />
          <p className="product-title">{item.name}</p>
          <p className="product-price">${item.price}</p>
          <div className="product-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
            <span className="star">&#9734;</span>
          </div>
          <p className="product-description">
            {item.disc.substring(0, 70)}.........
          </p>
          <button className="add-to-cart">
            <i className="fas fa-heart"></i>Add to Cart
          </button>
        </div>
      </RouterLink>
    </div>
  );
}
