import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

const transactions = [
  {
    customer: { id: '#23492', name: 'Jenny Wilson' },
    item: 'Leather case bag & wallet',
    date: '12 Jan',
    purchase: '$2,548',
    status: 'live order',
  },
  {
    customer: { id: '#23492', name: 'Jenny Wilson' },
    item: 'Simple Tote Bag',
    date: '3 Jan',
    purchase: '$548',
    status: 'completed',
  },
];

export default function TopTransactions() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-6">
        <div>
          <h3 className="text-lg font-semibold">Top Transaction</h3>
          <p className="text-sm text-gray-500">Last week's top transactions</p>
        </div>
        <Link to="/invoice" className="text-blue-600 text-sm">View detail</Link>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg border">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
              <User className="text-gray-600" />
            </div>
            <div className="flex-1 min-w-0 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                <div>
                  <p className="font-medium truncate">{transaction.customer.name}</p>
                  <p className="text-sm text-gray-500 truncate">{transaction.item}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-medium">{transaction.purchase}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              {transaction.status === 'live order' && (
                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                  Live Order
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}