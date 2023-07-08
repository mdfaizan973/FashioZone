import React, { useState } from "react";
import "./Form.css";
import { toast } from "react-toastify";
import axios from "axios";
export default function Form() {
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [gender, setGender] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [disc, setDisc] = useState("");
  let obj = {
    img1,
    img2,
    img3,
    gender,
    title,
    name,
    price,
    disc,
  };
  const handlesubmit = () => {
    if (
      obj.img1 === "" ||
      obj.img2 === "" ||
      obj.img3 === "" ||
      obj.gender === "" ||
      obj.title === "" ||
      obj.name === "" ||
      obj.price === "" ||
      obj.disc === ""
    ) {
      toast.error("Fill all the boxes");
      return;
    } else {
      axios
        .post("https://fashionzonelink.onrender.com/web_data", obj)
        .then((res) => {
          // console.log(res);
          toast("Data Added Successfully");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <div class="web-logo">
        Fashion<span className="zone">Zone</span>
      </div>
      <div class="container">
        <h1>Add Your Data</h1>
        <div class="image-container">
          <input
            type="text"
            placeholder="Image 1"
            onChange={(e) => setImg1(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image 2"
            onChange={(e) => setImg2(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image 3"
            onChange={(e) => setImg3(e.target.value)}
            required
          />
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="mens">Male</option>
            <option value="womens">Female</option>
          </select>
        </div>

        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div class="form-group">
          <label for="name">Name</label>
          <select
            id="gender"
            onChange={(e) => setName(e.target.value)}
            required
          >
            <option value="">Select Name</option>
            <option value="Shirt">Shirt</option>
            <option value="TShirt">TShirt</option>
            <option value="Jeans">Jeans</option>
            <option value="Track Pant">Track Pant</option>
          </select>
        </div>

        <div class="form-group">
          <label for="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            placeholder="Description"
            onChange={(e) => setDisc(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" onClick={handlesubmit}>
          Add Data
        </button>
      </div>
    </div>
  );
}
