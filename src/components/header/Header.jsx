import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center  px-8 py-4 border-b">
      <div className="text-2xl font-bold text-gray-800">Toy store</div>
      <nav className="flex space-x-6 text-gray-700">
        <a href="#">Catalog</a>
        <a href="#">Delivery</a>
        <a href="#">About</a>
        <a href="#">Contacts</a>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2 text-gray-600">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <div className="flex items-center space-x-2">
          <span>Cart</span>
          <span className="bg-lime-600 text-white rounded-full px-2 text-sm">0</span>
        </div>
      </div>
    </header>
  );
}

export default Header