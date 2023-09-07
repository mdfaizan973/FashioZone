import React from "react";
import "./Styles/Homes.css";
import HomeCar1 from "./Carousal/HomeCar1";
import SampleProCards from "./Cards/SampleProCards";
import Prosection from "./Cards/Prosection";
import Navbars from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbars />

      <div className="banner_img">
        <img
          src="https://user-images.githubusercontent.com/106812942/262240177-346ff948-c5c3-4935-9c88-c925a2611809.jpg"
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
        <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg" />
        <img
          style={{ margin: "5px 0px" }}
          src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
        />
        <img src="https://static.vecteezy.com/system/resources/previews/016/179/950/original/editable-elegant-sales-banner-template-for-social-media-clothing-store-instagram-web-and-internet-ads-abstract-square-art-templates-with-floral-and-leaves-elements-vector.jpg" />
      </div>
      <SampleProCards />
      <Footer />
    </div>
  );
}
