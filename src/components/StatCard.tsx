import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const colorVariants = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    icon: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    icon: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    icon: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    icon: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-800',
  },
};

export const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  color 
}) => {
  const colorClasses = colorVariants[color];
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colorClasses.bg} ${colorClasses.border} border group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${colorClasses.icon}`} />
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          changeType === 'positive' 
            ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' 
            : 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
        }`}>
          {change}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  );
};