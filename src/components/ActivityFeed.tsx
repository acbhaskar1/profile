import React from 'react';
import { Clock, User, FileText, Settings, Mail } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'user',
    icon: User,
    title: 'New user registered',
    description: 'John Doe joined the platform',
    time: '2 minutes ago',
    color: 'blue'
  },
  {
    id: 2,
    type: 'report',
    icon: FileText,
    title: 'Monthly report generated',
    description: 'Analytics report for November 2024',
    time: '15 minutes ago',
    color: 'green'
  },
  {
    id: 3,
    type: 'settings',
    icon: Settings,
    title: 'System maintenance',
    description: 'Scheduled maintenance completed',
    time: '1 hour ago',
    color: 'purple'
  },
  {
    id: 4,
    type: 'message',
    icon: Mail,
    title: 'New message received',
    description: 'Support ticket #1234 updated',
    time: '2 hours ago',
    color: 'orange'
  }
];

const colorVariants = {
  blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  green: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
  orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
};

export const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div className={`p-2 rounded-lg ${colorVariants[activity.color as keyof typeof colorVariants]}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.title}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {activity.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};