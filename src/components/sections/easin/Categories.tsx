import { ArrowLeft, ArrowRight } from "lucide-react"
import HeadingHomePage from "../../HeadingHomePage"
import { nanoid } from "nanoid"
import { camera, computer, gameconsole, headphone, phone, watch } from "../../../constant/constant"
import { useGetCategoriesQuery } from "../../../api/categoriesApi"
import SvgIcon from "../../SvgIcon"
import Slider from "react-slick"
import { NextArrow, PrevArrow } from "../../Arrows"
import { useRef } from "react"

interface Categories {
    id: string
    title: string
    category: string
    icon: string
}


const Categories: React.FC = () => {
    const categories: Categories[] = [
        {
            id: nanoid(),
            title: "Phones",
            category: 'phone',
            icon: phone,
        },
        {
            id: nanoid(),
            title: "Computers",
            category: 'computer',
            icon: computer,
        },
        {
            id: nanoid(),
            title: "SmartWatch",
            category: 'watch',
            icon: watch,
        },
        {
            id: nanoid(),
            title: "Camera",
            category: 'camera',
            icon: camera,
        },
        {
            id: nanoid(),
            title: "HeadPhones",
            category: 'headphone',
            icon: headphone,
        },
        {
            id: nanoid(),
            title: "Gamepads",
            category: 'gamepads',
            icon: gameconsole,
        },
    ]

    const sliderRef = useRef(null);
    

    const { isFetching, isLoading, data, isError } = useGetCategoriesQuery('')

    isLoading && <p>Loading....</p>
    isFetching && <p>Fetching....</p>
    isError && <p>Something went wrong</p>
  const handleClickPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const handleClickNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); 
    }
  };

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
    }



    return (
        <section className=" pt-20 pb-17.5  mb-17.5 border-y-2">
            <div className="container">
                <div className="flex items-center justify-between">
                    <HeadingHomePage subHeading="Categories" heading="Browse by Category" headingAlign="left" />

                    {/* Right Buttons */}
                    <div className="flex items-center gap-2">
                        <div onClick={handleClickPrev} className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5">
                            <ArrowLeft />

                        </div>
                        <div  onClick={handleClickNext} className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5">
                            <ArrowRight />

                        </div>

                    </div>
                </div>

                <Slider {...settings} ref={sliderRef} >
                    {
                        data?.map((category) => {
                            return (
                                <div key={category.slug} className="px-3">
                                    <div title={category.name} className="category_item py-6 transition-all duration-400 group cursor-pointer px-10 border border-gray-500 space-y-4 flex flex-col items-center justify-center hover:bg-button2">
                                        <div className="svg_hover">
                                            <SvgIcon />
                                        </div>
                                        <p className="group-hover:text-white line-clamp-1" >
                                            {category.name}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default Categories