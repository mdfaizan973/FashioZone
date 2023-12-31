import React, { useState, useEffect } from "react";
import "./Styles/Mens.css";
import { Input, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { BiCartAlt } from "react-icons/bi";

import { toast } from "react-toastify";
import SampleProCards from "./Cards/SampleProCards";
import Prosection from "./Cards/Prosection";
import Navbars from "../Components/Navbar";
import Footer from "../Components/Footer";
export default function Womens() {
  const [prod, setProd] = useState([]);
  const [sear, setSear] = useState("");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [pagelength, setPagelength] = useState(0);
  const itemshow = 12;
  const getData = (sear, page, filter) => {
    console.log(filter);
    axios
      .get(`https://fashionzonelink.onrender.com/web_data?gender=womens`)
      .then((res) => {
        setPagelength(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://fashionzonelink.onrender.com/web_data?gender=womens&_limit=${itemshow}&_page=${page}`
      )
      .then((res) => {
        setProd(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData(sear, page, filter);
  }, [sear, page, filter]);

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
  const henaldfilter = (e) => {
    const filtertext = e.target.value.toUpperCase();
    setSear(filtertext);
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
      <Navbars />
      <div id="searchingcon">
        <Input
          onChange={handleSearch}
          border={"2px solid black"}
          color={"black"}
          w={"30%"}
          placeholder="🔍 Search...."
        />
      </div>
      <div id="img_ban">
        <img src="https://user-images.githubusercontent.com/106812942/262233103-1701e635-af72-4d89-823a-008a1e5b1aa3.png" />
      </div>
      <div id="functionalaties">
        <div id="filt_con">
          <select id="filtering" onChange={henaldfilter}>
            <option value={""}>Fliter by Name</option>
            <option value={"Shirt"}>Shirt</option>
            <option value={"TShirt"}>T-Shirt</option>
            <option value={"Jeans"}>Jeans</option>
            <option value={"Track Pant"}>Track Pant</option>
          </select>
        </div>
        <div id="sort_con">
          <button className="sbutton" onClick={sort_asc}>
            $ Low To High ⬆️
          </button>
          <button className="sbutton" onClick={sort_desc}>
            $ High To Low ⬇️
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
      {/* <Prosection /> */}
      <SampleProCards />
      <Footer />
    </>
  );
}

function ProductsCard(data) {
  let item = data.data;

  const handle_addto_cart = (id) => {
    toast.success("Product added to cart");
    axios
      .get(`https://fashionzonelink.onrender.com/web_data/${id}`)
      .then((res) => {
        console.log(res.data);
        // cartval(res.data);
        axios
          .post(`https://fashionzonelink.onrender.com/cart`, res.data)
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
    <div>
      <div>
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
      </div>
    </div>
  );
}
