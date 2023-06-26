import React, { useState, useEffect } from "react";
import "./Styles/Mens.css";
import { Input, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { BiCartAlt } from "react-icons/bi";

import { toast } from "react-toastify";
import SampleProCards from "./Cards/SampleProCards";
import Prosection from "./Cards/Prosection";
export default function Mens() {
  const [prod, setProd] = useState([]);
  const [sear, setSear] = useState("");
  const [page, setPage] = useState(1);
  const [pagelength, setPagelength] = useState(0);
  const itemshow = 12;

  const getData = (sear, page) => {
    axios
      .get("http://localhost:8888/mens_data")
      .then((res) => {
        setPagelength(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `http://localhost:8888/mens_data?gender=mens&_limit=${itemshow}&_page=${page}`
      )
      .then((res) => {
        setProd(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData(sear, page);
  }, [sear, page]);

  //pagination--
  const total = pagelength;
  let answer = Math.ceil(total / itemshow);
  let output = [];
  for (let i = 1; i <= answer; i++) {
    output.push(i);
  }
  const handlepages = (val) => {
    setPage(val);
  };

  //search--
  const handleSearch = (e) => {
    const searchedText = e.target.value.toUpperCase();
    setSear(searchedText);
  };
  const filteredData = prod.filter(
    (item) =>
      // return (
      item.name.toUpperCase().includes(sear) ||
      item.title.toUpperCase().includes(sear) ||
      item.price.toUpperCase().includes(sear)
    // )
  );
  //sorting--------
  const sort_asc = () => {
    let a = filteredData.sort(function (a, b) {
      return a.price - b.price;
    });
    setProd(a);
  };
  const sort_desc = () => {
    let a = filteredData.sort(function (a, b) {
      return b.price - a.price;
    });
    setProd(a);
  };

  return (
    <>
      <div id="searchingcon">
        <h2 className="searstext">SEARCH....</h2>
        <Input
          onChange={handleSearch}
          border={"2px solid black"}
          color={"black"}
          w={"30%"}
          placeholder="Search...."
        />
      </div>
      <div id="img_ban">
        <img src="https://olavi.in/cdn/shop/files/olavi_bnners_mens_1944x.jpg?v=1667538472" />
      </div>
      <div id="functionalaties">
        <div id="filt_con">Filter</div>
        <div id="sort_con">
          <button className="sbutton" onClick={sort_asc}>
            $ High To Low ⬇️
          </button>
          <button className="sbutton" onClick={sort_desc}>
            $ Low To High ⬆️
          </button>
        </div>
      </div>
      <div id="maincontainer">
        {filteredData.length ? (
          <div id="pdoducts">
            {filteredData.map((ele, i) => (
              <ProductsCard key={i} data={ele} />
            ))}
          </div>
        ) : (
          <div
            className="notfoundimg"
            style={{
              width: "90%",
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="https://i.gifer.com/HrMe.gif" />
            <h1 style={{ fontSize: "2.5rem" }}>
              No Data Found..{" "}
              <span style={{ fontSize: "1.4rem", color: "red" }}>
                Try another page
              </span>
            </h1>
          </div>
        )}
      </div>
      <div class="pagination">
        {output.map((ele, i) => (
          <button class="page-btn" onClick={() => handlepages(ele)}>
            {ele}
          </button>
        ))}
      </div>
      <Prosection />
      <SampleProCards />
    </>
  );
}

function ProductsCard(data) {
  let item = data.data;

  const handle_addto_cart = (id) => {
    toast.success("Product added to cart");
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
  };
  return (
    <>
      {/* to={`/details/${item.id}`} */}
      <div id="productscards">
        <RouterLink>
          <div className="flipkart-card">
            <RouterLink to={`/details/${item.id}`}>
              <img
                src={item.img1}
                alt="Product Image"
                className="product-image"
              />
            </RouterLink>
            <p className="product-title">{item.name}</p>
            <p className="product-price">${item.price}</p>
            <div className="product-rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <span className="star">&#9734;</span>
              <span class="custom-text">Mens</span>
            </div>
            <p className="product-description">
              {item.disc.substring(0, 70)}.........
            </p>
            <button
              className="add-to-cart"
              onClick={() => handle_addto_cart(item.id)}
            >
              <BiCartAlt />
              Add to Cart
            </button>
          </div>
        </RouterLink>
      </div>
    </>
  );
}
