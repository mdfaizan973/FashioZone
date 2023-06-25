import React from "react";
import "./Styles/Homes.css";
import HomeCar1 from "./Carousal/HomeCar1";

export default function Home() {
  return (
    <div>
      <div className="banner_img">
        <img
          src="https://olavi.in/cdn/shop/files/2_240dd275-ca97-438b-8645-6fe8162a99cb_1944x.png?v=1681652675"
          alt="banner"
        />
      </div>
      <HomeCar1 />
      <div className="banner_img">
        <img
          src="https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg"
          alt="banner"
        />
      </div>
      <Prosection />
    </div>
  );
}

function Prosection() {
  let products_Data = [
    {
      image:
        "https://olavi.in/cdn/shop/collections/Men_oversize_tshirt_540x.jpg?v=1673349126",
      name: "MENS OVERSIZED TEES",
      dis: "Olavi presents this classic red oversized t-shirt .....",
    },
    {
      image:
        "https://olavi.in/cdn/shop/collections/Women_oversize_540x.jpg?v=1673349166",
      name: "WOMENS OVERSIZED TEES",
      dis: "Olavi is a brand dedicated to provide classic products ....",
    },
    {
      image:
        "https://olavi.in/cdn/shop/collections/Mens_sweatshirt_540x.jpg?v=1673349105",
      name: "MENS SWEET SHIRT",
      dis: "A fabric that is breathable ! Crafted from 100% cotton fleece ...",
    },
    {
      image:
        "https://olavi.in/cdn/shop/collections/Women_crop_540x.jpg?v=1673349157",
      name: "CROP TOP",
      dis: "Perfect for summers ! A perfect crop top to have in your closet ... ",
    },
  ];

  return (
    <>
      <div id="maincard_div">
        {products_Data.map((ele, i) => (
          <div class="card">
            <img src={ele.image} alt="Product Image" />

            <h3>{ele.name}</h3>
            <p>{ele.dis}</p>
          </div>
        ))}
      </div>
      <div id="saleimg">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h3e/h46/30154278731806/limited-time-offer-web_86489937.gif" />
      </div>
    </>
  );
}

// https://marketplace.canva.com/EAFYElY5EE4/1/0/1600w/canva-brown-and-white-modern-fashion-banner-landscape-Ap8IU9nEbh8.jpg
