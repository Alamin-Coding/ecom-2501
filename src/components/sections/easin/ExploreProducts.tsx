import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGetProductsQuery } from "../../../api/productApi";
import HeadingHomePage from "../../HeadingHomePage"
import ProductCard from "../../ProductCard";
import { Spinner } from "../../ui/spinner";


const ExploreProducts:React.FC = () => {
    const { data, isLoading } = useGetProductsQuery('');
  return (
    <section className="mb-[168px]">
        <div className="container">
            <div className="flex items-center justify-between">
                <HeadingHomePage subHeading="Our Products" heading="Explore Our Products" headingAlign="left"/>

                {/* Right Buttons */}
                <div className="flex items-center gap-2">
                <div className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5"> 
                    <ArrowLeft/>
                    
                    </div>
                <div className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5"> 
                    <ArrowRight/>
                    
                    </div>
                </div>
            </div>

            <div>
                
                    {isLoading && <div className="flex items-center mx-auto text-gray-400 text-center justify-center gap-4 text-3xl max-w-[300px]"><Spinner className="size-8" /> Loading....</div>}
                
            </div>

            {/* Grid Layout*/}
            <div className="grid grid-cols-4 gap-x-7.5 gap-y-15">
            {
                data?.products?.slice(0,8).map((product)=>{
                    return(
                    <ProductCard key={product.id} product={product}/>
                )})
            }
            </div>
        </div>
    </section>
  )
}

export default ExploreProducts