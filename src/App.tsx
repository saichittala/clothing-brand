import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';

// Define the App component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Toaster position="top-center" />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:gender" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

// Export App as a default export
export default App;
