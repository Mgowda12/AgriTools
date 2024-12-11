import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { products, shops } from '../../data/products';

export default function ShopAvailability({ productId }) {
  const product = products.find(p => p.id === productId);
  const shop = shops.find(s => s.id === product?.shopId);

  if (!shop) {
    return <div>No shop information available</div>;
  }

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{shop.name}</h3>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPinIcon className="h-4 w-4 mr-1" />
              <span>{shop.address}</span>
            </div>
            <div className="flex items-center text-gray-600 mt-1">
              <PhoneIcon className="h-4 w-4 mr-1" />
              <span>{shop.phone}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{shop.rating}</span>
            </div>
            <div className="mt-1">
              <span className="font-medium text-green-600">
                In stock
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}