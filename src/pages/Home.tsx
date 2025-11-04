import HeadingHomePage from "../components/HeadingHomePage"
import Services from "../components/Services"

const Home: React.FC = () => {
  return (
    <div className="container">
      <HeadingHomePage subHeading="Featured" heading="New Arrival"  />
      <Services/>
    
    </div>
  )
}

export default Home