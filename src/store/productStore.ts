import { create } from 'zustand';
import { Product } from '../types';

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  updateProduct: (id, updates) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
  setProducts: (products) => set({ products }),
}));