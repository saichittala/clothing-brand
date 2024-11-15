import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  couponCode: string | null;
  discount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  applyCoupon: (code: string) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  couponCode: null,
  discount: 0,
  
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
    
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
    
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),
    
  applyCoupon: (code) =>
    set(() => {
      const validCoupons: Record<string, number> = {
        'WELCOME20': 20,
        'SUMMER30': 30,
      };
      
      return {
        couponCode: code,
        discount: validCoupons[code] || 0,
      };
    }),
    
  clearCart: () => set({ cart: [], couponCode: null, discount: 0 }),
}));