import axios from 'axios';
import { Product, Customer, Order } from '../types';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productApi = {
  getAll: () => api.get<Product[]>('/products'),
  create: (data: Omit<Product, 'id'>) => api.post<Product>('/products', data),
  update: (id: string, data: Partial<Product>) => api.patch<Product>(`/products/${id}`, data),
  delete: (id: string) => api.delete(`/products/${id}`),
};

export const customerApi = {
  getAll: () => api.get<Customer[]>('/customers'),
  create: (data: Omit<Customer, 'id'>) => api.post<Customer>('/customers', data),
  update: (id: string, data: Partial<Customer>) => api.patch<Customer>(`/customers/${id}`, data),
  delete: (id: string) => api.delete(`/customers/${id}`),
};

export const orderApi = {
  getAll: () => api.get<Order[]>('/orders'),
  create: (data: Omit<Order, 'id'>) => api.post<Order>('/orders', data),
  updateStatus: (id: string, status: Order['status']) => 
    api.patch<Order>(`/orders/${id}/status`, { status }),
};