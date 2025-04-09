import React, { useState } from 'react';
import { Bell, Search, DollarSign, Users, ShoppingCart, Package, Menu, LogOut, Settings, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import CustomerMap from '../components/CustomerMap';
import TopTransactions from '../components/TopTransactions';
import TopProducts from '../components/TopProducts';

const timeFilters = ['Last 24 hour', 'Last week', 'Last month', 'Last year'];

const notifications = [
  { id: 1, message: 'New order received', time: '5 minutes ago' },
  { id: 2, message: 'Payment confirmed', time: '1 hour ago' },
  { id: 3, message: 'New customer registration', time: '2 hours ago' },
];

// Data for different time periods
const statsData = {
  'Last 24 hour': {
    revenue: { value: '$42,839', change: 8 },
    customers: { value: '2,456', change: 12 },
    transactions: { value: '3,902', change: 5 },
    products: { value: '256,600', change: 0 },
  },
  'Last week': {
    revenue: { value: '$152,839', change: 16 },
    customers: { value: '13,456', change: -0.45 },
    transactions: { value: '37,902', change: 8 },
    products: { value: '256,600', change: 2 },
  },
  'Last month': {
    revenue: { value: '$612,839', change: 24 },
    customers: { value: '513,456', change: 15 },
    transactions: { value: '637,902', change: 12 },
    products: { value: '256,600', change: 5 },
  },
  'Last year': {
    revenue: { value: '$5,612,839', change: 45 },
    customers: { value: '2,513,456', change: 32 },
    transactions: { value: '4,637,902', change: 28 },
    products: { value: '256,600', change: 15 },
  },
};

function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState(1);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.notifications-container') && !target.closest('.bell-icon')) {
        setShowNotifications(false);
      }
      if (!target.closest('.user-menu-container') && !target.closest('.profile-icon')) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = () => {
    navigate('/goodbye');
  };

  const currentPeriod = timeFilters[selectedTimeFilter];
  const currentStats = statsData[currentPeriod];

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
            
            <div className="relative notifications-container">
              <button 
                className="relative bell-icon"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                  4
                </span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
                  <h3 className="px-4 py-2 font-semibold border-b">Notifications</h3>
                  {notifications.map(notification => (
                    <div key={notification.id} className="px-4 py-3 hover:bg-gray-50">
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative user-menu-container">
              <button 
                className="profile-icon"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2">
                    <User size={16} />
                    Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2">
                    <Settings size={16} />
                    Settings
                  </button>
                  <button 
                    onClick={() => setShowSignOutModal(true)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-red-600"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-4 mb-6 overflow-x-auto pb-2">
          {timeFilters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setSelectedTimeFilter(index)}
              className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base whitespace-nowrap ${
                index === selectedTimeFilter ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
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
            value={currentStats.revenue.value}
            change={currentStats.revenue.change}
            period={currentPeriod.toLowerCase()}
          />
          <StatCard
            icon={<Users className="text-green-600" />}
            title="Total Customer"
            value={currentStats.customers.value}
            change={currentStats.customers.change}
            period={currentPeriod.toLowerCase()}
          />
          <StatCard
            icon={<ShoppingCart className="text-purple-600" />}
            title="Total Transaction"
            value={currentStats.transactions.value}
            change={currentStats.transactions.change}
            period={currentPeriod.toLowerCase()}
          />
          <StatCard
            icon={<Package className="text-orange-600" />}
            title="Total Product"
            value={currentStats.products.value}
            change={currentStats.products.change}
            period={currentPeriod.toLowerCase()}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
          <RevenueChart selectedTimeFilter={selectedTimeFilter} />
          <CustomerMap />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <TopTransactions />
          <TopProducts />
        </div>

        {/* Sign Out Modal */}
        {showSignOutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Are you sure you want to Sign Out?</h3>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowSignOutModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Yes, Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
