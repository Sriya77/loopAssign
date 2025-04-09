import React from 'react';

const countries = [
  { name: 'United States', percentage: '35%', flag: '🇺🇸' },
  { name: 'United Kingdom', percentage: '27%', flag: '🇬🇧' },
];

export default function CustomerMap() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-6">
        <div>
          <h3 className="text-lg font-semibold">Customer Growth</h3>
          <p className="text-sm text-gray-500">Customer growth by country</p>
        </div>
        <select className="border rounded-lg px-3 py-1.5 text-sm w-full sm:w-auto">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      
      <div className="relative h-48 sm:h-64 bg-gray-100 rounded-lg mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400">World Map Visualization</span>
        </div>
      </div>

      <div className="space-y-4">
        {countries.map((country, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-2xl">{country.flag}</span>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm sm:text-base">{country.name}</span>
                <span className="text-sm sm:text-base">{country.percentage}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: country.percentage }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}