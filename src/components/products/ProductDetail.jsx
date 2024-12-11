import { useParams } from 'react-router-dom';
import { useCartStore } from '../../stores/cartStore';
import ShopAvailability from './ShopAvailability';
import { products } from '../../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const addToCart = useCartStore(state => state.addItem);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full rounded-lg shadow-lg"
          />
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Product Details</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Category: {product.category}</li>
              <li>Brand: {product.brand}</li>
              <li>Stock Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</li>
            </ul>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Available at These Shops</h2>
          <ShopAvailability productId={id} />
        </div>
      </div>
    </div>
  );
}