import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('products');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: 'Jedel W926 Wireless Mouse',
      price: 550,
      image: '🖱️'
    },
    {
      id: 2,
      name: 'Jedel M11 Wireless Mouse',
      price: 550,
      image: '🖱️'
    },
    {
      id: 3,
      name: 'Joyroom JR-EC06 In-Ear Metal Type-C Wired Earphone',
      price: 590,
      image: '🎧'
    },
    {
      id: 4,
      name: 'Jedel K26 Wired Keyboard',
      price: 395,
      originalPrice: 600,
      image: '⌨️'
    },
    {
      id: 5,
      name: 'Joyroom S-A40 Colorful Series 1M 30W Type-C to 3-in-1 Fast Charging Cable',
      price: 780,
      image: '🔌'
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      {/* Header with Search Button for Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setShowMobileSearch(true)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Search Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
              <button
                onClick={() => {
                  setShowMobileSearch(false);
                  setSearchTerm('');
                  setIsOpen(false);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex-1 flex items-center bg-gray-100 rounded-lg px-4 py-2">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                  }}
                  autoFocus
                  className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                />
                <Search className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Mobile Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('products')}
                className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'products'
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-600'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'categories'
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-600'
                }`}
              >
                Categories
              </button>
            </div>

            {/* Mobile Results */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === 'products' && (
                <>
                  {filteredProducts.length > 0 ? (
                    <>
                      {filteredProducts.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center gap-4 px-4 py-3 border-b border-gray-100"
                        >
                          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl flex-shrink-0">
                            {product.image}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm text-gray-900 font-normal mb-1 line-clamp-2">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="text-red-500 font-semibold">
                                {product.price}৳
                              </span>
                              {product.originalPrice && (
                                <span className="text-gray-400 text-sm line-through">
                                  {product.originalPrice}৳
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="px-4 py-3 text-center border-t border-gray-100">
                        <button className="text-red-500 text-sm font-medium">
                          See all results
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="px-4 py-8 text-center text-gray-500">
                      No products found
                    </div>
                  )}
                </>
              )}

              {activeTab === 'categories' && (
                <div className="px-4 py-8 text-center text-gray-500">
                 
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Search */}
      <div className="hidden md:block ">
        <div className="w-[243px] h-[38px] mx-auto" ref={searchRef}>
          <div className="relative">
            {/* Search Input */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center px-4 py-3">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                />
                <Search className="w-5 h-5 text-black " />
              </div>
            </div>

            {/* Dropdown Results */}
            {isOpen && (
              <div className="absolute w-[700px] translate-x-[-230px] top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-1000">
                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('products')}
                    className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                      activeTab === 'products'
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Products
                  </button>
                  <button
                    onClick={() => setActiveTab('categories')}
                    className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                      activeTab === 'categories'
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Categories
                  </button>
                </div>

                {/* Product Results */}
                {activeTab === 'products' && (
                  <div className="max-h-96 overflow-y-auto">
                    {filteredProducts.length > 0 ? (
                      <>
                        {filteredProducts.map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                          >
                            {/* Product Image */}
                            <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl flex-shrink-0">
                              {product.image}
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm text-gray-900 font-normal mb-1 line-clamp-2">
                                {product.name}
                              </h3>
                              <div className="flex items-center gap-2">
                                <span className="text-red-500 font-semibold">
                                  {product.price}৳
                                </span>
                                {product.originalPrice && (
                                  <span className="text-gray-400 text-sm line-through">
                                    {product.originalPrice}৳
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        {/* See All Results */}
                        <div className="px-4 py-3 text-center border-t border-gray-100">
                          <button className="text-red-500 text-sm font-medium hover:underline">
                            See all results
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="px-4 py-8 text-center text-gray-500">
                        No products found
                      </div>
                    )}
                  </div>
                )}

                {/* Categories Tab */}
                {activeTab === 'categories' && (
                  <div className="px-4 py-8 text-center text-gray-500">
                    
                  </div>
                )}
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}