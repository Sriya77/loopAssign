import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: number;
  period: string;
}

export default function StatCard({ icon, title, value, change, period }: StatCardProps) {
  const isPositive = change > 0;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl">
      <div className="flex items-start sm:items-center gap-4">
        <div className="p-3 rounded-lg bg-gray-50 shrink-0">{icon}</div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h3 className="text-xl sm:text-2xl font-bold">{value}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              {Math.abs(change)}%
            </span>
            <span className="text-xs sm:text-sm text-gray-500">vs {period}</span>
          </div>
        </div>
      </div>
    </div>
  );
}