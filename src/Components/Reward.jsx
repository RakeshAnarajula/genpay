import React from 'react';
import PropTypes from 'prop-types';
import { CreditCard, PiggyBank, Gift, Star, Zap, Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
const AnimatedSection = ({ children, threshold = 0.1 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });
  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
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
const RewardsSection = () => {
  const rewardSteps = [
    {
      icon: <CreditCard className="w-16 h-16 text-green-500" />,
      title: "Shop & Spend",
      description: "Make purchases with your GenZPay card anywhere, anytime"
    },
    {
      icon: <PiggyBank className="w-16 h-16 text-pink-500" />,
      title: "Earn ZPay Coins",
      description: "Watch your ZPay Coins stack up with every transaction"
    },
    {
      icon: <Gift className="w-16 h-16 text-purple-500" />,
      title: "Redeem Rewards",
      description: "Turn your ZPay Coins into exciting rewards and experiences"
    }
  ];
  const rewardFeatures = [
    { icon: <Star className="w-8 h-8 text-yellow-500" />, text: "Exclusive discounts" },
    { icon: <Zap className="w-8 h-8 text-blue-500" />, text: "Instant cashbacks" },
    { icon: <Trophy className="w-8 h-8 text-orange-500" />, text: "Unlock achievements" }
  ];
  return (
    <div className="bg-green-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title and description section with animation */}
        <AnimatedSection>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            Supercharge Your Spending
          </h2>
          <p className="text-xl text-gray-800 text-center mb-12">
            With GenZPay's Rewards Program, every purchase is an opportunity to earn
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {rewardSteps.map((step, index) => (
              <RewardStep key={index} {...step} />
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="bg-gray-100 rounded-lg shadow-xl p-10 pt-10 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Our Rewards Program Rocks 🚀
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              We're the most rewarding app for teens for a reason. On GenZPay, teens get rewarded for every single spend with ZPay Coins, which they can then burn to unlock a world of exciting perks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {rewardFeatures.map((feature, index) => (
                <div key={index} className="flex items-center bg-gray-300 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  {feature.icon}
                  <span className="ml-3 text-gray-800 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Start Earning Rewards Now!
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
const RewardStep = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
RewardStep.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default RewardsSection;