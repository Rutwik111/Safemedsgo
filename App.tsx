import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

// Navigation Component
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight flex items-center gap-2 focus:outline-none focus:text-blue-400"
          aria-label="SafeMeds Home"
        >
          <i className="fa-solid fa-microchip text-blue-400"></i>
          SAFEMEDS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wider">
          <Link 
            to="/" 
            className={`hover:text-blue-400 transition-colors focus:outline-none focus:border-b-2 focus:border-blue-400 ${isActive('/') ? 'text-blue-400' : 'text-gray-300'}`}
          >
            Home
          </Link>
          <Link 
            to="/contact" 
            className={`hover:text-blue-400 transition-colors focus:outline-none focus:border-b-2 focus:border-blue-400 ${isActive('/contact') ? 'text-blue-400' : 'text-gray-300'}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none focus:text-blue-400 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-fade-in absolute w-full left-0 shadow-2xl">
          <div className="flex flex-col p-4 space-y-2">
            <Link 
              to="/" 
              className={`block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors focus:outline-none focus:bg-slate-700 ${isActive('/') ? 'text-blue-400 font-bold bg-slate-700/50' : 'text-gray-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={`block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors focus:outline-none focus:bg-slate-700 ${isActive('/contact') ? 'text-blue-400 font-bold bg-slate-700/50' : 'text-gray-300'}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 mt-auto border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="mb-2 font-medium text-slate-300">&copy; {new Date().getFullYear()} SafeMeds Tech. All rights reserved.</p>
          <a 
            href="mailto:support@safemeds.com" 
            className="text-sm text-blue-400 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 focus:outline-none focus:underline"
          >
             <i className="fa-solid fa-envelope"></i> support@safemeds.com
          </a>
        </div>
        <div className="flex gap-6 text-2xl">
          <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-offset-2 focus:ring-offset-slate-900">
            <i className="fa-brands fa-facebook-f text-lg"></i>
          </a>
          <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] focus:ring-offset-2 focus:ring-offset-slate-900">
            <i className="fa-brands fa-twitter text-lg"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-2 focus:ring-offset-slate-900">
            <i className="fa-brands fa-linkedin-in text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
};

export default App;