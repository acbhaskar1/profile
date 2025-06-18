import React from 'react';

interface ChartCardProps {
  title: string;
  data: number[];
  labels: string[];
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, data, labels }) => {
  const maxValue = Math.max(...data);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{title}</h3>
      
      <div className="flex items-end justify-between h-40 gap-2">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-t-lg overflow-hidden flex-1 flex items-end">
              <div 
                className={`w-full rounded-t-lg transition-all duration-1000 delay-${index * 100} ${
                  index % 4 === 0 ? 'bg-blue-500' :
                  index % 4 === 1 ? 'bg-green-500' :
                  index % 4 === 2 ? 'bg-purple-500' : 'bg-orange-500'
                }`}
                style={{ 
                  height: `${(value / maxValue) * 100}%`,
                  minHeight: '4px'
                }}
              />
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
              {labels[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};