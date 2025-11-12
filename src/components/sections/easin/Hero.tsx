import { ChevronRight } from "lucide-react"
import { banner } from "../../../constant/constant"
import Slider from "../../Slider/Slider"
import { useGetCategoriesQuery } from "../../../api/categoriesApi"



const Hero:React.FC = () => {
    const {data, isLoading} = useGetCategoriesQuery("")

    if (isLoading) return 


    
  return (
    <section className="mb-[165px] ">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-3 lg:gap-11 items-center justify-between">
                {/* Left side */}
                <div className="hidden lg:block pr-4 border-r-2 pt-10 max-w-[250px]">
                    <ul className="space-y-4 font-poppins max-h-[344px] overflow-y-scroll">
                        {data?.map((category)=> <li key={category.slug}>{category.name}</li>)}
                    </ul>
                </div>

                <div className="lg:hidden">
                    Category
                </div>

                {/* Right Slider */}
                <div className="w-[892px] pt-10">

                    <div >
                    {/* Here will be slider */}
                    {/* <img  src={banner} className="w-[892px] h-[344px]" alt="image" /> */}
                    <Slider/>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero