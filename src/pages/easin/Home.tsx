

import Services from "../../components/Services"
import Arrival from "../../components/sections/easin/Arrival";
import BgCount from "../../components/sections/easin/BgCount";
import ExploreProducts from "../../components/sections/easin/ExploreProducts";



const Home: React.FC = () => {


    return (
        <div className="container">
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