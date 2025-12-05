import { useState } from "react";
import { useGetCategoriesQuery } from "../api/categoriesApi";
import { useGetProductsQuery } from "../api/productApi"
import { CommonBreadcrumb } from "../components/CommonBreadcrumb"
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard"
import { Spinner } from "../components/ui/spinner";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { selectedCategory } from "../features/category/categorySlice";
import Button1 from "../components/Button1";

const Shop: React.FC = () => {
  const [limit, setLimit] = useState(6)
  const [skip, setSkip] = useState(0)
  const minLimit = limit < 1 ? 1 : limit
  const { value } = useSelector((state: RootState) => state.category)
  const { isLoading,isFetching, data } = useGetProductsQuery({ limit: minLimit, skip, category: value });
  const { data: categoryData } = useGetCategoriesQuery("")

  const dispatch = useDispatch();



const handlePrevSkip = ()=> {
  setSkip(skip-6)
}

const handleNextSkip = ()=> {
  setSkip(skip+6)
}






  return (
    <section>
      <div className="container min-h-screen">
        <CommonBreadcrumb className="mt-20 mb-12.5" />

        <div className="grid gap-20 justify-between grid-cols-[auto_1fr]">
          <div>
            <ul className="font-poppins space-y-4">
              <p className=" font-bold text-xl">Shop by Category</p>
              {
                categoryData?.map((item) => <li onClick={() => dispatch(selectedCategory(item.slug))}
                  className={`cursor-pointer ${item.slug === value ? "text-button2" : ""}`}
                  key={item.slug}>
                  {item.name}
                </li>)
              }
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
              <input
                type="text"
                className="border
                border-gray-500 px-3 text-center max-w-24 rounded-sm"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
              />
            </div>

            {isLoading && <Loading />}

            <div className="items grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7.5 justify-between">
              {data?.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex gap-5 justify-center mt-10">
              <button className="px-5 py-3 border border-button2 cursor-pointer" onClick={handlePrevSkip} >
                {isFetching ? "Fetching" : "Prev"}
              </button>
              <button className="px-5 py-3 border border-button2 cursor-pointer" onClick={handleNextSkip}>
                {isFetching? "Fetching" : "Next"}
              </button>
            </div>
          </div>
        </div>



      </div>
    </section>
  )
}

export default Shop
