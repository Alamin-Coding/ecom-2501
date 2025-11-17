import { Link } from "react-router"
import HeadingHomePage from "../../HeadingHomePage"
import { useGetProductsQuery } from "../../../api/productApi"


const Arrival: React.FC = () => {
    const { data, isLoading } = useGetProductsQuery("")

    if (isLoading) return

    const newArival = (data?.products ?? []).slice().sort((a, b) => {
        return b.id - a.id
    }).slice(0, 4)
    return (

        <section>
            <HeadingHomePage subHeading="Featured" heading="New Arrival" />
            {/* Main Grid */}
            <div className="grid grid-cols-2  gap-7.5 h-[600px] items-center justify-between">


                {/* Left Column */}
                <div className="bg-black dark:bg-slate-400 relative flex items-end rounded-sm overflow-hidden justify-end  h-[600px]">
                    <div className="h-full w-full">
                        <img src={newArival[0].thumbnail} alt="image" className="rounded-sm h-full w-full" />
                    </div>

                    <div className="absolute text-white max-w-[242px] space-y-4 font-poppins left-8 bottom-8">
                        <h2 className="text-[24px] font-inter font-semibold">{newArival[0].title}</h2>
                        <p className="text-sm">{newArival[0].description}</p>
                        <Link className="underline underline-offset-5" to={"/shop"}> Shop Now</Link>
                    </div>
                </div>


                {/* Right Grid */}
                <div className="grid grid-cols-12 gap-8 items-center">

                    {/* Right Top */}
                    <div className="h-[284px] relative flex rounded-sm overflow-hidden dark:bg-slate-400 items-end justify-end bg-black col-span-12">
                        <img src={newArival[1].thumbnail} alt="image" className="h-full w-full" />
                        <div className="absolute text-white max-w-[255px] space-y-4 font-poppins left-6 bottom-6">
                            <h2 className="text-[24px] font-inter font-semibold">{newArival[1].title}</h2>
                            <p className="text-sm">{newArival[1].description}</p>
                            <Link className="underline underline-offset-5" to={"/shop"}> Shop Now</Link>
                        </div>
                    </div>

                    {/* Right Bottom left */}
                    <div className="h-[284px] relative flex rounded-sm overflow-hidden dark:bg-slate-400 items-center justify-center bg-black col-span-6">
                        <img src={newArival[2]?.thumbnail} alt="image" />
                        <div className="absolute text-white max-w-[190px] space-y-2 font-poppins left-6 bottom-6">
                            <h2 className="text-[24px] font-inter tracking-[2px] leading-6  font-semibold">{newArival[2].title}</h2>
                            <p className="text-sm">{newArival[2].description} </p>
                            <Link className="underline underline-offset-5" to={"/shop"}> Shop Now</Link>
                        </div>
                    </div>

                    {/* Right Bottom right */}
                    <div className="h-[284px] relative flex rounded-sm overflow-hidden dark:bg-slate-400 items-center justify-center bg-black col-span-6">
                        <img src={newArival[3].thumbnail} alt="image" />
                        <div className="absolute text-white max-w-[190px] space-y-2 font-poppins left-6 bottom-6">
                            <h2 className="text-[24px] font-inter tracking-[2px] leading-6 font-semibold">{newArival[3].title}</h2>
                            <p className="text-sm">{newArival[3].description} </p>
                            <Link className="underline underline-offset-5" to={"/shop"}> Shop Now</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Arrival