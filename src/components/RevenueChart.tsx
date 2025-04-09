import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Data for different time periods
const timeData = {
  'Last 24 hour': [
    { name: '12 AM', revenue: 400, ecommerce: 240 },
    { name: '4 AM', revenue: 300, ecommerce: 139 },
    { name: '8 AM', revenue: 500, ecommerce: 380 },
    { name: '12 PM', revenue: 280, ecommerce: 190 },
    { name: '4 PM', revenue: 590, ecommerce: 390 },
    { name: '8 PM', revenue: 350, ecommerce: 300 },
    { name: 'Now', revenue: 400, ecommerce: 380 },
  ],
  'Last week': [
    { name: 'Sun', revenue: 400, ecommerce: 240 },
    { name: 'Mon', revenue: 300, ecommerce: 139 },
    { name: 'Tue', revenue: 500, ecommerce: 380 },
    { name: 'Wed', revenue: 280, ecommerce: 190 },
    { name: 'Thu', revenue: 590, ecommerce: 390 },
    { name: 'Fri', revenue: 350, ecommerce: 300 },
    { name: 'Sat', revenue: 400, ecommerce: 380 },
  ],
  'Last month': [
    { name: 'Week 1', revenue: 1500, ecommerce: 1000 },
    { name: 'Week 2', revenue: 2000, ecommerce: 1500 },
    { name: 'Week 3', revenue: 1800, ecommerce: 1200 },
    { name: 'Week 4', revenue: 2400, ecommerce: 1800 },
  ],
  'Last year': [
    { name: 'Jan', revenue: 4000, ecommerce: 2400 },
    { name: 'Mar', revenue: 3000, ecommerce: 1398 },
    { name: 'May', revenue: 5000, ecommerce: 3800 },
    { name: 'Jul', revenue: 2800, ecommerce: 1908 },
    { name: 'Sep', revenue: 5900, ecommerce: 3800 },
    { name: 'Nov', revenue: 3500, ecommerce: 3000 },
    { name: 'Dec', revenue: 4000, ecommerce: 3800 },
  ],
};

interface RevenueChartProps {
  selectedTimeFilter: number;
}

export default function RevenueChart({ selectedTimeFilter }: RevenueChartProps) {
  const timeFilters = ['Last 24 hour', 'Last week', 'Last month', 'Last year'];
  const currentPeriod = timeFilters[selectedTimeFilter];
  const data = timeData[currentPeriod];

  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">Revenue Growth</h3>
          <p className="text-sm text-gray-500">{currentPeriod} revenue growth with in percentage</p>
        </div>
        <button className="text-blue-600 text-sm">View detail</button>
      </div>
      <div className="h-64 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            />
            <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="ecommerce" fill="#93C5FD" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}