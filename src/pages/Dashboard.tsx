import { useState } from 'react';
import { Bell, Search, DollarSign, Users, ShoppingCart, Package, Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import CustomerMap from '../components/CustomerMap';
import TopTransactions from '../components/TopTransactions';
import TopProducts from '../components/TopProducts';

const timeFilters = ['Last 24 hour', 'Last week', 'Last month', 'Last year'];

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block fixed md:static top-0 left-0 h-full z-50`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>
      
      <main className="flex-1 p-4 md:p-8 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button 
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto justify-end">
            <div className="relative flex-1 sm:flex-none">
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full sm:w-auto pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <div className="relative">
              <Bell className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                4
              </span>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-4 mb-6 overflow-x-auto pb-2">
          {timeFilters.map((filter, index) => (
            <button
              key={index}
              className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base whitespace-nowrap ${
                index === 1 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
          <button className="ml-auto px-3 md:px-4 py-2 text-gray-600 text-sm md:text-base whitespace-nowrap">
            Filter by date range
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
          <StatCard
            icon={<DollarSign className="text-blue-600" />}
            title="Total Revenue"
            value="$612,839"
            change={16}
            period="last month"
          />
          <StatCard
            icon={<Users className="text-green-600" />}
            title="Total Customer"
            value="513,456"
            change={-0.45}
            period="last month"
          />
          <StatCard
            icon={<ShoppingCart className="text-purple-600" />}
            title="Total Transaction"
            value="637,902"
            change={8}
            period="last month"
          />
          <StatCard
            icon={<Package className="text-orange-600" />}
            title="Total Product"
            value="256,600"
            change={2}
            period="last month"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
          <RevenueChart />
          <CustomerMap />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <TopTransactions />
          <TopProducts />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;