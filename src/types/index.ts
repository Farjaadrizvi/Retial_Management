export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  loyaltyPoints: number;
  joinDate: Date;
}

export interface Order {
  id: string;
  customerId: string;
  products: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  date: Date;
}