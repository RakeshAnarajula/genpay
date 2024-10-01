import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Lock } from 'lucide-react';
const Hero = ({ scrollToFeatures }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  return (
    <div className="relative h-screen w-full overflow-hidden p-4 pt-10 py-20">
      <img
        src="/genpay hero1.png"
        alt="GenPay Background"
        className="absolute inset-0 w-auto h-full  object-fill"
      />
      <div className="absolute inset-0 bg-black opacity-10" />
      <motion.div
        className="relative z-10 flex flex-col justify-center min-h-screen text-green-900 p-6 sm:p-8 md:p-16 lg:p-24"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold mb-4 text-left max-w-2xl"
        >
          Welcome to GenPay
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 text-left max-w-xl font-semibold"
        >
          The next generation of digital payments.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-8 font-semibold"
        >
          <FeatureItem icon={CreditCard} text="Multiple Cards" />
          <FeatureItem icon={Smartphone} text="Mobile Friendly" />
          <FeatureItem icon={Lock} text="Secure Payments" />
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-4xl font-semibold mb-6 text-left max-w-lg"
        >
          Ready to start your financial journey?
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="flex items-start md:items-center space-y-4 md:space-y-0"
        >
          <button
            className="bg-green-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition-transform duration-300 hover:scale-105"
            onClick={scrollToFeatures} // Call the scroll function
          >
            Get Started
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
const FeatureItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-3 text-green-900">
    <Icon size={24} />
    <span className="text-base sm:text-lg">{text}</span>
  </div>
);
FeatureItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};
Hero.propTypes = {
  scrollToFeatures: PropTypes.func.isRequired,
};
export default Hero;

