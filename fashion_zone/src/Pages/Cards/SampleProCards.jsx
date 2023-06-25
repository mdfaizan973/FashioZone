import React from "react";
import "./SampleCard.css";
export default function SampleProCards() {
  return (
    <div>
      <Prosection />
    </div>
  );
}
function Prosection() {
  let products_Data = [
    {
      image:
        "https://sslimages.shoppersstop.com/sys-master/root/h8d/h3e/30162824232990/4-Widget-web-denims_x080623v.jpg",
    },
    {
      image:
        "https://sslimages.shoppersstop.com/sys-master/root/hc8/hc9/30163261292574/Today_s-Top-Pick-4-Widgets-Web-men%E2%80%99s-T-shirt_fe090623fjj.jpg",
    },
    {
      image:
        "https://sslimages.shoppersstop.com/sys-master/root/h27/hf1/30162818007070/4-Widget-web-Bottomwear_x080623h.jpg",
    },
    {
      image:
        "https://sslimages.shoppersstop.com/sys-master/root/hfa/hbf/30163261554718/Today_s-Top-Pick-4-Widgets-Web-Casual-Shoes_090623.jpg",
    },
    {
      image:
        "https://sslimages.shoppersstop.com/sys-master/root/hb4/h0f/30223702130718/4-Widget-web-Dresses-%26-Jumpsuits_eoss-23_01.jpg",
    },
  ];

  return (
    <>
      <div id="maincard_divs">
        {products_Data.map((ele, i) => (
          <div class="cards">
            <img src={ele.image} alt="Product Image" />
          </div>
        ))}
      </div>
    </>
  );
}
