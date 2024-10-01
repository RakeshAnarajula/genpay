import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'PARENT', path: '/parent' },
  { name: 'TEENS', path: '/teens' },
  { name: 'ABOUT US', path: '/aboutus' },
  { name: 'CONTACT US', path: '/contactus' }
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const goToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  return (
    <>
      <motion.nav
        className="bg-green-800 shadow-lg fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             <div className="flex-shrink-0 cursor-pointer" onClick={goToHome}>
                 <img src="/zenpay title logo.png" alt="GENZPAY" className="h-30 w-auto" />
             </div>
            </motion.div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out ${
                        location.pathname === item.path
                          ? 'bg-green-700 text-white'
                          : 'text-white hover:bg-green-700 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden"
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out ${
                        location.pathname === item.path
                          ? 'bg-green-700 text-white'
                          : 'text-white hover:bg-green-700 hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition duration-500 ease-in-out z-10"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </>
  );
};
export default Navbar;