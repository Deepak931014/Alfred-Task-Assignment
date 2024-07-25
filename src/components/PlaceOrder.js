import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulate fetching item details based on id
  const item = {
    1: { name: 'Pepperoni Pizza', price: 10 },
    2: { name: 'Cheese Pizza', price: 8 },
    3: { name: 'Cheeseburger', price: 12 },
    4: { name: 'Veggie Burger', price: 11 },
  }[id] || { name: 'Unknown Item', price: 0 };

  const handlePlaceOrder = () => {
    // Add logic to place the order
    navigate('/order-tracking');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Place Order</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Review Your Order</h2>
        <p>Item: {item.name}</p>
        <p>Price: ${item.price}</p>
        <button 
          onClick={handlePlaceOrder} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
