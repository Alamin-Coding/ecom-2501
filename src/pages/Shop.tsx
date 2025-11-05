import { useGetProductsQuery } from "../api/productApi"
import { CommonBreadcrumb } from "../components/CommonBreadcrumb"
import ProductCard from "../components/ProductCard"
import { Spinner } from "../components/ui/spinner";

const Shop: React.FC = () => {
  const { isLoading, data } = useGetProductsQuery('');

  return (
    <section>
      <div className="container min-h-screen">
        <CommonBreadcrumb className="mt-20 mb-12.5" />

        <div className="grid gap-20 justify-between grid-cols-[auto_1fr]">
          <div>
            <ul className="font-poppins space-y-4">
              <p className=" font-bold text-xl">Shop by Category</p>
              <li>Woman's Fashion</li>
              <li>Men's Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sport's & Outdoor</li>
              <li>Baby's & Toy's</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>

            <ul className="font-poppins space-y-4 mt-10">
              <p className="font-bold text-xl">Shop by Color</p>
              <li className="flex items-center gap-2.5"><div className="w-[11px] h-[11px] rounded-full bg-black"></div> Color 1</li>
              <li className="flex items-center gap-2.5"><div className="w-[11px] h-[11px] rounded-full bg-red-500"></div> Color 2</li>
              <li className="flex items-center gap-2.5"><div className="w-[11px] h-[11px] rounded-full bg-green-500"></div> Color 3</li>
            </ul>
          </div>

          <div>
            <div className="text-right max-w-40 ml-auto flex items-center justify-end gap-2.5 mb-7.5">Show: 
              <input type="text" className="border border-gray-500 px-10  max-w-24 rounded-sm"  />
            </div>

            {isLoading && <div className="flex items-center text-center justify-center gap-4 text-3xl max-w-[300px]"><Spinner className="size-8" /> Loading....</div>}


            <div className="items grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7.5 justify-between">
              {data?.products?.slice(0,6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>




        </div>



      </div>
    </section>
  )
}

export default Shop
