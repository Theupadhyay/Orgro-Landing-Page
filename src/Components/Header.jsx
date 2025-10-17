import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Orgro</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Product
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Platform
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Resources
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">
              Sign In
            </button>
            <button className="bg-black text-white px-3 py-2 lg:px-4 rounded-md hover:bg-gray-800 transition-colors text-sm lg:text-base">
              List Your Business
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Product</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Platform</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Resources</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Pricing</a>
              <div className="px-3 py-2 space-y-2">
                <button className="w-full text-left text-gray-600 hover:text-gray-900">Sign In</button>
                <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                  List Your Business
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
