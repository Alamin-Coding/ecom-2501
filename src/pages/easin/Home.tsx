import Services from "../../components/Services";
import Arrival from "../../components/sections/Arrival";
import BestSellProducts from "../../components/sections/BestSellProducts";
import BgCount from "../../components/sections/BgCount";
import Categories from "../../components/sections/Categories";
import ExploreProducts from "../../components/sections/ExploreProducts";
import FlashSale from "../../components/sections/FlashSale";
import Hero from "../../components/sections/Hero";

const Home: React.FC = () => {
	return (
		<div className="container">
			<Hero />

			<FlashSale />
			{/* Categories */}
			<Categories />

			{/* Best Selling */}
			<BestSellProducts />

			{/* Counter  */}
			<BgCount />

			{/* Products */}
			<ExploreProducts />

			{/* New Arrival Section */}
			<Arrival />

			{/* Service Section */}
			<Services />
		</div>
	);
};

export default Home;
