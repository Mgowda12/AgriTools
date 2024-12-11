import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ShopAvailability from "../components/products/ShopAvailability";
import { useCartStore } from "../stores/cartStore";
import { products } from "../data/products";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const addToCart = useCartStore((state) => state.addItem);

  const images = [
    "https://agrimart.in/assests/theme_1/images/slides/banner-05.jpg",
    "https://agrimart.in/assests/theme_1/images/slides/banner-03.jpg",
  ];

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 z-10">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Welcome to <span className="text-indigo-600">AgriTools</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Find the best agricultural tools and supplies for your farming needs
          </p>
        </div>

        {/* Image Slider */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* Products Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center">Featured Products</h2>

        <Slider
          {...{
            dots: 0,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="container px-4 py-14">
              <div className="flex flex-col h-full border rounded-lg overflow-hidden">
                {" "}
                {/* Added border and overflow-hidden */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover" // Set a fixed height for images
                />
                <div className="flex flex-col justify-between flex-grow p-4">
                  {" "}
                  {/* Added flex-grow to fill space */}
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="text-3xl font-bold">{product.name}</h1>
                      <span className="text-2xl font-bold text-indigo-600">
                        ${product.price}
                      </span>
                    </div>
                    <p className="text-gray-600">{product.description}</p>
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold">Product Details</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Category: {product.category}</li>
                        <li>Brand: {product.brand}</li>
                        <li>
                          Stock Status:{" "}
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Stats Section */}
      <div className="mt-10 flex justify-around">
        <div className="border rounded-lg p-4 text-center">
          <h3 className="text-xl font-bold">Available Products</h3>
          <p className="text-2xl">24</p>
        </div>
        <div className="border rounded-lg p-4 text-center">
          <h3 className="text-xl font-bold">Registered Shops</h3>
          <p className="text-2xl">5</p>
        </div>

        <div className="border rounded-lg p-4 text-center">
          <h3 className="text-xl font-bold">Available brands</h3>
          <p className="text-2xl">5</p>
        </div>
      </div>
     
    </div>
  );
}
