import React from 'react';
import PropTypes from 'prop-types';
import { Download } from 'lucide-react';
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
const AnimatedImage = ({ src, alt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-md w-full mx-auto"
      />
    </div>
  );
};
AnimatedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
const GenZPayLanding = () => {
  return (
    <div className="min-h-screen bg-green-200 p-8">
      <AnimatedSection>
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Why GenZPay?</h1>
          <p className="text-xl text-gray-800">The smart way for kids to manage money</p>
        </header>
      </AnimatedSection>
      <AnimatedSection>
        <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="space-y-6 md:w-1/2">
              <FeatureItem
                icon="🧘‍♀️"
                title="Peace of Mind for Parents"
                description="GenZPay is the most comfortable way for kids to receive their pocket money instantly & monitor their Expenses as well as Savings."
              />
              <FeatureItem
                icon="😊"
                title="Comfortable & Fun for Kids"
                description="Most comfortable way to receive pocket money. Our gamified learning inculcates healthy financial behavior while being fun & interactive."
              />
              <FeatureItem
                icon="🔒"
                title="Secure & Reliable"
                description="Categories unsuitable for kids are blocked, no cash withdrawal, instant spend block in case of card loss, all the data is encrypted to ensure privacy."
              />
            </div>
            <div className="md:w-1/2">
              <AnimatedImage src="/genpay.jpg" alt="GenZPay App"/>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Kids' first step towards financial independence</h2>
          <div className="flex justify-center space-x-4">
            <AppStoreButton store="App Store" />
            <AppStoreButton store="Google Play" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="text-3xl mr-4">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-green-600 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);
FeatureItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
const AppStoreButton = ({ store }) => (
  <button className="bg-black text-white px-6 py-2 rounded-full flex items-center">
    <Download className="mr-2" size={20} />
    <span>Get it on {store}</span>
  </button>
);
AppStoreButton.propTypes = {
  store: PropTypes.string.isRequired,
};
export default GenZPayLanding;