import React from 'react';
import { Link } from 'react-router-dom';

const restaurants = [
  { id: 1, name: 'Pizza Place', image: 'https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg' },
  { id: 2, name: 'Burger Joint', image: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2016/07/190716_BurgerPizzaDominos2.jpg' },
  // Add more restaurants
];

const RestaurantListing = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
            <Link 
              to={`/menu/${restaurant.id}`} 
              className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-colors"
            >
              View Menu
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantListing;
