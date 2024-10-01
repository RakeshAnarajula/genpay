import React, { useState, useEffect } from 'react';
import { Send, CreditCard, PiggyBank, BarChart, Shield, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  return (
    <div className="flex flex-col min-h-screen py-20 pb-0">
      <main className="flex-grow bg-gradient-to-br from-green-200 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full bg-gray-100 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Get in Touch
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  We'd love to hear from you. Drop us a message!
                </p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-lg sm:text-lg border-gray-300 rounded-md pl-2"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-lg sm:text-lg border-gray-300 rounded-md pl-2"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-lg sm:text-lg border-gray-300 rounded-md pl-2"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-lg sm:text-lg border-gray-300 rounded-md pl-2"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <Send className="h-5 w-5 mr-2" aria-hidden="true" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-1/3 p-4 flex justify-center items-center">
              <img 
                src="/contactus.png" 
                alt="Contact Us" 
                className="w-full max-w-xs rounded-lg"
                data-aos="zoom-in" // Image animation
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-700 text-white py-10 pl-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-4 ">
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
                <a href="https://www.facebook.com/" className="hover:text-gray-200 transition duration-300"><Facebook size={24} /></a>
                <a href="https://x.com/" className="hover:text-gray-200 transition duration-300"><Twitter size={24} /></a>
                <a href="https://www.instagram.com/" className="hover:text-gray-200 transition duration-300"><Instagram size={24} /></a>
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
    </div>
  );
};
export default ContactUs;
