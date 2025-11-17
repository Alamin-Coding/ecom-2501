import { useGetProductsQuery } from "../../../api/productApi"
import Button2 from "../../Button2"
import HeadingHomePage from "../../HeadingHomePage"
import Loading from "../../Loading"
import ProductCard from "../../ProductCard"
import { Spinner } from "../../ui/spinner"

const BestSellProducts:React.FC = () => {
    const {data, isLoading} = useGetProductsQuery("")
  return (
     <section className="mb-[140px]">
        <div className="container">
            <div className="flex items-center justify-between">
                <HeadingHomePage subHeading="This Month" heading="Best Selling Products" headingAlign="left"/>

                {/* Right Buttons */}
                <Button2>View All</Button2>
            </div>

            <div>
                
                    {isLoading && <Loading/>}
                
            </div>

            {/* Grid Layout*/}
            <div className="grid grid-cols-4 gap-x-7.5 gap-y-15">
            {
                data?.products?.slice(0,4).map((product)=>{
                    return(
                    <ProductCard key={product.id} product={product}/>
                )})
            }
            </div>
        </div>
    </section>
    
  )
}

export default BestSellProducts