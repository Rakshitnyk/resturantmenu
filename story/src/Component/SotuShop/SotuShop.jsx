"use client"

import { useState } from "react"
import "./SotuShop.css"

const SotuShop = ({ userName = "John" }) => {
  // State for favorite products
  const [favorites, setFavorites] = useState({})

  // Toggle favorite status
  const toggleFavorite = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }))
  }

  // Categories data
  const categories = [
    { id: 1, name: "Fruits", icon: "🍎" },
    { id: 2, name: "Bread", icon: "🍞" },
    { id: 3, name: "Vegetable", icon: "🥬" },
    { id: 4, name: "Fish", icon: "🐟" },
    { id: 5, name: "Meat", icon: "🥩" },
    { id: 6, name: "Drinks", icon: "🥤" },
    { id: 7, name: "Sea Food", icon: "🦐" },
    { id: 8, name: "Ice cream", icon: "🍦" },
    { id: 9, name: "Juice", icon: "🧃" },
    { id: 10, name: "Jam", icon: "🍯" },
  ]

  // Products data
  const products = [
    {
      id: 1,
      name: "Strawberry",
      price: 20.1,
      discountPrice: 15.1,
      image: "https://img.freepik.com/free-vector/coloured-strawberries-design_1308-848.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      name: "Cabbage",
      price: 20.1,
      discountPrice: 15.1,
      image: "https://img.freepik.com/premium-photo/cabbage_53876-1412.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      name: "Brocoly",
      price: 30.1,
      discountPrice: 25.1,
      image: "https://img.freepik.com/premium-photo/broccoli-slicing-pieces-white-background_978449-323.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 4,
      name: "Orange",
      price: 15.1,
      discountPrice: 12.1,
      image: "https://img.freepik.com/free-photo/raw-cross-ingredient-studio-citrus_1172-204.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      name: "Fresh Apple",
      price: 20.1,
      discountPrice: 18.1,
      image: "https://img.freepik.com/free-photo/wicker-basket-fresh-juicy-apples-isolated-white_114579-43675.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid",
      description: "Lorem ipsum dolor sit amet",
    },
  ]

  // Discount offers
  const discounts = [
    { id: 1, discount: 35, title: "Grab your daily grocery with amazing discount", buttonText: "Shop Now" },
    { id: 2, discount: 20, title: "Grab your daily grocery with amazing discount", buttonText: "Shop Now" },
    { id: 3, discount: 20, title: "Grab your daily grocery with amazing discount", buttonText: "Shop Now" },
    { id: 4, discount: 10, title: "Grab your daily grocery with amazing discount", buttonText: "Shop Now" },
  ]

  // Last orders
  const lastOrders = [
    {
      id: 1,
      name: "Red Saffron",
      price: 1.5,
      weight: "500 gm",
      rating: 4.8,
      image: "https://img.freepik.com/free-photo/close-up-saffron-still-life-arrangement_23-2149186963.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Fresh Apple",
      price: 1.2,
      weight: "500 gm",
      rating: 4.8,
      image: "https://img.freepik.com/free-photo/delicious-red-apples-isolated-white-table_114579-67401.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid",
    },
    { id: 3, name: "Big Fish", price: 3.0, weight: "2 kg", rating: 4.8, image: "https://img.freepik.com/premium-psd/closeup-fish_191095-68646.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
    { id: 4, name: "Sweets", price: 1.5, weight: "500 gm", rating: 4.8, image: "https://img.freepik.com/free-psd/delicious-golden-motichoor-ladoo-sweets-indian-dessert_84443-34495.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  ]

  return (
    <div className="shop-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <span className="logo-text">SOTU</span>
          <span>Shop</span>
        </div>

        <nav className="nav-menu">
          <button className="nav-item active">
            <span className="nav-icon">📊</span>
            Dashboard
          </button>
          <button className="nav-item">
            <span className="nav-icon">📋</span>
            Categories
          </button>
          <button className="nav-item">
            <span className="nav-icon">❤️</span>
            Favorites
          </button>
          <button className="nav-item">
            <span className="nav-icon">🛒</span>
            Orders
          </button>
          <button className="nav-item">
            <span className="nav-icon">💬</span>
            Messages
          </button>
          <button className="nav-item">
            <span className="nav-icon">🏷️</span>
            Top Deals
          </button>
          <button className="nav-item">
            <span className="nav-icon">⚙️</span>
            Settings
          </button>
        </nav>

        <div className="logout-container">
          <button className="logout-button">
            <span className="nav-icon">🚪</span>
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search your grocery products etc..." className="search-input" />
          </div>
          <div className="header-actions">
            <button className="icon-button">🛍️</button>
            <button className="icon-button">🔔</button>
            <div className="user-avatar">{userName.charAt(0)}</div>
          </div>
        </header>

        {/* Content */}
        <main className="content">
          {/* Categories */}
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Categories</h2>
              <div className="section-actions">
                <button className="icon-button">🔍</button>
                <button className="icon-button green">◀</button>
                <button className="icon-button green">▶</button>
              </div>
            </div>

            <div className="categories-grid">
              {categories.map((category) => (
                <div key={category.id} className="category-item">
                  <div className="category-icon">{category.icon}</div>
                  <span className="category-name">{category.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Products */}
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Popular Products</h2>
              <button className="view-more">View More</button>
            </div>

            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
                    <button
                      className={`favorite-button ${favorites[product.id] ? "active" : ""}`}
                      onClick={() => toggleFavorite(product.id)}
                    >
                      {favorites[product.id] ? "❤️" : "🤍"}
                    </button>
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price-row">
                      <div className="product-price">
                        <span className="discount-price">${product.discountPrice.toFixed(2)}</span>
                        <span className="original-price">${product.price.toFixed(2)}</span>
                      </div>
                      <button className="add-button">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Discount Shop */}
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Discount Shop</h2>
              <button className="view-more">View More</button>
            </div>

            <div className="discount-grid">
              {discounts.map((discount) => (
                <div key={discount.id} className="discount-card">
                  <div className="discount-content">
                    <div className="discount-percentage">{discount.discount}% Discount</div>
                    <p className="discount-title">{discount.title}</p>
                    <button className="shop-now-button">{discount.buttonText}</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Items and Last Order */}
          <div className="bottom-section">
            <div className="top-items">
              <div className="section-header">
                <h2 className="section-title">Top Items</h2>
                <div className="section-actions">
                  <button className="icon-button green">◀</button>
                  <button className="icon-button green">▶</button>
                </div>
              </div>

              <div className="top-items-placeholder">Top Items Content</div>
            </div>

            <div className="last-order">
              <h2 className="section-title">Last Order</h2>
              <div className="order-list">
                {lastOrders.map((order) => (
                  <div key={order.id} className="order-item">
                    <div className="order-image-container">
                      <img src={order.image || "/placeholder.svg"} alt={order.name} className="order-image" />
                    </div>
                    <div className="order-details">
                      <div className="order-header">
                        <h4 className="order-name">{order.name}</h4>
                        <span className="order-price">${order.price.toFixed(2)}</span>
                      </div>
                      <div className="order-weight">Weight {order.weight}</div>
                      <div className="order-rating">⭐ {order.rating}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SotuShop

