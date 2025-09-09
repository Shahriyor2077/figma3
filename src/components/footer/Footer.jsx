import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lime-500 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <h3 className="text-xl font-semibold mb-4 md:mb-0">ToyStore</h3>
        <ul className="flex space-x-6 text-sm mb-4 md:mb-0">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Catalog</a>
          </li>
          <li>
            <a href="#">Delivery</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <div className="flex space-x-4 text-xl">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
          <FaPinterest />
          <FaYoutube />
        </div>
      </div>
      <div className="border-t border-white/20 mt-6 pt-4 text-xs text-center md:text-left md:flex md:justify-between max-w-6xl mx-auto px-6 text-white/80">
        <p>Created with love by Elastic Themes</p>
        <p>Powered by Webflow • Style Guide • Licensing</p>
      </div>
    </footer>
  );
};

export default Footer;
