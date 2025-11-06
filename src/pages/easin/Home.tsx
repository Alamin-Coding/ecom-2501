import { Link } from "react-router"
import { useGetProductsQuery } from "../../api/productApi"

import Services from "../../components/Services"
import Arrival from "../../components/sections/easin/Arrival";
import ExploreProducts from "../../components/sections/easin/ExploreProducts";



const Home: React.FC = () => {
    const { data } = useGetProductsQuery('');


    return (
        <div className="container">


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