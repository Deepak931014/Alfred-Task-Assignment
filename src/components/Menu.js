import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const menuItems = {
  1: [
    { id: 1, name: 'Pepperoni Pizza', price: 10 },
    { id: 2, name: 'Cheese Pizza', price: 8 },
  ],
  2: [
    { id: 3, name: 'Cheeseburger', price: 12 },
    { id: 4, name: 'Veggie Burger', price: 11 },
  ],
};

const Menu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const items = menuItems[id] || [];

  const handleAddToCart = (itemId) => {
    // Add logic to store the selected item in the cart if needed
    navigate(`/place-order/${itemId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-lg mb-4">${item.price}</p>
            <button 
              onClick={() => handleAddToCart(item.id)} 
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
