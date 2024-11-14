import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CreditCard, Smartphone, PiggyBank, GraduationCap, Shield, Gift, TrendingUp, Users, Plus, BarChart, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
const AnimatedSection = ({ children, threshold = 0.1 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};
AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  threshold: PropTypes.number,
};
AnimatedSection.defaultProps = {
  threshold: 0.1,
};
const AnimatedImage = ({ src, alt, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-md w-full h-auto object-cover"
      />
    </div>
  );
};
AnimatedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  delay: PropTypes.number,
};
const FeatureCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
FeatureCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
const BenefitCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-lg font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
BenefitCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div 
      className="border-b border-gray-200 pb-4 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-x-1" 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold mb-2">{question}</h4>
        <Plus className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 mt-2">{answer}</p>
      </div>
    </div>
  );
};
FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
const faqItems = [
  {
    question: "Is GenZPay safe for my teenager to use?",
    answer: "Yes, GenZPay uses bank-level encryption and security measures. Parents have full visibility and control over their teen's account."
  },
  {
    question: "How much does GenZPay cost?",
    answer: "GenZPay offers a free basic plan and a premium plan with additional features for a small monthly fee. Visit our pricing page for details."
  },
  {
    question: "Can I set spending limits for my teen?",
    answer: "Absolutely! Parents can set daily, weekly, or monthly spending limits, as well as limits for specific categories."
  },
];
const Teens = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <main className="container mx-auto px-4 py-10">
        <AnimatedSection>
          <section className="text-center mb-16 py-10 md:py-20">
            <div className="flex flex-col items-center mb-6">
              <p className="text-2xl md:text-3xl text-green-900 font-bold">
                Empower your financial future. Learn money management through real-world experience.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 pt-5 md:space-x-8">
              <div className="w-full md:w-1/2 px-12 ">
                <AnimatedImage src="/image2.jpg" alt="GenZPay App" />
              </div>
              <div className="w-auto md:w-1/2 px-10">
                <AnimatedImage src="/image3.jpg" alt="Additional Feature" />
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <CreditCard className="w-12 h-12 text-blue-500" />,
                title: "Personalized Debit Card",
                description: "Get your own card designed for your lifestyle.",
              },
              {
                icon: <Smartphone className="w-12 h-12 text-green-500" />,
                title: "Mobile App Control",
                description: "Manage finances on-the-go with our intuitive app.",
              },
              {
                icon: <PiggyBank className="w-12 h-12 text-purple-500" />,
                title: "Smart Savings",
                description: "Set goals and track your progress easily to save.",
              },
              {
                icon: <GraduationCap className="w-12 h-12 text-red-500" />,
                title: "Financial Education",
                description: "Learn through fun, interactive challenges, aim the target easily.",
              },
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose GenZPay?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-blue-500" />,
                  title: "Safe & Secure",
                  description: "Bank-level security and parental controls keep your money safe.",
                },
                {
                  icon: <Gift className="w-8 h-8 text-green-500" />,
                  title: "Rewards Program",
                  description: "Earn points for smart financial decisions and redeem for cool perks.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
                  title: "Investment Learning",
                  description: "Discover the basics of investing with our simulated stock market.",
                },
                {
                  icon: <Users className="w-8 h-8 text-red-500" />,
                  title: "Family Sharing",
                  description: "Connect with family members to manage allowances and chores.",
                },
              ].map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section className="bg-gray-700 text-white rounded-lg p-8 text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your financial journey?</h2>
            <p className="mb-6">Join thousands of teens mastering their finances with GenZPay.</p>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300">
              Sign Up Now
            </button>
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section className="bg-gray-300 p-8 rounded-lg mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="space-y-4 w-full md:w-1/2">
                {faqItems.map((item, index) => (
                  <FAQItem key={index} {...item} />
                ))}
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <AnimatedImage src="/FAQ.png" alt="FAQ Illustration"/>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <footer className="bg-gray-700 text-white py-12 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="flex flex-wrap justify-center space-x-4 mb-4">
                <a href="#" className="text-sm hover:underline mb-2">Privacy Policy</a>
                <a href="#" className="text-sm hover:underline mb-2">Terms of Service</a>
                <a href="#" className="text-sm hover:underline mb-2">FAQ</a>
              </div>
              <p>&copy; {new Date().getFullYear()} GenZPay. All rights reserved.</p>
            </div>
            <p className="text-sm mt-4">
              Designed and Developed by{' '}
              <a
                href="https://www.virtutechsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                Virtu Tech Solutions
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Teens;