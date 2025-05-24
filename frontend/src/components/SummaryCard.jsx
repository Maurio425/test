import React from 'react';
import {
  UserGroupIcon,
  FireIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

function SummaryCard({ title, value, icon }) {
  let IconComponent;
  switch (icon) {
    case 'user-group':
      IconComponent = UserGroupIcon;
      break;
    case 'fire':
      IconComponent = FireIcon;
      break;
    case 'clock':
      IconComponent = ClockIcon;
      break;
    case 'currency-dollar':
      IconComponent = CurrencyDollarIcon;
      break;
    default:
      IconComponent = () => null; // Or a default placeholder icon
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center">
        {IconComponent && (
          <IconComponent className="h-8 w-8 text-blue-500 mr-3" />
        )}
        <div>
          <p className="text-xs text-gray-600 font-medium uppercase">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
