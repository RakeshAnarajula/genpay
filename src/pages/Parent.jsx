import React, { useEffect, useRef } from 'react';
import { ArrowRight, CreditCard, PiggyBank, Video, Gift, Shield, Book, DollarSign, TrendingUp, Target, Facebook, Twitter, Instagram, Mail,BarChart } from 'lucide-react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Parent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-green-50 min-h-screen font-sans text-gray-800">
      <main>
        <HeroSection />
        <AICardSection />
        <UnlockFinancialFreedom />
        <Footer />
      </main>
    </div>
  );
};
const HeroSection = () => {
  return (
    <section id="home" className="py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <AnimatedContent>
            <h1 className="text-4xl font-bold mb-6">Empower Your Financial Future</h1>
            <p className="text-xl mb-8">
              GenZPay: The AI-powered financial education platform that gives teens the tools to build wealth and make
              smart money decisions.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-transform duration-300 hover:scale-105 flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-100 transition-transform duration-300 hover:scale-105 flex items-center">
                Watch Demo <Video className="ml-2 h-4 w-4" />
              </button>
            </div>
          </AnimatedContent>
        </div>
        <div
          className="md:w-1/2 pl-8 py-5"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <AnimatedContent>
            <img
              src="/image2.jpg"
              alt="Teens using GenZPay app"
              className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
const AICardSection = () => {
  return (
    <section className="bg-green-50 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div
          className="md:w-1/2 mb-10 md:mb-0 pb-20"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <AnimatedContent>
            <img
              src="/image3.jpg"
              alt="GenZPay Card"
              className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </AnimatedContent>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <AnimatedContent>
            <h2 className="text-3xl font-bold mb-6">GenZPay: AI-Based Prepaid Cards</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <CreditCard className="h-6 w-6 text-green-500 mr-3" />
                <span>Secure account with no link to your bank</span>
              </li>
              <li className="flex items-center">
                <PiggyBank className="h-6 w-6 text-green-500 mr-3" />
                <span>Teach financial responsibility through practical experiences</span>
              </li>
              <li className="flex items-center">
                <Shield className="h-6 w-6 text-green-500 mr-3" />
                <span>Advanced security features to protect your teen's finances</span>
              </li>
              <li className="flex items-center">
                <Book className="h-6 w-6 text-green-500 mr-3" />
                <span>Access to a library of financial education resources</span>
              </li>
            </ul>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
const UnlockFinancialFreedom = () => {
  const features = [
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: 'AI-Powered Smart Savings',
      description: "Personalized savings goals tailored to your teen's interests and habits.",
      imgSrc: '/image3.jpg',
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: 'Interactive Financial Lessons',
      description: 'Engaging video content that makes learning about finance fun and easy.',
      imgSrc: '/image4.jpg',
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: 'Dynamic Rewards Program',
      description: 'Earn points for good financial habits, redeemable for real rewards.',
      imgSrc: '/image1.jpeg',
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Smart Prepaid Card',
      description: 'A secure, customizable card with built-in financial safeguards.',
      imgSrc: '/image2.jpg',
    },
  ];
  return (
    <section id="features" className="bg-green-100 py-16 px-6">
      <div className="container mx-auto">
        <AnimatedContent>
          <h2 className="text-4xl font-bold text-center mb-12">Unlock Financial Freedom with GenZPay</h2>
          <p className="text-lg text-center mb-8">
            Discover the tools and resources to help your teen make smart financial decisions and build wealth for the
            future.
          </p>
        </AnimatedContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <AnimatedContent>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">Why Choose GenZPay?</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-500 mr-3" />
                <span>Build wealth early</span>
              </div>
              <div className="flex items-center">
                <Target className="h-8 w-8 text-green-500 mr-3" />
                <span>Achieve financial goals</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
                <span>Develop lifelong skills</span>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
const FeatureCard = ({ icon, title, description, imgSrc }) => (
  <AnimatedContent>
    <div className="bg-white shadow-md rounded-lg p-6 text-center transition-all duration-300 ease-in-out hover:shadow-xl" data-aos="zoom-in" data-aos-duration="1000">
      <img src={imgSrc} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <div className="text-green-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </AnimatedContent>
);
FeatureCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">GenZPay</h3>
            <p className="text-sm">Empowering the next generation with financial literacy and responsibility.</p>
          </div> 
          <div>
            <h4 className="text-lg font-semibold mb-4">Key Features</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CreditCard size={18} className="mr-2" />
                <span>Virtual Debit Cards</span>
              </li>
              <li className="flex items-center">
                <PiggyBank size={18} className="mr-2" />
                <span>Savings Goals</span>
              </li>
              <li className="flex items-center">
                <BarChart size={18} className="mr-2" />
                <span>Spending Analytics</span>
              </li>
              <li className="flex items-center">
                <Shield size={18} className="mr-2" />
                <span>Parental Controls</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">MONTECASINO 234 CALLE PINO, TOA ALTA, PR, USA. ZIP-00953</p>
            <p className="text-sm mb-2">Email: info@genzpay.app</p>
            <p className="text-sm">Phone: +1 (787) 387-9807</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200 transition duration-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-200 transition duration-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-200 transition duration-300"><Instagram size={24} /></a>
              <a href="mailto:info@genzpay.app" className="hover:text-gray-200 transition duration-300"><Mail size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-sm hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm hover:underline">Terms of Service</a>
              <a href="#" className="text-sm hover:underline">FAQ</a>
            </div>
            <p>&copy; {new Date().getFullYear()} GenZPay. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
const AnimatedContent = ({ children }) => {
  const contentRef = useRef(null);
  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      element.classList.add('fadeIn');
    }
  }, []);
  return (
    <div ref={contentRef} className="transition-opacity duration-500 ease-in-out">
      {children}
    </div>
  );
};
AnimatedContent.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Parent;