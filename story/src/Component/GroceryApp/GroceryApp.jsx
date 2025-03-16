import React from "react";
import { 
  FaHome, FaList, FaHeart, FaShoppingCart, FaEnvelope, FaTags, FaCog, FaSignOutAlt,
  FaAppleAlt, FaBreadSlice, FaCarrot, FaFish, FaDrumstickBite, FaCocktail, FaIceCream, FaLemon, FaFilter
} from "react-icons/fa";
import "./GroceryApp.css";

const GroceryApp = () => {
  const categories = [
    { name: "Fruits", icon: <FaAppleAlt /> },
    { name: "Bread", icon: <FaBreadSlice /> },
    { name: "Vegetable", icon: <FaCarrot /> },
    { name: "Fish", icon: <FaFish /> },
    { name: "Meat", icon: <FaDrumstickBite /> },
    { name: "Drinks", icon: <FaCocktail /> },
    { name: "Sea Food", icon: <FaFish /> },
    { name: "Ice Cream", icon: <FaIceCream /> },
    { name: "Juice", icon: <FaLemon /> },
  ];

  const products = [
    { name: "Strawberry", price: "$20.10", img: "https://img.freepik.com/free-vector/coloured-strawberries-design_1308-848.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Cabbage", price: "$15.10", img: "https://img.freepik.com/premium-photo/cabbage_53876-1412.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Broccoli", price: "$25.10", img: "https://img.freepik.com/premium-photo/broccoli-slicing-pieces-white-background_978449-323.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Orange", price: "$12.10", img: "https://img.freepik.com/free-photo/raw-cross-ingredient-studio-citrus_1172-204.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Fresh Apple", price: "$18.10", img: "https://img.freepik.com/free-photo/wicker-basket-fresh-juicy-apples-isolated-white_114579-43675.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  ];
  

  const discounts = [
    { text: "50% Discount", img: "https://img.freepik.com/free-vector/hand-drawn-grocery-shopping-sale-banner_23-2151031432.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { text: "20% Discount", img: "https://img.freepik.com/premium-photo/shopping-cart-with-percentage-symbol-black-background_184700-436.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { text: "30% Discount", img: "https://img.freepik.com/premium-photo/horizaontal-close-up-shot-unrecognizable-hand-holding-smartphone-with-discount-application-its-screen-with-fruits_274679-16065.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { text: "10% Discount", img: "https://img.freepik.com/premium-photo/flash-sale-ten-percent-off-groceries-goods_1387806-7630.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  ];
  

  const lastOrders = [
    { name: "breads", price: "$150", img: "https://img.freepik.com/free-photo/side-view-breads-as-sliced-seeded-brown-cob-rye-white-ones-bowl-cutting-board-wooden-background_141793-27330.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Fresh Apple", price: "$120", img: "https://img.freepik.com/premium-photo/red-apple-with-water-drops-isolated_55883-7840.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "ice cream", price: "$100", img: "https://img.freepik.com/free-photo/side-view-thai-ice-cream-roll-topped-with-colorful-sprinkles-cardboard-bowl-black-wall_140725-12922.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Sweets", price: "$90", img: "https://img.freepik.com/free-psd/delicious-golden-motichoor-ladoo-sweets-indian-dessert_84443-34495.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  ];

  return (
    <div className="grocery-app">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Sami Shop</h2>
        <ul>
          <li><FaHome /> Dashboard</li>
          <br/>
          <li><FaList /> Categories</li>
          <br/>
          <li><FaHeart /> Favourite</li>
          <br/>
          <li><FaShoppingCart /> Orders</li>
          <br/>
          <li><FaEnvelope /> Messages</li>
          <br/>
          <li><FaTags /> Top Deals</li>
          <br/>
          <li><FaCog /> Settings</li>
        </ul>
        <br />
        <button className="logout"><FaSignOutAlt /> Log Out</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <input type="text" placeholder="Search your grocery products..." />
          <div className="user-actions">
            <span>🔔</span>
            <span>👤</span>
          </div>
        </header>

        <div className="content-area">
          {/* Left Side Content */}
          <div className="left-content">
            {/* Categories */}
            <div className="categories">
              {categories.map((category, index) => (
                <button key={index}>
                  {category.icon} {category.name}
                </button>
              ))}
              <button className="filter"><FaFilter /> Filter</button>
            </div>

            {/* Popular Products */}
            <div className="popular-products">
              <h3>Popular Products</h3>
              <div className="product-list">
                {products.map((product, index) => (
                  <div key={index} className="product-card">
                    <img src={product.img} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Discount Shop (Horizontal) */}
            <div className="discount-shop">
              <h3>Discount Shop</h3>
              <div className="discounts">
                {discounts.map((discount, index) => (
                  <div key={index} className="discount-card">
                    <img src={discount.img} alt={discount.text} />
                    <p>{discount.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Content (Last Orders) */}
          <div className="right-content">
            <h3>Last Order</h3>
            {lastOrders.map((order, index) => (
              <div key={index} className="order-item">
                <img src={order.img} alt={order.name} />
                <div>
                  <p>{order.name}</p>
                  <p>{order.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryApp;