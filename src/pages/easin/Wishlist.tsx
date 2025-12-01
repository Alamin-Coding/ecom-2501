import { Icon } from "@iconify/react"
import { useGetProductsQuery } from "../../api/productApi"
import Button1 from "../../components/Button1"
import HeadingHomePage from "../../components/HeadingHomePage"
import Loading from "../../components/Loading"
import type { Product } from '../../types/index';
import { Eye } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import { removeWishlist } from "../../features/wishlist/wishlistSlice"


const Wishlist: React.FC = () => {
    const {wishList} = useSelector((state: RootState) => state.wishlist);
    // const catergoryList = wishList.map(item => item.category);
    const catergoryList = Array.from(new Set(wishList.map(item => item.category)))
      const { data:firstItems } = useGetProductsQuery({ limit: 2, skip:0, category: catergoryList[0] });
      const { data:secondItems } = useGetProductsQuery({ limit: 2, skip:0, category: catergoryList[1] });
      const { data:thirdItems } = useGetProductsQuery({ limit: 2, skip:0, category: catergoryList[2] });
      const { data:forthItems } = useGetProductsQuery({ limit: 2, skip:0, category: catergoryList[3] });

      console.log(catergoryList);
      



    
    


    // const dispatch = useDispatch();
    return (
        <section>
            <div className="container">
                <div>
                    <div className="flex items-center justify-between mb-15 mt-20">
                        <h2 className="text-xl font-poppins ">Wishlist 
                           <span className="ml-2">
                            (
                          {wishList.length}
                            )
                          </span> 
                        </h2>
                        <Button1>Move All To Bag</Button1>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div className="grid grid-cols-4 gap-x-7.5 gap-y-15">
                            {
                                wishList?.map((product) => {
                                    return (
                                        <ProductWishlist children={
                                            <Icon icon="bytesize:trash" width="32" height="32" />
                                        } key={product.id} product={product} deleteItem={true} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="flex items-start justify-between mt-20">
                    <HeadingHomePage headingAlign="left" subHeading="Just For You" />
                    <Button1>See All</Button1>
                </div>

                <div>

                </div>
                <div className="grid grid-cols-4 gap-x-7.5 gap-y-15">
                    {
                        catergoryList[0] &&
                        firstItems?.products.map((product) => {
                            return (
                                <ProductWishlist  children={
                                    <Eye/>
                                } key={product.id} product={product} deleteItem={false} />
                            )
                        })
                    }
                    {
                        catergoryList[1] &&
                        secondItems?.products.map((product) => {
                            return (
                                <ProductWishlist  children={
                                    <Eye/>
                                } key={product.id} product={product} deleteItem={false} />
                            )
                        })
                    }
                    {
                        catergoryList[2] &&
                        thirdItems?.products.map((product) => {
                            return (
                                <ProductWishlist  children={
                                    <Eye/>
                                } key={product.id} product={product} deleteItem={false} />
                            )
                        })
                    }
                    {
                        catergoryList[3] &&
                        forthItems?.products.map((product) => {
                            return (
                                <ProductWishlist  children={
                                    <Eye/>
                                } key={product.id} product={product} deleteItem={false} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Wishlist






interface ProductCardProps {
    product: Product;
    children: React.ReactNode;
    deleteItem?: boolean;
}

const ProductWishlist = ({ product, children, deleteItem=false }: ProductCardProps) => {
    const dispatch = useDispatch();
    return (
        <div className='max-w-[270px] font-poppins'>
            <div className='group relative  bg-secondary dark:bg-slate-400  cursor-pointer rounded-sm h-[250px] mb-4   overflow-hidden flex items-center justify-center py-9 px-10'>
                {/* Image */}
                {/* Wishlist and view icon */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button
                    {...deleteItem ? {onClick: () => dispatch(removeWishlist(product.id))} : null}
                    className="bg-white p-2 w-8.5 h-8.5 flex items-center justify-center  rounded-full shadow hover:bg-gray-100 transition">
                        {children}
                        
                    </button>

                </div>

                {/* Discount */}
                <span className="absolute top-3 left-3 bg-button2 text-white text-xs font-poppins  font-semibold px-3 py-1 rounded-sm">
                    -{product.discountPercentage}%
                </span>

                <img className='h-full' src={product.thumbnail} alt="image" />

                <button className='w-full text-center absolute bg-button p-2 text-white font-poppins transition-all duration-500 cursor-pointer rounded-b-sm opacity-100  bottom-0'>
                    Add To Cart
                </button>
            </div>


            {/* title */}
            <h2 className='font-medium mb-2'>
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