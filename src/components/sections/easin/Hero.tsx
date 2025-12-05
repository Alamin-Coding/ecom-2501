
import Slider from "../../Slider/Slider"
import { useGetCategoriesQuery } from "../../../api/categoriesApi"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { selectedCategory } from "../../../features/category/categorySlice"



const Hero = () => {
    const {data, isLoading} = useGetCategoriesQuery("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    if (isLoading) return 

    const handleFilter = (category:string)=> {
        dispatch(selectedCategory(category))
        navigate("/shop")
    }

    
  return (
    <section className="mb-[165px] ">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-3 lg:gap-11 items-center justify-between">
                {/* Left side */}
                <div className="hidden lg:block pr-4 border-r-2 pt-10 max-w-[250px]">
                    <ul className="space-y-4 font-poppins max-h-[344px] overflow-y-scroll">
                        {data?.map((category)=> <li className="cursor-pointer" onClick={()=> handleFilter(category.slug)} key={category.slug}>{category.name}</li>)}
                    </ul>
                </div>

                <div className="lg:hidden">
                    
                    <ul className="mt-5 font-poppins pb-6 flex gap-5 text-nowrap max-h-[344px] overflow-y-scroll">
                        {data?.map((category)=> <li className="cursor-pointer p-4 bg-gray-300 rounded-lg dark:text-black " onClick={()=> handleFilter(category.slug)} key={category.slug}>{category.name}</li>)}
                    </ul>
                    
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