import React from "react";
import "./Styles/Checkout.css";
import { toast } from "react-toastify";
import Navbars from "./../Components/Navbar";
import Footer from "../Components/Footer";
export default function Checkout() {
  const handlecheckout = (e) => {
    e.preventDefault();
    toast.success("Payment successful!");
    let r = setTimeout(() => {
      window.location.href = "/home";

      return () => r;
    }, 2500);
  };
  return (
    <div>
      <Navbars />

      <div className="mainscreen">
        <div className="card">
          <div className="leftside">
            <img
              src="https://www.iwmbuzz.com/wp-content/uploads/2021/01/virat-kohli-looks-hot-in-casual-outfits-have-a-look-4.jpg"
              className="product"
              alt="Shoes"
            />
          </div>
          <div className="rightside">
            <form action="" onSubmit={handlecheckout}>
              <h1>CheckOut</h1>
              <h2>Payment Information</h2>
              <p>Cardholder Name</p>
              <input type="text" className="inputbox" name="name" required />
              <p>Card Number</p>
              <input
                type="number"
                className="inputbox"
                name="card_number"
                id="card_number"
                required
              />

              <p>Card Type</p>
              <select
                className="inputbox"
                name="card_type"
                id="card_type"
                required
              >
                <option value="">--Select a Card Type--</option>
                <option value="Visa">Visa</option>
                <option value="RuPay">RuPay</option>
                <option value="MasterCard">MasterCard</option>
              </select>
              <div className="expcvv">
                <p className="expcvv_text">Expiry</p>
                <input
                  type="date"
                  className="inputbox"
                  name="exp_date"
                  id="exp_date"
                  required
                />

                <p className="expcvv_text2">CVV</p>
                <input
                  type="password"
                  className="inputbox"
                  name="cvv"
                  id="cvv"
                  required
                />
              </div>
              <p></p>
              <button type="submit" className="button">
                Pay
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
