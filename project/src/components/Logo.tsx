import React from 'react';
import { Layout } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Layout className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      <span className="font-bold text-xl text-gray-800 dark:text-white">NextStage</span>
    </div>
  );
};