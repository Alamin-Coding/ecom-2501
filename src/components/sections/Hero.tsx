import Slider from "@/components/Slider/Slider";
import { useGetCategoriesQuery } from "@/api/categoriesApi";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { selectedCategory } from "@/features/category/categorySlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
	const { data, isLoading } = useGetCategoriesQuery();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	if (isLoading) return;

	const handleFilter = (category: string) => {
		dispatch(selectedCategory(category));
		navigate("/shop");
	};

	return (
		<section className="mb-[165px] ">
			<div className="container">
				<div className="grid lg:flex grid-cols-1 lg:grid-cols-[auto_1fr] gap-3 lg:gap-11 items-center justify-between">
					{/* Left side */}
					<div className="hidden lg:block pr-4 border-r-2 pt-10 max-w-[250px]">
						<ul className="space-y-4 font-poppins max-h-[344px] overflow-y-scroll">
							{data?.map((category) => (
								<li
									className="cursor-pointer"
									onClick={() => handleFilter(category.slug)}
									key={category.slug}
								>
									{category.name}
								</li>
							))}
						</ul>
					</div>

              {/* Mobile & Tablet */}
	<div className="block lg:hidden w-full mt-5">
		<Swiper
                      spaceBetween={20}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                    >
                      {data?.map((category) => (
				<SwiperSlide
					key={category.slug}
					className="!w-auto"
				>
					<button
						className="cursor-pointer p-2 sm:p-3 md:p-4 bg-gray-300 rounded-lg dark:text-black text-sm sm:text-base md:text-base whitespace-nowrap"
						onClick={() => handleFilter(category.slug)}
					>
						{category.name}
					</button>
				</SwiperSlide>
			))}
                    </Swiper>
	</div>

					

					{/* Right Slider */}
					<Link to={"/shop"} className="w-[892px] pt-10">
						<div>
							<Slider />
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
