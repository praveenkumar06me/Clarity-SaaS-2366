import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

const DashboardStats = () => {
  const timeData = {
    dates: Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return format(date, 'MMM dd');
    }).reverse(),
    hours: [6, 7.5, 5.5, 8, 6.5, 7, 8.5]
  };

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: timeData.dates
    },
    yAxis: {
      type: 'value',
      name: 'Hours'
    },
    series: [{
      data: timeData.hours,
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#0ea5e9'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(14, 165, 233, 0.3)'
          }, {
            offset: 1,
            color: 'rgba(14, 165, 233, 0)'
          }]
        }
      }
    }]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-gray-500 text-sm font-medium">Active Projects</h3>
        <p className="text-3xl font-bold mt-2">12</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-gray-500 text-sm font-medium">Hours This Week</h3>
        <p className="text-3xl font-bold mt-2">49.5</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-gray-500 text-sm font-medium">Tasks Completed</h3>
        <p className="text-3xl font-bold mt-2">28</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="col-span-1 md:col-span-3 bg-white p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-gray-500 text-sm font-medium mb-4">Weekly Hours Overview</h3>
        <ReactECharts option={option} style={{ height: '300px' }} />
      </motion.div>
    </div>
  );
};

export default DashboardStats;