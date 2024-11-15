import { motion } from 'framer-motion';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="group cursor-pointer"
      >
        <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-light tracking-wide text-neutral-900">{product.name}</h3>
          <p className="text-sm text-neutral-500">${product.price}</p>
        </div>
      </motion.div>
    </Link>
  );
}