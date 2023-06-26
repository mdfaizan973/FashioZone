import React, { useEffect, useState } from "react";
import "./Styles/Details.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BiCartAlt } from "react-icons/bi";
export default function ProDetails() {
  const { id } = useParams();
  const [datadetails, setDatadetails] = useState("");
  // console.log(id);
  const getData = () => {
    axios
      .get(`http://localhost:8888/mens_data/${id}`)
      .then((res) => {
        // console.log(res.data);
        setDatadetails(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  var randomRating = Math.floor(Math.random() * 4) + 2;

  const handleaddcart = () => {
    toast.success("Products added to cart");
    axios
      .get(`http://localhost:8888/mens_data/${id}`)
      .then((res) => {
        console.log(res.data);
        // cartval(res.data);
        axios
          .post(`http://localhost:8888/cart`, res.data)
          .then((rest) => {
            console.log("cartd", rest.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      window.location.href = "/cart";
    }, 1000);
  };
  return (
    <div>
      <div class="product-details">
        <div class="product-header">
          <div>
            <h1 style={{ fontSize: "2rem" }} class="product-title">
              {datadetails.title}
            </h1>
            <p class="product-price">${datadetails.price}</p>
            <h2 class="product-title">{datadetails.name}</h2>
          </div>
          <img
            src={datadetails.img1}
            alt="Product Image"
            class="product-image top-image"
          />
        </div>
        <div class="product-images">
          <img src={datadetails.img2} alt="Product Image 1" />
          <img src={datadetails.img3} alt="Product Image 2" />
          <img src={datadetails.img1} alt="Product Image 3" />
        </div>
        <div class="product-description">
          <h2>Description</h2>
          <p style={{ fontSize: "1.2rem" }}>{datadetails.disc}</p>
        </div>
        <div class="product-rating">
          <h2 style={{ fontSize: "1.5rem" }}>
            <span className="star">&#9733;</span> Rating-{" "}
          </h2>
          <p style={{ fontSize: "1.5rem" }}> {randomRating} out of 5 stars</p>
        </div>
        <div class="product-features">
          <h2>Key Features</h2>
          <ul class="feature-list">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
        <div class="product-details-section">
          <h2>Specifications</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="product-details-section">
          <h2>Package Includes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="product-details-section">
          <h2>Customer Reviews</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <button class="add-to-cart" onClick={handleaddcart}>
          Add to Cart <BiCartAlt />
        </button>
      </div>
    </div>
  );
}
