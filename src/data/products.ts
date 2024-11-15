import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Silk Evening Dress',
    price: 899,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000',
    category: 'Dresses',
    gender: 'Women',
    description: 'Elegantly crafted silk evening dress with a flowing silhouette.',
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=1000'
    ],
    color: 'Midnight Blue',
    inStock: true
  },
  {
    id: 2,
    name: 'Tailored Wool Blazer',
    price: 599,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000',
    category: 'Jackets',
    gender: 'Men',
    description: 'Meticulously tailored wool blazer with a modern cut.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1000'
    ],
    color: 'Charcoal Grey',
    inStock: true
  },
  {
    id: 3,
    name: 'Cashmere Sweater',
    price: 399,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1000',
    category: 'Knitwear',
    gender: 'Women',
    description: 'Luxuriously soft cashmere sweater in a relaxed fit.',
    sizes: ['XS', 'S', 'M'],
    color: 'Cream',
    inStock: true
  },
  {
    id: 4,
    name: 'Leather Oxford Shoes',
    price: 450,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=1000',
    category: 'Shoes',
    gender: 'Men',
    description: 'Classic leather Oxford shoes with Goodyear welting.',
    sizes: ['40', '41', '42', '43', '44'],
    color: 'Brown',
    inStock: true
  },
  {
    id: 5,
    name: 'Silk Blouse',
    price: 299,
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&q=80&w=1000',
    category: 'Tops',
    gender: 'Women',
    description: 'Elegant silk blouse with a relaxed fit.',
    sizes: ['S', 'M', 'L'],
    color: 'White',
    inStock: true
  }
];

export const collections = [
  {
    id: 1,
    name: 'Summer Essentials',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1000',
    description: 'Curated pieces for the perfect summer wardrobe'
  },
  {
    id: 2,
    name: 'Evening Collection',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000',
    description: 'Sophisticated designs for memorable nights'
  }
];