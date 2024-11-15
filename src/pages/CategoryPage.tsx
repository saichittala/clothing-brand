import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { FilterState } from '../types';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';

export default function CategoryPage() {
  const { gender } = useParams<{ gender: string }>();
  const [filters, setFilters] = useState<FilterState>({
    gender: gender as 'Men' | 'Women'
  });

  const categories = [...new Set(products.map(p => p.category))];
  const colors = [...new Set(products.filter(p => p.color).map(p => p.color!))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (filters.gender && product.gender !== filters.gender) return false;
      if (filters.category && product.category !== filters.category) return false;
      if (filters.color && product.color !== filters.color) return false;
      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        if (product.price < min || product.price > max) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <h1 className="text-3xl font-light tracking-wide mb-8">{gender}'s Collection</h1>
      
      <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
        {/* Filters */}
        <div className="hidden lg:block">
          <ProductFilters
            filters={filters}
            onFilterChange={setFilters}
            categories={categories}
            colors={colors}
          />
        </div>

        {/* Product grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">No products found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}