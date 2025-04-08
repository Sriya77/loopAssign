import React from 'react';

const products = [
  {
    name: 'Denim Jacket with White Feathers',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=200&h=200',
    sales: '240+',
  },
  {
    name: 'Black Leather Jacket',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=200&h=200',
    sales: '180+',
  },
];

export default function TopProducts() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-6">
        <div>
          <h3 className="text-lg font-semibold">Top Product</h3>
          <p className="text-sm text-gray-500">Top 5 best selling products</p>
        </div>
        <button className="text-blue-600 text-sm">View more</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="relative group">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-center text-white p-4">
                <p className="font-medium text-sm sm:text-base">{product.name}</p>
                <p className="text-xs sm:text-sm mt-1">Sales: {product.sales}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}