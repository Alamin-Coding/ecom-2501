import { useGetProductsQuery } from "../api/productApi"
import { CommonBreadcrumb } from "../components/CommonBreadcrumb"
import ProductCard from "../components/ProductCard"

const Shop: React.FC = () => {
    const { isLoading, data } = useGetProductsQuery('');
    
  return (
    <section>
      <div className="container">
        <CommonBreadcrumb />
        {isLoading && <p>Product Loading....</p>}
        <div className="grid grid-cols-[260px_1fr] gap-6">
            <div className="menu"></div>
            <div className="items grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
                {data?.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
