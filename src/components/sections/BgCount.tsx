import { useGetProductsQuery } from "@/api/productApi";
import bg_countedown from "@/assets/bg-home-counter.jpg";
import Button2 from "@/components/Button2";
import Countdown from "@/components/CountDown";

const BgCount: React.FC = () => {
	const { data } = useGetProductsQuery();
	const bgStyle = {
		backgroundImage: `url(${bg_countedown})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		height: "500px",
	};

	return (
		<section className="mb-17.5">
			<div className="container ">
				<div className="py-2 lg:py-17.5 px-14 overflow-hidden" style={bgStyle}>
					{/* Optional overlay or text */}
					<div className=" flex-col lg:grid lg:grid-cols-2 justify-between gap-13 overflow-hidden">
						{/* Left Side */}
						<div className="space-y-6 lg:space-y-8">
							<h3 className="text-[#00FF66] font-poppins font-semibold">
								Categories
							</h3>
							<h2 className="font-inter font-semibold text-4xl lg:text-5xl leading-15 max-w-[443px] text-white tracking-wide">
								{data?.products[9].title}
							</h2>
							<Countdown targetDate="2025-12-31T23:59:59" />
							<Button2
								to={`/product/details/${data?.products[9].id}`}
								className="!bg-[#00FF66] text-slate-300"
							>
								Buy Now
							</Button2>
						</div>

						{/* Right side */}
						<div className="flex items-center justify-center overflow-hidden">
							<div className="w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] overflow-hidden">
								<img
									className="w-full h-full"
									src={data?.products[9]?.thumbnail}
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BgCount;
