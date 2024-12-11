import { useCartStore } from '../stores/cartStore';

export default function Cart() {
  const { items, removeItem, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg">
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-500">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>
            <div className="mt-4 space-x-4 flex justify-end">
              <button
                onClick={clearCart}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Clear Cart
              </button>
              <button
                onClick={() => {/* Handle checkout */}}
                className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}