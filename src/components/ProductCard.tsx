import { Heart, Eye } from 'lucide-react';
import type { Product } from '../types';


interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden">
      {/* Product Image Section */}
      <div className="relative bg-gray-100 p-6">
        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded">
          {product.discountPercentage}%
        </div>
        
        {/* Action Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50 transition">
            <Heart className="w-5 h-5" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50 transition">
            <Eye className="w-5 h-5" />
          </button>
        </div>
        
        {/* Product Image */}
        <img 
          src={product.thumbnail}
          alt="AK-900 Wired Keyboard" 
          className="w-full h-48 object-contain"
        />
      </div>
      
      {/* Add To Cart Button */}
      <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition">
        Add To Cart
      </button>
      
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {product.description}
        </h3>
        
        {/* Pricing */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl font-bold text-red-500">${product.price}</span>
          <span className="text-lg text-gray-400 line-through">${product.price}</span>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({length:Math.round(product.rating)}).map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 fill-yellow-400"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <svg
              className="w-5 h-5 fill-gray-300"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>
          <span className="text-gray-500 text-sm">({product.rating})</span>
        </div>
      </div>
    </div>
  );
}