import { Heart, Eye } from 'lucide-react';
import type { Product } from '../types';


interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (




    <div className='max-w-[270px] font-poppins'>
      <div className='group relative  bg-secondary dark:bg-slate-400  cursor-pointer rounded-sm h-[250px] mb-4   overflow-hidden flex items-center justify-center py-9 px-10'>
        {/* Image */}
        {/* Wishlist and view icon */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Discount */}
        <span className="absolute top-3 left-3 bg-button2 text-white text-xs font-poppins  font-semibold px-3 py-1 rounded-sm">
          -{product.discountPercentage}%
        </span>

        <img className='h-full' src={product.thumbnail} alt="image" />

        <button className='w-full text-center absolute bg-button p-2 text-white font-poppins transition-all duration-500 cursor-pointer rounded-b-sm opacity-0 group-hover:opacity-100 bottom-0'>
          Add To Cart
        </button>
      </div>


      {/* title */}
      <h2 className='font-medium mb-2 line-clamp-1' title={product.title}>
        {product.title}
      </h2>

      {/* Price */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-button2 font-medium ">${product.price}</span>
        <span className="text-gray-400 line-through text-sm">
          ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
        </span>
      </div>

      {/* Ratings */}
      <div className="flex items-center">
        <div className="flex  text-lg">
          {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
            <span className='text-yellow-400' key={i}>★</span>
          ))}
          {Array.from({ length: 5 - Math.round(product.rating) }).map((_, i) => (
            <span className='text-gray-400' key={i}>★</span>
          ))}
        </div>
        <span className="text-gray-600 text-sm ml-2">{product.rating}</span>
      </div>
    </div>

  );
}