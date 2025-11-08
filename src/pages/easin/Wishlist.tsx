import { useGetProductsQuery } from "../../api/productApi"
import Button1 from "../../components/Button1"
import HeadingHomePage from "../../components/HeadingHomePage"
import Loading from "../../components/Loading"
import ProductCard from "../../components/ProductCard"
import { Spinner } from "../../components/ui/spinner"


const Wishlist:React.FC = () => {
    const {data, isLoading} = useGetProductsQuery('')
  return (
    <section>
        <div className="container">


            <div className="flex items-start justify-between">
                <HeadingHomePage headingAlign="left" subHeading="Just For You"/>
                <Button1>See All</Button1>
            </div>

            <div>

          {isLoading && <Loading/>}

        </div>
        <div className="grid grid-cols-4 gap-x-7.5 gap-y-15">
          {
            data?.products?.slice(0, 4).map((product) => {
              return (
                <ProductCard key={product.id} product={product} />
              )
            })
          }
        </div>
        </div>
    </section>
  )
}

export default Wishlist