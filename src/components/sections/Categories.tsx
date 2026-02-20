import { ArrowLeft, ArrowRight } from "lucide-react";
import HeadingHomePage from "@/components/HeadingHomePage";
import { useGetCategoriesQuery } from "@/api/categoriesApi";
import SvgIcon from "@/components/SvgIcon";
import Slider from "react-slick";
import { useRef } from "react";
import { selectedCategory } from "@/features/category/categorySlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

interface Categories {
	id: string;
	title: string;
	category: string;
	icon: string;
}

const Categories: React.FC = () => {
	const sliderRef = useRef<any>(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { isFetching, isLoading, data, isError } = useGetCategoriesQuery();

	if (isLoading) return <p>Loading....</p>;
	if (isFetching) return <p>Fetching....</p>;
	if (isError) return <p>Something went wrong</p>;

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

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
	};

	const handleFilter = (category: string) => {
		dispatch(selectedCategory(category));
		navigate("/shop");
	};

	return (
		<section className=" pt-20 pb-17.5  mb-17.5 border-y-2">
			<div className="container">
				<div className="flex items-center justify-between">
					<HeadingHomePage
						subHeading="Categories"
						heading="Browse by Category"
						headingAlign="left"
					/>

					{/* Right Buttons */}
					<div className="flex items-center gap-2">
						<div
							onClick={handleClickPrev}
							className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5"
						>
							<ArrowLeft />
						</div>
						<div
							onClick={handleClickNext}
							className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5"
						>
							<ArrowRight />
						</div>
					</div>
				</div>

				<Slider {...settings} ref={sliderRef}>
					{data?.map((category) => {
						return (
							<div
								key={category.slug}
								className="px-3 "
								onClick={() => handleFilter(category.slug)}
							>
								<div
									title={category.name}
									className="category_item py-6 transition-all duration-400 group cursor-pointer px-10 border border-gray-500 space-y-4 flex flex-col items-center justify-center rounded-2xl hover:bg-button2 bg-transparent dark:bg-slate-800"
								>
									<div className="svg_hover">
										<SvgIcon/>
									</div>
									<p className="group-hover:text-white line-clamp-1">
										{category.name}
									</p>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
};

export default Categories;
