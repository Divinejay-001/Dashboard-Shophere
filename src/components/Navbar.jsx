import React, { useState } from 'react';
import { ShoppingCart, Heart, Search, Menu, X } from 'lucide-react';

function Navbar({ cartCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">DivineStore</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Categories</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-600 hover:text-gray-900">
              <Search className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Heart className="w-6 h-6" />
            </button>
            <button onClick={onCartClick} className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">Shop</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">Categories</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">About</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">Contact</a>
            </div>
            <div className="px-5 py-3 border-t border-gray-200 flex justify-around">
              <button className="text-gray-600 hover:text-gray-900">
                <Heart className="w-6 h-6" />
              </button>
              <button onClick={onCartClick} className="text-gray-600 hover:text-gray-900 relative">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;