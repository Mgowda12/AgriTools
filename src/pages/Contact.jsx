import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="flex justify-between p-10 bg-gray-100">
      <div className="bg-green-500 bg-opacity-50 p-6 rounded-lg w-1/2">
        <h2 className="text-white text-2xl mb-4">GET IN TOUCH</h2>
        <form>
          <label htmlFor="name" className="text-white">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <label htmlFor="mobile" className="text-white">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <label htmlFor="type" className="text-white">
            Select Type
          </label>
          <select
            id="type"
            name="type"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="">Select Enquiry Type</option>
            <option value="general">General Enquiry</option>
            <option value="support">Support</option>
            <option value="sales">Sales</option>
          </select>

          <label htmlFor="country" className="text-white">
            Select Country
          </label>
          <select
            id="country"
            name="country"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="">Select Country</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
          </select>

          <label htmlFor="state" className="text-white">
            Select State
          </label>
          <select
            id="state"
            name="state"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="">Select State</option>
            <option value="california">California</option>
            <option value="ontario">Ontario</option>
            <option value="london">London</option>
          </select>

          <label htmlFor="pincode" className="text-white">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <label htmlFor="comments" className="text-white">
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            SUBMIT
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-2xl mb-4">Contact Information</h2>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
        <p>
          <strong>Phone No:</strong> +1 234 567 890
        </p>
        <p>
          <strong>Email:</strong> info@example.com
        </p>
        <div className="flex space-x-5 mt-5">
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
