import React from "react";
import "./SampleCard.css";
import { Link as RouterLink } from "react-router-dom";

export default function Prosection() {
  let products_Data = [
    {
      image:
        "https://olavi.in/cdn/shop/collections/Men_oversize_tshirt_540x.jpg?v=1673349126",
      name: "MENS OVERSIZED",
      dis: "/mens",
    },
    {
      image:
        "https://olavi.in/cdn/shop/collections/Women_oversize_540x.jpg?v=1673349166",
      name: "WOMENS OVERSIZED",
      dis: "/womens",
    },
    {
      image:
        "https://olavi.in/cdn/shop/collections/Mens_sweatshirt_540x.jpg?v=1673349105",
      name: "MENS SWEET SHIRT",
      dis: "/mens",
    },
    {
      image:
        "https://olavi.in/cdn/shop/collections/Women_crop_540x.jpg?v=1673349157",
      name: "CROP TOP",
      dis: "/womens",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/832/832/l3es13k0/track-pant/7/h/q/s-cargo-jerkyn-original-imagegqvz6zm5hrq.jpeg?q=70",
      name: "MENS OVERSIZED",
      dis: "/mens",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/832/832/l23mhzk0/t-shirt/c/f/f/m-ldt-003-swaggerjns-original-imagdgs7pgwwqyas.jpeg?q=70",
      name: "WOMENS OVERSIZED",
      dis: "/womens",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/7/h/n/30-gd-165-grey-old-jersey-original-imagqyq3bq4jggth.jpeg?q=70",
      name: "CROP TOP",
      dis: "/mens",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/y/t/y/42-gold-da-1101-single-button-gold-d-a-fashion-original-imagnkwj9rkc8srr.jpeg?q=70",
      name: "WOMENS SWEET SHIRT",
      dis: "/womens",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/832/832/l3khsi80/track-suit/1/5/t/xxl-tracksuit-5031grey-chrome-coral-original-imagenwqpgj6zqjr.jpeg?q=70",
      name: "MENS SWEET SHIRT",
      dis: "/mens",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/kxp0mfk0/track-suit/t/p/5/xxl-pltaw004grey-pretty-loving-thing-original-imaga36dszyn2kqg.jpeg?q=70",
      name: "CROP TOP",
      dis: "/womens",
    },
  ];
  return (
    <>
      <img src="https://sslimages.shoppersstop.com/sys-master/root/h34/h2b/30163268730910/Mini-Fashion%2C-Major-Savings_Strip-web_47638999376fj.jpg" />
      ;
      <div id="maincard_divs">
        {products_Data.map((ele, i) => (
          <RouterLink to={`${ele.dis}`}>
            <div class="cards">
              <img src={ele.image} alt="Product Image" />
              <p>{ele.name}</p>
            </div>
          </RouterLink>
        ))}
      </div>
    </>
  );
}

// Prosection
