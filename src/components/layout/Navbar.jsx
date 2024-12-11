import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import { useCartStore } from "../../stores/cartStore";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const cartItems = useCartStore((state) => state.items);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              AgriTools
            </Link>
            <div className="ml-10 space-x-8">
              <Link
                to="/products"
                className="text-gray-700 hover:text-indigo-600"
              >
                Products
              </Link>
              <Link
                to="/aboutus"
                className="text-gray-700 hover:text-indigo-600"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-indigo-600"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/cart"
              className="text-gray-700 hover:text-indigo-600 relative"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-indigo-600"
              >
                <UserIcon className="h-6 w-6" />
              </Link>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
