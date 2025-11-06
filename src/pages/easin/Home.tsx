import { Link } from "react-router"
import { useGetProductsQuery } from "../../api/productApi"
import HeadingHomePage from "../../components/HeadingHomePage"
import Services from "../../components/Services"
import { arrival_1, arrival_2, arrival_4 } from "../../constant/constant"
import type { Product } from "../../types"


const Home: React.FC = () => {
    const { data } = useGetProductsQuery('');


    return (
        <div className="container">


            <HeadingHomePage subHeading="Featured" heading="New Arrival" />
            {/* Main Grid */}
            <div className="grid grid-cols-2  gap-7.5 h-[600px] items-center justify-between">


                {/* Left Column */}
                <div className="bg-black relative flex items-end justify-end  h-[600px]">
                    <div className="rounded-sm overflow-hidden">
                        <img src={arrival_1} alt="image" className="rounded-sm" />
                    </div>

                    <div className="absolute text-white max-w-[242px] space-y-4 font-poppins left-8 bottom-8">
                        <h2 className="text-[24px] font-inter font-semibold">Play Station 5</h2>
                        <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
                        <Link className="underline underline-offset-5" to={"/shop"}> Shop Now</Link>
                    </div>
                </div>


                {/* Right Grid */}
                <div className="grid grid-cols-12 gap-8 items-center">

                    {/* Right Top */}
                    <div className="h-[284px] relative flex items-end justify-end bg-black col-span-12">
                        <img src={arrival_2} alt="image" />
                        <div className="absolute text-white max-w-[255px] space-y-4 font-poppins left-6 bottom-6">
                            <h2 className="text-[24px] font-inter font-semibold">Women's Collection</h2>
                            <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
                            <Link className="underline underline-offset-5" to={"/shop"}> Shop Now</Link>
                        </div>
                    </div>

                    {/* Right Bottom left */}
                    <div className="h-[284px] relative flex items-center justify-center bg-black col-span-6">
                        <img src={arrival_4} alt="image" />
                        <div className="absolute text-white max-w-[190px] space-y-2 font-poppins left-6 bottom-6">
                            <h2 className="text-[24px] font-inter tracking-[2px] leading-6  font-semibold">Speaker</h2>
                            <p className="text-sm">Black and White version </p>
                            <Link className="underline underline-offset-5" to={"/shop"}> Shop Now</Link>
                        </div>
                    </div>

                    {/* Right Bottom right */}
                    <div className="h-[284px] relative flex items-center justify-center bg-black col-span-6">
                        <img src={arrival_4} alt="image" />
                        <div className="absolute text-white max-w-[190px] space-y-2 font-poppins left-6 bottom-6">
                            <h2 className="text-[24px] font-inter tracking-[2px] leading-6 font-semibold">Perfume</h2>
                            <p className="text-sm">Black and White version </p>
                            <Link className="underline underline-offset-5" to={"/shop"}> Shop Now</Link>
                        </div>
                    </div>

                </div>
            </div>
            <Services />

        </div>
    )
}

export default Home