import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './HotelMenu.css';

const HotelMenu = ({
  hotelId,
  menuId,
  showAmount = true,
  showFilter = false,
  initialCategories = [],
  initialMenuItems = []
}) => {
  const [categories, setCategories] = useState(initialCategories);
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real implementation, you would fetch data from an API
    // This is a simulation of data loading
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // If we have initial data, use it
        if (initialCategories.length > 0 && initialMenuItems.length > 0) {
          setLoading(false);
          return;
        }
        
        // Otherwise use mock data
        setCategories([
          { id: 'breakfast', name: 'Breakfast' },
          { id: 'lunch', name: 'Lunch' },
          { id: 'dinner', name: 'Dinner' },
          { id: 'desserts', name: 'Desserts' },
          { id: 'beverages', name: 'Beverages' }
        ]);
        
        setMenuItems([
          { id: '1', name: 'Continental Breakfast', description: 'Assorted pastries, fruits, and coffee', price: 12.99, category: 'breakfast', image: '/placeholder.svg?height=100&width=100' },
          { id: '2', name: 'American Breakfast', description: 'Eggs, bacon, toast, and hash browns', price: 14.99, category: 'breakfast', image: '/placeholder.svg?height=100&width=100' },
          { id: '3', name: 'Caesar Salad', description: 'Fresh romaine lettuce with Caesar dressing', price: 10.99, category: 'lunch', image: '/placeholder.svg?height=100&width=100' },
          { id: '4', name: 'Club Sandwich', description: 'Triple-decker sandwich with chicken, bacon, and vegetables', price: 13.99, category: 'lunch', image: '/placeholder.svg?height=100&width=100' },
          { id: '5', name: 'Grilled Salmon', description: 'Fresh salmon with seasonal vegetables', price: 22.99, category: 'dinner', image: '/placeholder.svg?height=100&width=100' },
          { id: '6', name: 'Filet Mignon', description: '8oz tenderloin with mashed potatoes', price: 29.99, category: 'dinner', image: '/placeholder.svg?height=100&width=100' },
          { id: '7', name: 'Chocolate Cake', description: 'Rich chocolate cake with vanilla ice cream', price: 8.99, category: 'desserts', image: '/placeholder.svg?height=100&width=100' },
          { id: '8', name: 'Coffee', description: 'Freshly brewed coffee', price: 3.99, category: 'beverages', image: '/placeholder.svg?height=100&width=100' },
          { id: '9', name: 'Fresh Juice', description: 'Orange, apple, or pineapple', price: 4.99, category: 'beverages', image: '/placeholder.svg?height=100&width=100' },
        ]);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load menu data');
        setLoading(false);
      }
    };

    fetchData();
  }, [hotelId, menuId, initialCategories, initialMenuItems]);

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  if (loading) {
    return <div className="hotel-menu-loading">Loading menu...</div>;
  }

  if (error) {
    return <div className="hotel-menu-error">{error}</div>;
  }

  return (
    <div className="hotel-menu-container">
      <header className="hotel-menu-header">
        <h1>Hotel Menu</h1>
        <p className="hotel-menu-subtitle">Enjoy our delicious offerings</p>
      </header>

      {showFilter && (
        <div className="hotel-menu-categories">
          <button 
            className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          {categories.map(category => (
            <button 
              key={category.id}
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      <div className="hotel-menu-items">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <div className="menu-item-image">
              <img src={item.image || "/placeholder.svg"} alt={item.name} />
            </div>
            <div className="menu-item-content">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              {showAmount && (
                <p className="menu-item-price">${item.price.toFixed(2)}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer className="hotel-menu-footer">
        <p>Powered by CanaraTechLabs</p>
      </footer>
    </div>
  );
};

HotelMenu.propTypes = {
  hotelId: PropTypes.string.isRequired,
  menuId: PropTypes.string.isRequired,
  showAmount: PropTypes.bool,
  showFilter: PropTypes.bool,
  initialCategories: PropTypes.array,
  initialMenuItems: PropTypes.array
};

export default HotelMenu;