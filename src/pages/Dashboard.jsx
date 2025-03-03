import DashboardStats from '../components/DashboardStats';
import PricingCards from '../components/PricingCards';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
        <p className="text-gray-500 mt-2">Here's what's happening with your projects today.</p>
      </motion.div>

      <DashboardStats />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-semibold mb-6">Subscription Plans</h2>
        <PricingCards />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm p-6 mt-8"
      >
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {['Logo design for Tech Corp completed', 'New project milestone reached', 'Team meeting scheduled for tomorrow'].map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 text-gray-600 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-primary-400"></div>
              <span>{activity}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;