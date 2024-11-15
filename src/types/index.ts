export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  gender: 'Men' | 'Women';
  description?: string;
  sizes?: string[];
  images?: string[];
  color?: string;
  inStock?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface Collection {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface FilterState {
  gender?: 'Men' | 'Women';
  category?: string;
  priceRange?: [number, number];
  color?: string;
}