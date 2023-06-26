import React from "react";
import "./Styles/Homes.css";
import HomeCar1 from "./Carousal/HomeCar1";
import SampleProCards from "./Cards/SampleProCards";
import Prosection from "./Cards/Prosection";

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
      <img
        style={{ margin: "auto", width: "90%" }}
        src="https://sslimages.shoppersstop.com/sys-master/root/h52/h02/30154282237982/today_s-top-picks-web---2023-06-09-new.gif"
        alt="banner"
      />
      <Prosection />
      <div id="saleimg">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h3e/h46/30154278731806/limited-time-offer-web_86489937.gif" />
        <img src="https://static.vecteezy.com/system/resources/previews/016/179/950/original/editable-elegant-sales-banner-template-for-social-media-clothing-store-instagram-web-and-internet-ads-abstract-square-art-templates-with-floral-and-leaves-elements-vector.jpg" />
      </div>
      <SampleProCards />
    </div>
  );
}
