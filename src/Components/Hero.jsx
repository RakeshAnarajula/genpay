import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Lock } from 'lucide-react';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src="/genpay hero.png"
        alt="GenPay Background"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-10" /> {/* Overlay for better text visibility */}
      <div className="relative z-10 flex flex-col justify-center h-full text-green-900 p-8 md:p-16 lg:p-24">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-8xl md:text-8xl lg:text-8xl font-bold mb-4 text-left max-w-2xl"
        >
          Welcome to GenPay
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-left max-w-xl"
        >
          The next generation of digital payments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-8"
        >
          <div className="flex items-center space-x-3 text-green-900">
            <CreditCard size={30} />
            <span className="text-lg">Multiple Cards</span>
          </div>
          <div className="flex items-center space-x-3 text-green-900">
            <Smartphone size={30} />
            <span className="text-lg">Mobile Friendly</span>
          </div>
          <div className="flex items-center space-x-3 text-green-900">
            <Lock size={30} />
            <span className="text-lg">Secure Payments</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;