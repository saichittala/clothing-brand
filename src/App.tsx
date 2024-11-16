import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import Home from './pages/Home';

const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>  {/* Add basename here */}
      <div className="min-h-screen bg-white">
        <Toaster position="top-center" />
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:gender" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
