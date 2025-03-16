import React from "react";
import "./FoodOrder.css";

const FoodOrder = () => {
  return (
    <div className="food-order-container">
      {/* Left Content (Food Listings) */}
      <div className="food-content">
        {/* Header */}
        <header className="header">
          <h2>📍 125 Eastern Cosmo St.</h2>
          <input type="text" placeholder="🔍 What would you like to eat today?" />
        </header>

        {/* Banner */}
        <section className="banner">
          <img src="https://img.freepik.com/free-vector/cute-retro-hamburger-facade_23-2147630153.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" alt="Food" className="banner-image" />
          <div className="banner-text">
            <p>You don’t need a silver fork to eat good food</p>
            <button>Learn more →</button>
          </div>
        </section>

        {/* Categories */}
        <section className="categories">
  {[
    { name: "All", icon: "🍽" },
    { name: "Burger", icon: "🍔" },
    { name: "Pizza", icon: "🍕" },
    { name: "Pasta", icon: "🍝" },
    { name: "Asian", icon: "🥢" },
    { name: "Chicken", icon: "🍗" },
    { name: "Fish", icon: "🐟" },
  ].map((category, index) => (
    <button key={index} className={index === 0 ? "active" : ""}>
      {category.icon} {category.name}
    </button>
  ))}
</section>

{/* Food Listings */}
        <section className="food-list">
  {[
    { name: "Pizza Margherita", time: "15 mins", fee: "$3.99", img: "https://img.freepik.com/free-photo/mix-pizza-chicken-tomato-bell-pepper-olives-mushroom-side-view_141793-3167.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Cheeseburger", time: "10 mins", fee: "$2.99", img: "https://img.freepik.com/premium-photo/homemade-juicy-burger-with-beef-bacon-cheese-bulgarian-pepper_147620-565.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Sushi Roll", time: "20 mins", fee: "$4.99", img: "https://img.freepik.com/free-photo/variety-sushi-rolls-isolated-grey-table_114579-22111.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Pasta Carbonara", time: "18 mins", fee: "$3.49", img: "https://img.freepik.com/free-photo/rigatoni-pasta-with-chicken-meat-eggplant-tomato-sauce-bowl_2829-10978.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Fried Chicken", time: "12 mins", fee: "$2.49", img: "https://img.freepik.com/premium-photo/fried-chicken-legs-with-lemon-parsley_266870-45.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Grilled Salmon", time: "25 mins", fee: "$5.99", img: "https://img.freepik.com/premium-photo/fish-trout-chum-salmon-humpback-piece-baked-grilled-with-slice-lemon-lettuce_159285-520.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "fish fry", time: "15 mins", fee: "$3.29", img: "https://img.freepik.com/premium-photo/fried-small-capelins-with-tomato-sauce-sliced-lemon-plate-concrete-table-with-fork-knife-view-from-flatlay-close-up_268847-1214.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Vegetable Salad", time: "8 mins", fee: "$2.89", img: "https://img.freepik.com/free-photo/top-view-light-coleslaw-with-corn-lettuce-radish_140725-14090.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "BBQ Ribs", time: "30 mins", fee: "$6.99", img: "https://img.freepik.com/premium-photo/barbecue-ribs-french-fries-plate_250927-623.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { name: "Chocolate Cake", time: "10 mins", fee: "$2.79", img: "https://img.freepik.com/free-photo/chocolate-cake-surrounded-by-chocolate-truffles-bonbons_23-2148019546.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  ].map((food, i) => (
    <div className="food-item" key={i}>
      <img src={food.img} alt={food.name} />
      <h3>{food.name}</h3>
      <p>⏳ {food.time} • 🚚 {food.fee} delivery fee</p>
    </div>
  ))}
</section>
      </div>

      {/* Right Content (Order Summary) */}
      <aside className="order-summary">
  <h3>My Order</h3>
  <ul>
    {[
      { name: "Sushi Set A", price: "$79.99", img: "https://img.freepik.com/free-photo/various-selection-sushi-rolls_140725-4433.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid", quantity: 1 },
      { name: "Sushi Set B", price: "$39.50", img: "https://img.freepik.com/free-photo/various-sushi-rolls-plate_140725-4318.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid", quantity: 1 },
      { name: "Original Bread", price: "$2.99", img: "https://img.freepik.com/free-photo/slices-dark-white-bread-box-tablecloth_114579-5825.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid", quantity: 3 },
      { name: "Pizza Margherita", price: "$59.20", img: "https://img.freepik.com/free-photo/top-view-vegetarian-pizza-with-eggplant-bell-pepper-red-onion-tomato-mushroom_141793-2453.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid", quantity: 2 },
    ].map((item, i) => (
      <li key={i} className="order-item">
        <img src={item.img} alt={item.name} />
        <span>{item.name}</span>
        <div className="quantity-controls">
          <button>-</button>
          <span>{item.quantity}</span>
          <button>+</button>
        </div>
        <span>{item.price}</span>
      </li>
    ))}
  </ul>

  {/* Coupons Section */}
  <div className="coupons">
    <span>You have 3 coupons</span>
    <button className="use-coupon">Use now</button>
  </div>

 {/* Order Pricing */}
 <div className="order-pricing">
    <p><span>Subtotal:</span> <span>$259.30</span></p>
    <p><span>Delivery Fee:</span> <span>$9.20</span></p>
    <p><span>Taxes:</span> <span>$39.20</span></p>
    <h3><span>Total:</span> <span>$395.40</span></h3>
  </div>

{/* Checkout Button */}
<button className="checkout-button">Order and checkout →</button>
</aside>                                                                                                                                   
    </div>
  );
};

export default FoodOrder;