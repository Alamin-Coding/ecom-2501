

import Services from "../../components/Services"
import Arrival from "../../components/sections/easin/Arrival";
import BestSellProducts from "../../components/sections/easin/BestSellProducts";
import BgCount from "../../components/sections/easin/BgCount";
import Categories from "../../components/sections/easin/Categories";
import ExploreProducts from "../../components/sections/easin/ExploreProducts";
import FlashSale from "../../components/sections/easin/FlashSale";
import Hero from "../../components/sections/easin/Hero";



const Home: React.FC = () => {


    return (
        <div className="container">

            <Hero/>

            <FlashSale/>
            {/* Categories */}
            <Categories/>

            {/* Best Selling */}
            <BestSellProducts/>

            {/* Counter  */}
            <BgCount/>

            {/* Products */}
            <ExploreProducts/>

            {/* New Arrival Section */}
            <Arrival/>

            {/* Service Section */}
            <Services />

        </div>
    )
}

export default Home