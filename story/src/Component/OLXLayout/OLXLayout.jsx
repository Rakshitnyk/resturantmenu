import React from "react";
import "./OLXLayout.css";

const OLXLayout = () => {
  return (
    <div className="olx-container">
      {/* Header */}
      <header className="olx-header">
        <div className="logo">OLX</div>
        <select className="location-dropdown">
          <option>India</option>
        </select>
        <input type="text" placeholder='Search "Properties"' className="search-bar" />
        <button className="search-btn">🔍</button>
        <div className="header-icons">
          <span>❤</span>
          <span>💬</span>
          <span>🔔</span>
          <span className="profile-icon">👤</span>
        </div>
        <button className="sell-btn">+ SELL</button>
      </header>

      {/* Categories */}
      <nav className="olx-categories">
        <span>All Categories</span>
        <span>Cars</span>
        <span>Motorcycles</span>
        <span>Mobile Phones</span>
        <span>For Sale: Houses & Apartments</span>
        <span>Scooters</span>
        <span>Commercial & Other Vehicles</span>
        <span>For Rent: Houses & Apartments</span>
      </nav>

      {/* Fresh Recommendations - Horizontal Layout */}
      <div className="recommendations">
        <h2>Fresh Recommendations</h2>
        <div className="cards-horizontal">
          <div className="card-horizontal">
            <img src="house.jpg" alt="House" />
            <div className="card-details">
              <p className="price">₹ 14,500</p>
              <p>2 Bds • 2 Ba • 900 ft²</p>
              <p>Makhamalabad, Nashik</p>
              <p className="date">3 days ago</p>
            </div>
          </div>
          <div className="card-horizontal">
            <img src="steering.jpg" alt="Steering Wheel" />
            <div className="card-details">
              <p className="price">₹ 2,500</p>
              <p>Willys steering wheel jeep spare parts</p>
              <p>Marathwada Chowk, Balapur</p>
              <p className="date">Jan 27</p>
            </div>
          </div>
          <div className="card-horizontal">
            <img src="speaker.jpg" alt="Bluetooth Speaker" />
            <div className="card-details">
              <p className="price">₹ 349</p>
              <p>All types of brand new Bluetooth speakers</p>
              <p>Samudrapur, Maharashtra</p>
              <p className="date">2 days ago</p>
            </div>
          </div>
          <div className="card-horizontal">
            <img src="samsung.jpg" alt="Samsung Phone" />
            <div className="card-details">
              <p className="price">₹ 30,000</p>
              <p>Selling my 6-month-old Samsung</p>
              <p>Samudrapur MIDC, Maharashtra</p>
              <p className="date">5 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OLXLayout;