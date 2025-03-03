import { FiHome, FiCalendar, FiClock, FiSettings, FiBook } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { icon: FiHome, text: 'Dashboard', path: '/' },
    { icon: FiBook, text: 'Get Started', path: '/get-started' },
    { icon: FiCalendar, text: 'Projects', path: '/projects' },
    { icon: FiClock, text: 'Time Tracking', path: '/time' },
    { icon: FiSettings, text: 'Settings', path: '/settings' }
  ];

  return (
    <nav className="bg-white border-r border-gray-200 h-screen w-64 fixed left-0 top-0 p-4">
      <div className="flex items-center mb-8 px-2">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-2xl font-bold text-primary-600"
        >
          TaskFlow
        </motion.div>
      </div>
      <div className="space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.text}</span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 w-1 h-8 bg-primary-600 rounded-r-full"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;