import { useState } from 'react';
import ProductList from '../components/products/ProductList';
import { products } from '../data/products';

export default function Products() {
  const [productList] = useState(products);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Agricultural Products</h1>
      <ProductList products={productList} />
    </div>
  );
}