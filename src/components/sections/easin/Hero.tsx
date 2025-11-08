import { ChevronRight } from "lucide-react"
import { banner } from "../../../constant/constant"


const Hero:React.FC = () => {
  return (
    <section className="mb-[165px] ">
        <div className="container">
            <div className="grid grid-cols-[auto_1fr] gap-11 items-center justify-between">
                {/* Left side */}
                <div className="pr-4 border-r-2 pt-10 max-w-[250px]">
                    <ul className="space-y-4 font-poppins">
                        <li className="flex items-center justify-between gap-12.5">Woman's Fashion <span> <ChevronRight/> </span></li>
                        <li className="flex items-center justify-between gap-12.5">Men's Fashion <span> <ChevronRight/> </span></li>
                        <li>Electronics</li>
                        <li>Home & Lifestyle</li>
                        <li>Medicine</li>
                        <li>Sports & Outdoor</li>
                        <li>Baby’s & Toys</li>
                        <li>Groceries</li>
                        <li>Health & Beauty</li>
                    </ul>
                </div>

                {/* Right Slider */}
                <div className="w-[892px] pt-10">

                    <div >
                    {/* Here will be slider */}
                    <img  src={banner} className="w-[892px] h-[344px]" alt="image" />
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero