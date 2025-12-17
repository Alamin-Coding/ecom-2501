import  { useState } from 'react';
import { ShoppingCart, Star, Heart, Search } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  inStock: boolean;
}

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [cart, setCart] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: 'Wireless Earbuds Pro',
      category: 'electronics',
      price: 129.99,
      rating: 4.5,
      image: '🎧',
      description: 'Premium sound quality with active noise cancellation',
      inStock: true
    },
    {
      id: 2,
      name: 'Smart Watch Ultra',
      category: 'electronics',
      price: 399.99,
      rating: 4.8,
      image: '⌚',
      description: 'Advanced health tracking and fitness monitoring',
      inStock: true
    },
    {
      id: 3,
      name: 'Designer Sneakers',
      category: 'fashion',
      price: 179.99,
      rating: 4.6,
      image: '👟',
      description: 'Comfortable and stylish for everyday wear',
      inStock: true
    },
    {
      id: 4,
      name: 'Leather Messenger Bag',
      category: 'fashion',
      price: 249.99,
      rating: 4.7,
      image: '👜',
      description: 'Handcrafted genuine leather with vintage finish',
      inStock: false
    },
    {
      id: 5,
      name: 'Smart Home Hub',
      category: 'electronics',
      price: 149.99,
      rating: 4.4,
      image: '🏠',
      description: 'Control all your smart devices from one place',
      inStock: true
    },
    {
      id: 6,
      name: 'Yoga Mat Premium',
      category: 'sports',
      price: 89.99,
      rating: 4.9,
      image: '🧘',
      description: 'Eco-friendly, non-slip surface for all exercises',
      inStock: true
    },
    {
      id: 7,
      name: 'Portable Blender',
      category: 'home',
      price: 59.99,
      rating: 4.3,
      image: '🥤',
      description: 'Make smoothies anywhere with USB charging',
      inStock: true
    },
    {
      id: 8,
      name: 'Reading Lamp LED',
      category: 'home',
      price: 45.99,
      rating: 4.5,
      image: '💡',
      description: 'Adjustable brightness with eye-care technology',
      inStock: true
    },
    {
      id: 9,
      name: 'Running Shoes Elite',
      category: 'sports',
      price: 159.99,
      rating: 4.7,
      image: '🏃',
      description: 'Lightweight design with superior cushioning',
      inStock: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'sports', label: 'Sports' },
    { id: 'home', label: 'Home' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const addToCart = (id: number) => {
    setCart(prev => [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Premium Store
              </h1>
              <p className="text-sm text-gray-600 mt-1">Discover amazing products</p>
            </div>
            <div className="relative">
              <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <ShoppingCart size={20} />
                <span className="font-semibold">{cart.length}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:scale-105'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 h-64 flex items-center justify-center overflow-hidden">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
                >
                  <Heart
                    size={20}
                    className={favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </button>
                {!product.inStock && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                      product.inStock
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={18} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-400 font-medium">No products found</p>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;