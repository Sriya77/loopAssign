import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sun', revenue: 400, ecommerce: 240 },
  { name: 'Mon', revenue: 300, ecommerce: 139 },
  { name: 'Tue', revenue: 500, ecommerce: 380 },
  { name: 'Wed', revenue: 280, ecommerce: 190 },
  { name: 'Thu', revenue: 590, ecommerce: 390 },
  { name: 'Fri', revenue: 350, ecommerce: 300 },
  { name: 'Sat', revenue: 400, ecommerce: 380 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">Revenue Growth</h3>
          <p className="text-sm text-gray-500">Last 7 days revenue growth with in percentage</p>
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