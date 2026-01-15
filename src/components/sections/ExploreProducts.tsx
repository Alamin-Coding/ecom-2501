import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGetProductsQuery } from "@/api/productApi";
import HeadingHomePage from "@/components/HeadingHomePage";
import ProductCard from "@/components/ProductCard";
// import { Spinner } from "@/components/ui/spinner";
import Loading from "@/components/Loading";
import Slider from "react-slick";
import { useRef } from "react";

const ExploreProducts: React.FC = () => {
	const { data, isLoading } = useGetProductsQuery();

	const sliderRef = useRef<any>(null);

	const settings = {
		infinite: true,
		slidesToShow: 2,
		speed: 500,
		rows: 2,
		slidesPerRow: 2,
		autoplay: true,
	};

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
	return (
		<section className="mb-[168px]">
			<div className="container">
				<div className="flex items-center justify-between">
					<HeadingHomePage
						subHeading="Our Products"
						heading="Explore Our Products"
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

				<div>{isLoading && <Loading />}</div>

				{/* Grid Layout*/}
				<div className="grid grid-cols-4 gap-x-7.5 gap-y-15"></div>

				<div className="slider-container">
					<Slider {...settings} ref={sliderRef}>
						{data?.products?.map((product) => {
							return (
								<div key={product.id}>
									<ProductCard product={product} />
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default ExploreProducts;
