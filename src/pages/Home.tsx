import { motion } from 'framer-motion';
import { products, collections } from '../data/products';
import ProductCard from '../components/ProductCard';
import FeaturedCollection from '../components/FeaturedCollection';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen-90 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2000"
            alt="Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl font-light tracking-wide mb-6">
              The New Collection
            </h1>
            <p className="text-lg sm:text-xl font-light tracking-wide mb-8">
              Discover timeless elegance
            </p>
            <button className="btn btn-primary bg-white text-black hover:bg-neutral-100">
              Shop Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <FeaturedCollection collections={collections} />

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-light tracking-wide text-center mb-12">
          Latest Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}