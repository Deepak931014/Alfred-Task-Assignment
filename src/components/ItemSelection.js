import React, { useState } from 'react';

const ItemSelection = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Item Selection</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Selected Item</h2>
        <p>Price: $10</p>
        <div className="mt-4 flex items-center">
          <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1} className="bg-gray-300 px-2 py-1 rounded">-</button>
          <span className="mx-4">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="bg-gray-300 px-2 py-1 rounded">+</button>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemSelection;
