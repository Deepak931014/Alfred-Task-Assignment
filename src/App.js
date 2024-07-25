import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantListing from './components/RestaurantListing';
import Menu from './components/Menu';
import ItemSelection from './components/ItemSelection';
import PlaceOrder from './components/PlaceOrder';
import OrderTracking from './components/OrderTracking';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RestaurantListing />} />
          <Route path="/menu/:id" element={<Menu />} />
          <Route path="/order/:id" element={<ItemSelection />} />
          <Route path="/place-order/:id" element={<PlaceOrder />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
