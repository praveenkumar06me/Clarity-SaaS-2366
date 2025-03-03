import { motion } from 'framer-motion';

const PricingCards = () => {
  const plans = [
    {
      name: "Test1",
      amount: 10,
      priceId: "price_1QyWKCARxrUXtpoI7foguZJ0",
      paymentLink: "https://buy.stripe.com/test_6oE9ED3Cz24X8zC5mk",
      currency: "usd",
      interval: "month"
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-8 p-8">
      {plans.map((plan) => (
        <motion.div
          key={plan.priceId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
          <div className="text-4xl font-bold mb-6">
            ${plan.amount}
            <span className="text-lg text-gray-500">/{plan.interval}</span>
          </div>
          <a
            href={plan.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Subscribe Now
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default PricingCards;