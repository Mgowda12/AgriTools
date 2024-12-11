import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="mt-10 bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h4 className="font-bold">About Us </h4>
              <p className="text-gray-400 w-55 font-normal">
                Empowering farmers through innovation and quality agricultural
                solutions. Connecting local suppliers with the farming community
                for seamless transactions. Committed to sustainability and
                growth in the agriculture sector. Discover quality tools and
                fertilizers tailored for your farming needs.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Contact</h4>
              <p>
                Mobile:{" "}
                <a href="tel:+1234567890" className="text-indigo-400">
                  +1234567890
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@agritools.com" className="text-indigo-400">
                  info@agritools.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-bold">Follow Us</h4>
              <div className="flex space-x-4">
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
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;
