import React, { useState, useEffect } from "react";
import "./Styles/Mens.css";
import { Input, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
export default function Mens() {
  const [prod, setProd] = useState([]);
  const [sear, setSear] = useState("");
  const [page, setPage] = useState(1);
  const [pagelength, setPagelength] = useState(0);
  // console.log(sear);

  const getData = (sear, page) => {
    axios
      .get("http://localhost:8888/mens_data")
      .then((res) => {
        // console.log(res.data);
        setPagelength(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
    // if (sear === "") {
    axios
      .get(`http://localhost:8888/mens_data?_limit=12&_page=${page}`)
      .then((res) => {
        // console.log(res.data);
        setProd(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(sear, page);
  }, [sear, page]);

  const total = pagelength;
  const itemshow = 12;
  let answer = Math.ceil(total / itemshow);
  let output = [];
  for (let i = 1; i <= answer; i++) {
    output.push(i);
  }
  const handlepages = (val) => {
    setPage(val);
  };

  const handleSearch = (e) => {
    const searchedText = e.target.value.toUpperCase();
    setSear(searchedText);
  };
  const filteredData = prod.filter((item) =>
    item.name.toUpperCase().includes(sear)
  );
  // setProd(filteredData);
  // console.log(filteredData, sear);
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
      <div id="maincontainer">
        {prod.length ? (
          <div id="pdoducts">
            {filteredData.map((ele, i) => (
              <ProductsCard key={i} data={ele} />
            ))}
          </div>
        ) : (
          <div
            style={{
              width: "90%",
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="https://i.gifer.com/HrMe.gif" />
            <h1 style={{ fontSize: "2.5rem" }}>No Data Found..</h1>
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
    </>
  );
}

function ProductsCard(data) {
  let item = data.data;
  // console.log(item);

  return (
    <>
      <div id="productscards">
        <RouterLink to={`/details/${item.id}`}>
          <div className="flipkart-card">
            <img
              src={item.img1}
              alt="Product Image"
              className="product-image"
            />
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
    </>
  );
}
