import React from 'react';
import PropTypes from 'prop-types';
import { Search, PiggyBank, BarChart2, Banknote, BookOpen, CheckSquare, CreditCard, Shield, Lock } from 'lucide-react';
const iconColors = [
  'text-blue-500', 'text-green-500', 'text-purple-500',
  'text-yellow-500', 'text-red-500', 'text-indigo-500',
  'text-pink-500', 'text-teal-500', 'text-orange-500'
]; 
const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
    <Icon className={`w-16 h-16 mb-4 ${color}`} />  
    <h3 className="mb-3 text-xl font-semibold text-gray-800">{title}</h3>
    <p className=" text-center text-gray-600">{description}</p>
  </div>
  
);
FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
const Feature = React.forwardRef((props, ref) => {
  const features = [
    { icon: Search, title: "Manage Transactions", description: "Control payment limits and track your child's spending habits with ease." },
    { icon: PiggyBank, title: "Smart Savings", description: "Set and achieve savings goals with our interactive tools and guidance." },
    { icon: BarChart2, title: "Insightful Spend Analysis", description: "Get detailed breakdowns of spending patterns for both parents and kids." },
    { icon: Banknote, title: "No Minimum Balance", description: "Start your financial journey without any account balance restrictions." },
    { icon: BookOpen, title: "Fun Financial Education", description: "Learn crucial money skills through engaging in-app challenges and content." },
    { icon: CheckSquare, title: "GenZpay Tasks", description: "Complete exciting challenges to boost your financial knowledge and skills." },
    { icon: CreditCard, title: "Secure Numberless Card", description: "Enjoy enhanced security with our innovative numberless card design." },
    { icon: Shield, title: "Fort Knox Security", description: "Rest easy with top-tier security measures protecting every transaction." },
    { icon: Lock, title: "Instant Card Control", description: "Block or pause your card instantly with a single tap for total peace of mind." }
  ];
  return (
    <div className="bg-green-100 pt-20 pb-12" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-3xl font-bold text-center text-gray-900">Empower Your Financial Future</h2>
        <p className="mb-12 text-xl text-center text-gray-800">Discover the amazing features that make GenZPay the ultimate financial companion for the next generation.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} color={iconColors[index % iconColors.length]} /> 
          ))}
        </div>
      </div>
    </div>
  );
});
Feature.displayName = 'Feature';
export default Feature;
  