import React from 'react';
import PropTypes from 'prop-types';
import { CreditCard, DollarSign, Smartphone, Users, UserPlus, BookOpen, Instagram, Facebook, Twitter, Mail, PiggyBank, BarChart, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
const AnimatedSection = ({ children, threshold }) => {
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
const AnimatedImage = ({ src, alt, delay }) => {
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
        className="rounded-lg shadow-md w-full md:w-3/4 mx-auto"
      />
    </div>
  );
};
AnimatedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  delay: PropTypes.number,
};
AnimatedImage.defaultProps = {
  delay: 0,
};
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
FeatureCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
const Aboutus = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-blue-100 min-h-screen pt-20">
      <div className="p-5">
        <AnimatedSection>
          <p className="text-3xl text-green-900 font-bold py-5 text-center">Empowering the next generation with financial literacy</p>
        </AnimatedSection>
        <AnimatedSection>
          <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-3xl font-semibold text-green-600 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                GenZPay was born from a simple observation: many teenagers lack basic financial knowledge. 
                Our founder's cousin struggled to understand investments and money management, 
                inspiring us to create a learning-focused banking experience for young tech-savvy minds.
              </p>
              <p className="text-gray-700">
                We employ innovative technology to make the process of learning and managing expenses 
                easier for tech-oriented youth, right from the start.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <AnimatedImage src="/image4.jpg" alt="Young people using GenZPay" />
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {[
              {
                icon: <CreditCard className="text-green-600 w-12 h-12" />,
                title: "Prepaid Card",
                description: "Our GenZPay Platform features a prepaid card for teenagers, allowing them to easily manage their online and offline transactions."
              },
              {
                icon: <Smartphone className="text-green-600 w-12 h-12" />,
                title: "Mobile App",
                description: "With our user-friendly app, teens can track their spending, set budgets, and make informed financial decisions."
              },
              {
                icon: <DollarSign className="text-green-600 w-12 h-12" />,
                title: "Financial Education",
                description: "We incorporate gamification features to make learning about money management engaging and fun for young users."
              },
              {
                icon: <Users className="text-green-600 w-12 h-12" />,
                title: "Parental Oversight",
                description: "Parents can easily give pocket money, monitor expenditures, and guide their children's financial learning journey."
              },
            ].map((feature, index) => (
              <div key={index} className="transform transition duration-500 hover:scale-105">
                <FeatureCard {...feature} />
              </div>
            ))}
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 my-12">
            <h2 className="text-3xl font-semibold text-green-600 mb-8 text-center">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-between items-center">
              {[
                {
                  icon: <UserPlus className="text-green-600 w-16 h-16" />,
                  title: "Sign Up",
                  description: "Create your GenZPay account"
                },
                {
                  icon: <CreditCard className="text-green-600 w-16 h-16" />,
                  title: "Get Your Card",
                  description: "Receive your prepaid card"
                },
                {
                  icon: <BookOpen className="text-green-600 w-16 h-16" />,
                  title: "Start Learning",
                  description: "Begin your financial journey"
                },
              ].map((step, index) => (
                <div key={index} className="text-center mb-8 md:mb-0 cursor-pointer">
                  <div className="bg-green-100 rounded-full p-6 inline-block mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </div>
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

export default Aboutus;