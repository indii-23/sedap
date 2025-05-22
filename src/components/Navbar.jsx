import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-600">
          Sedap
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/components/hero" className="text-gray-700 hover:text-red-500">Beranda</Link>
          <Link to="/components/about" className="text-gray-700 hover:text-red-500">About</Link>
          <Link to="/components/produklist" className="text-gray-700 hover:text-red-500">Produk</Link>
        </div>

        <div className="space-x-2">
          <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-700 border rounded">Login</Link>
          <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
