import { useState } from 'react';
import { FilterState } from '../types';
import { X } from 'lucide-react';

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  categories: string[];
  colors: string[];
}

export default function ProductFilters({ filters, onFilterChange, categories, colors }: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const clearFilters = () => {
    onFilterChange({});
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden btn btn-secondary"
        >
          {isOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
        {Object.keys(filters).length > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1"
          >
            Clear all <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className={`space-y-6 ${isOpen ? 'block' : 'hidden md:block'}`}>
        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.category === category}
                  onChange={() => onFilterChange({
                    ...filters,
                    category: filters.category === category ? undefined : category
                  })}
                  className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                />
                <span className="ml-2 text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <h3 className="text-sm font-medium mb-3">Color</h3>
          <div className="space-y-2">
            {colors.map((color) => (
              <label key={color} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.color === color}
                  onChange={() => onFilterChange({
                    ...filters,
                    color: filters.color === color ? undefined : color
                  })}
                  className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                />
                <span className="ml-2 text-sm">{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-sm font-medium mb-3">Price Range</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.priceRange?.[1] === 300}
                onChange={() => onFilterChange({
                  ...filters,
                  priceRange: filters.priceRange?.[1] === 300 ? undefined : [0, 300]
                })}
                className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
              />
              <span className="ml-2 text-sm">Under $300</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.priceRange?.[0] === 300 && filters.priceRange?.[1] === 600}
                onChange={() => onFilterChange({
                  ...filters,
                  priceRange: filters.priceRange?.[0] === 300 ? undefined : [300, 600]
                })}
                className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
              />
              <span className="ml-2 text-sm">$300 - $600</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.priceRange?.[0] === 600}
                onChange={() => onFilterChange({
                  ...filters,
                  priceRange: filters.priceRange?.[0] === 600 ? undefined : [600, Infinity]
                })}
                className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
              />
              <span className="ml-2 text-sm">Over $600</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}