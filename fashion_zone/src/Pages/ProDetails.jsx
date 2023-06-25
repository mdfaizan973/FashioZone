import React from "react";
import "./Styles/Details.css";
export default function ProDetails() {
  return (
    <div>
      <div class="product-details">
        <div class="product-header">
          <div>
            <h1 class="product-title">Product Title</h1>
            <p class="product-price">$99.99</p>
          </div>
          <img
            src="https://m.media-amazon.com/images/I/71V0UjkEnpL._UY679_.jpg"
            alt="Product Image"
            class="product-image top-image"
          />
        </div>
        <div class="product-images">
          <img
            src="https://m.media-amazon.com/images/I/71V0UjkEnpL._UY679_.jpg"
            alt="Product Image 1"
          />
          <img
            src="https://m.media-amazon.com/images/I/71V0UjkEnpL._UY679_.jpg"
            alt="Product Image 2"
          />
          <img
            src="https://m.media-amazon.com/images/I/71V0UjkEnpL._UY679_.jpg"
            alt="Product Image 3"
          />
        </div>
        <div class="product-description">
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt enim vel lorem vulputate vestibulum.
          </p>
        </div>
        <div class="product-rating">
          <h2>Rating</h2>
          <p>4.5 out of 5 stars</p>
        </div>
        <div class="product-features">
          <h2>Key Features</h2>
          <ul class="feature-list">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
        <div class="product-details-section">
          <h2>Specifications</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="product-details-section">
          <h2>Package Includes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="product-details-section">
          <h2>Customer Reviews</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}
