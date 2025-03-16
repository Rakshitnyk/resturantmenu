"use client"

import { useState } from "react"
import PropTypes from "prop-types"
import "./RestaurantMenu.css"

const RestaurantMenu = ({ restaurantName, restaurantAddress, restaurantImage, categories = [], menuItems = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredItems =
    selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="restaurant-menu">
      <div className="restaurant-header">
        <img
          src={restaurantImage || "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_authors_boost"}
          alt={restaurantName}
          className="restaurant-banner"
        />
        <h1 className="restaurant-name">{restaurantName}</h1>
        <p className="restaurant-address">{restaurantAddress}</p>
      </div>

      <div className="category-filters">
        <button
          className={`category-filter ${selectedCategory === "All" ? "active" : ""}`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`category-filter ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-items-container">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item-card">
            <div className="menu-item-content">
              <div className="menu-item-image-container">
                <img
                  src={item.image || "/placeholder.svg?height=100&width=100"}
                  alt={item.name}
                  className="menu-item-image"
                />
              </div>
              <div className="menu-item-details">
                <h3 className="menu-item-name">{item.name}</h3>
                <p className="menu-item-description">{item.description}</p>
                <div className="menu-item-price">₹{item.price.toFixed(2)}</div>

                <div className="menu-item-badges">
                  {item.isVeg && (
                    <span className="veg-badge">
                      <span className="veg-icon"></span>
                      VEG
                    </span>
                  )}

                  <span className="category-badge">{item.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

RestaurantMenu.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  restaurantAddress: PropTypes.string.isRequired,
  restaurantImage: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string,
      category: PropTypes.string.isRequired,
      isVeg: PropTypes.bool,
    }),
  ),
}

export default RestaurantMenu

