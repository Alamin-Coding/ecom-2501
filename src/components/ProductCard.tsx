import { Heart, Eye } from 'lucide-react';
import type { Product } from '../types';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../features/wishlist/wishlistSlice';
import type { RootState } from '../store/store';
import { addTocart } from '../features/cart/cartSlice';


interface ProductCardProps {
  product: Product;
}




export default function ProductCard({ product }: ProductCardProps) {
  const {wishList} = useSelector((state: RootState) => state.wishlist);
  const {cart} = useSelector((state: RootState) => state.cart);
   const isExist = wishList.find(item => item.id === product.id);
   const isExistCart = cart.find(item => item.id === product.id);
   const user = {
    id: 1,
    name: "John Doe",
    password: "password123",
    email:  "admin@example.com" 
  };
   const navigate = useNavigate();

   const handleAddToWishlist = (product:Product) => {
    if(!user){
      alert("Please login to add items to wishlist");
      navigate('/login');
      return;
    }else {
      dispatch(addToWishList(product));
    }
    }
   const handleCartAdd = (product:Product) => {
    if(!user){
      alert("Please login to add items to wishlist");
      navigate('/login');
      return;
    }else {
      dispatch(addTocart(product));
    }
    }

  
   
  const navigation = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className='max-w-[270px] font-poppins'>
      <div className='group relative  bg-secondary dark:bg-slate-400  cursor-pointer rounded-sm h-[250px] mb-4   overflow-hidden flex items-center justify-center py-9 px-10'>
        {/* Image */}
        {/* Wishlist and view icon */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button onClick={()=> handleAddToWishlist(product)} className={`${isExist? "bg-red-100": "bg-white"} p-2 rounded-full shadow hover:bg-gray-100 transition`}>
            
            {!isExist?<Heart className="w-5 h-5 text-gray-600" />:
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path className='fill-red-600' d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"></path></svg>
            }
          </button>
          <button onClick={()=> navigation(`/product/details/${product.id}`)} className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Discount */}
        <span className="absolute top-3 left-3 bg-button2 text-white text-xs font-poppins  font-semibold px-3 py-1 rounded-sm">
          -{product.discountPercentage}%
        </span>

        <img className='h-full' src={product.thumbnail} alt="image" />


        <button disabled={isExistCart? true: false} onClick={()=> handleCartAdd(product)} className={`disabled:cursor-not-allowed w-full text-center absolute bg-button p-2 text-white font-poppins transition-all duration-500 cursor-pointer rounded-b-sm opacity-0 group-hover:opacity-100 bottom-0 ${isExistCart? "bg-green-500": "bg-button"}`}>
          {isExistCart? "Added to Cart" : "Add to Cart"}
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