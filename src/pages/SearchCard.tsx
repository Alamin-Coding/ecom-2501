import React, { useState } from 'react';
import { Home, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  features: string[];
  price: number;
  originalPrice: number | null;
  savings: number | null;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full">
      {product.savings && (
        <div className="mb-4">
          <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Save: {product.savings}৳
          </span>
        </div>
      )}
      
      <div className="flex-1 flex items-center justify-center mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="max-h-48 w-auto object-contain"
        />
      </div>
      
      <div className="mt-auto">
        <h3 className="text-gray-900 font-medium text-sm mb-3 min-h-[2.5rem]">
          {product.name}
        </h3>
        
        <ul className="space-y-1 mb-4">
          {product.features.map((feature, index) => (
            <li key={index} className="text-gray-600 text-xs flex items-start">
              <span className="mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-red-600 font-bold text-xl">
            {product.price.toLocaleString()}৳
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              {product.originalPrice.toLocaleString()}৳
            </span>
          )}
        </div>
        
        <button className="w-full bg-white border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
          <ShoppingCart size={16} />
          Buy Now
        </button>
      </div>
    </div>
  );
};

const AppleProductSearch: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [itemsToShow, setItemsToShow] = useState<number>(20);

  const categories: string[] = [
    'Apple Headphone',
    'Apple Keyboard',
    'Apple Mouse',
    'Apple MacBook',
    'Apple iPhone',
    'Apple AirPods',
    'Apple iPad',
    'Apple Earpods',
    'Apple Watch',
    'Apple iMac'
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Apple Lightning to 3.5mm Headphone Jack Adapter #MWX62ZM/A',
      image: 'https://images.unsplash.com/photo-1625428299443-e8d6e8d13f4c?w=400&h=400&fit=crop',
      features: [
        'Lightning to 3.5mm Headphone',
        '8-Pin Lightning Connection',
        '3.5mm Stereo Mini Plug',
        'For iOS 10 or Later Devices'
      ],
      price: 1250,
      originalPrice: 1750,
      savings: 500
    },
    {
      id: 2,
      name: 'Apple USB-C to Lightning Cable 1M (A2561)',
      image: 'https://images.unsplash.com/photo-1591290619762-eba0f5a87a90?w=400&h=400&fit=crop',
      features: [
        'Connectors: Type-C to Lightning',
        'Reversible Design Makes Charging Easier',
        'Compatible with iPhones, iPads & MacBooks',
        'Length: 1 meter'
      ],
      price: 1990,
      originalPrice: null,
      savings: null
    },
    {
      id: 3,
      name: 'Apple USB-C 60W Cable 1M (A2795)',
      image: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=400&h=400&fit=crop',
      features: [
        'Connectors: USB Type-C',
        'Power Output: 60W',
        'Length: 1 meter, Color: White',
        'Compatible with iPhones, iPads & MacBooks'
      ],
      price: 2490,
      originalPrice: null,
      savings: null
    },
    {
      id: 4,
      name: 'Apple A2347 20W USB Type-C Power Adapter',
      image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400&h=400&fit=crop',
      features: [
        'Power Output: 20 watts',
        'Connector Type: USB Type-C',
        'High-quality charger for iPhone, iPad',
        'Compact & Lightweight'
      ],
      price: 2324,
      originalPrice: 2499,
      savings: 175
    },
    {
      id: 5,
      name: 'Apple 20W USB Type-C Power Adapter',
      image: 'https://images.unsplash.com/photo-1564982259155-84f5db7e2b6e?w=400&h=400&fit=crop',
      features: [
        'Output Type: 20W',
        'Compatible with Type-C-enabled Apple devices',
        'Ultra-compact design, Efficient charging',
        'Special Features: Folding Pins, Quick Charge Technology'
      ],
      price: 2339,
      originalPrice: 2599,
      savings: 260
    }
  ];

  const handleCategoryClick = (category: string): void => {
    setSelectedCategory(category);
  };

  const handleItemsChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setItemsToShow(Number(event.target.value));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Home size={16} />
            <span>/</span>
            <span>Search</span>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Search - app</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show:</span>
            <select
              value={itemsToShow}
              onChange={handleItemsChange}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={20}>20</option>
              <option value={40}>40</option>
              <option value={60}>60</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppleProductSearch;