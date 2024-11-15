import { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useStore } from '../store/useStore';
import { toast } from 'react-hot-toast';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    addToCart({ ...product, selectedSize });
    toast.success('Added to cart');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === (product.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? (product.images?.length || 1) - 1 : prev - 1
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Image Gallery */}
      <div className="relative aspect-[3/4]">
        <motion.img
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={product.images?.[currentImageIndex] || product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {(product.images?.length || 0) > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-light tracking-wide mb-2">{product.name}</h1>
          <p className="text-2xl font-light text-neutral-900">${product.price}</p>
        </div>

        <div>
          <p className="text-neutral-600 leading-relaxed">{product.description}</p>
        </div>

        {product.color && (
          <div>
            <h3 className="text-sm font-medium mb-2">Color</h3>
            <p className="text-neutral-600">{product.color}</p>
          </div>
        )}

        {product.sizes && (
          <div>
            <h3 className="text-sm font-medium mb-3">Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-sm border ${
                    selectedSize === size
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-neutral-200 hover:border-neutral-900'
                  } transition-colors`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className="w-full btn btn-primary"
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}