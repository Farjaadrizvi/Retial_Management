import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useProductStore } from '../../store/productStore';

const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.string().transform((val) => Number(val)),
  category: z.string().min(1, 'Category is required'),
  stock: z.string().transform((val) => Number(val)),
  imageUrl: z.string().url('Please enter a valid image URL'),
});

type ProductFormData = z.infer<typeof productSchema>;

interface AddProductFormProps {
  onClose: () => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onClose }) => {
  const { addProduct } = useProductStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: ProductFormData) => {
    addProduct({
      id: crypto.randomUUID(),
      ...data,
      price: Number(data.price),
      stock: Number(data.stock),
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          {...register('name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register('description')}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            step="0.01"
            {...register('price')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.price && (
            <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Stock</label>
          <input
            type="number"
            {...register('stock')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.stock && (
            <p className="mt-1 text-sm text-red-600">{errors.stock.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          {...register('category')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="food">Food</option>
          <option value="books">Books</option>
        </select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          {...register('imageUrl')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.imageUrl && (
          <p className="mt-1 text-sm text-red-600">{errors.imageUrl.message}</p>
        )}
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;