import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  trend: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value, trend }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold mt-2">{value}</p>
      </div>
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
    </div>
    <div className="mt-4">
      <span className={`text-sm ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {trend >= 0 ? '+' : ''}{trend}%
      </span>
      <span className="text-sm text-gray-500 ml-2">vs last month</span>
    </div>
  </div>
);

export default StatCard;