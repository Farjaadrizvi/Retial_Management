import React from 'react';
import { TrendingUp, Users, Package, DollarSign } from 'lucide-react';
import StatCard from '../components/Dashboard/StatCard';

const Dashboard = () => {
  const stats = [
    { icon: DollarSign, title: 'Total Revenue', value: '$54,239', trend: 12.5 },
    { icon: Users, title: 'Total Customers', value: '1,429', trend: 8.2 },
    { icon: Package, title: 'Products Sold', value: '892', trend: -2.4 },
    { icon: TrendingUp, title: 'Conversion Rate', value: '2.4%', trend: 4.1 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="flex space-x-3">
          <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          {/* Add order list component here */}
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Top Products</h2>
          {/* Add top products component here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;