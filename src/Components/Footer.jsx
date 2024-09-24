import React from 'react';
import { Facebook, Twitter, Instagram, Mail, CreditCard, PiggyBank, BarChart, Shield } from 'lucide-react';
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

export default Footer