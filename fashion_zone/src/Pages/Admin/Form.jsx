import React from "react";
import "./Form.css";
import { toast } from "react-toastify";
export default function Form() {
  const handlesubmit = () => {
    toast("Data Added Successfully");
  };
  return (
    <div>
      <div class="web-logo">
        Fashion<span className="zone">Zone</span>
      </div>
      <div class="container">
        <h1>Add Your Data</h1>
        <div class="image-container">
          <input type="text" placeholder="Image 1" />
          <input type="text" placeholder="Image 2" />
          <input type="text" placeholder="Image 3" />
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select id="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" placeholder="Title" />
        </div>

        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Name" />
        </div>

        <div class="form-group">
          <label for="price">Price</label>
          <input type="text" id="price" placeholder="Price" />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" placeholder="Description"></textarea>
        </div>

        <button type="submit" onClick={handlesubmit}>
          Add Data
        </button>
      </div>
    </div>
  );
}
