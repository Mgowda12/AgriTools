import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* About Us Section */}
      <section className="mb-10">
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">AgriTools</h2>
        <p>
          Find the best agricultural tools and supplies for your farming needs
        </p>
      </section>

      {/* Vision Section */}
      <section className="bg-indigo-50 p-6 rounded-lg mb-10 shadow-lg">
        <h3 className="text-3xl font-semibold text-indigo-700 mb-4">
          Our Vision
        </h3>
        <p className="text-lg text-gray-800">
          To revolutionize the agricultural sector by providing a seamless
          online marketplace where farmers and shop owners can collaborate,
          innovate, and thrive.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 p-6 rounded-lg mb-10 shadow-lg">
        <h3 className="text-3xl font-semibold text-green-700 mb-4">
          Our Mission
        </h3>
        <p className="text-lg text-gray-800">
          To empower farmers with easy access to essential agricultural
          supplies, fostering a more productive and sustainable farming
          community. We aim to bridge the gap between suppliers and farmers,
          ensuring that quality products are just a click away.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-indigo-50 p-6 rounded-lg mb-10 shadow-lg">
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">
          Why Choose Us
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Wide Selection:</strong> We offer a diverse range of
            products tailored to meet the needs of all types of farming.
          </li>
          <li>
            <strong>Trusted Suppliers:</strong> All our products come from
            verified and reputable local shops.
          </li>
          <li>
            <strong>Convenience:</strong> Shop anytime, anywhere with our
            user-friendly platform.
          </li>
          <li>
            <strong>Customer Support:</strong> Dedicated support to assist you
            with any queries or issues.
          </li>
        </ul>
      </section>

      {/* Our Services Section */}
      <section className="bg-gray-100 p-6 rounded-lg mb-10 shadow-lg">
        <h3 className="text-3xl font-semibold text-indigo-700 mb-4">
          Our Services
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Product Listings:</strong> Browse and purchase a variety of
            agricultural tools and fertilizers.
          </li>
          <li>
            <strong>Search and Filter:</strong> Easily find products by name,
            category, or location.
          </li>
          <li>
            <strong>Product Requests:</strong> Request products that are not
            currently available and we'll notify local shops.
          </li>
          <li>
            <strong>Secure Payment:</strong> Enjoy safe and secure online
            transactions.
          </li>
          <li>
            <strong>Order Fulfillment:</strong> Efficient order processing with
            options for delivery or pickup.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
