import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../stores/cartStore';

export default function ProductCard({ product }) {
  const addToCart = useCartStore(state => state.addItem);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
      <div onClick={handleClick}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 line-clamp-2">{product.description}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-lg font-bold">${product.price}</span>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}