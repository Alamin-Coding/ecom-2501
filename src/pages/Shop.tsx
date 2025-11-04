import { useGetProductsQuery } from "../api/productApi"
import { CommonBreadcrumb } from "../components/CommonBreadcrumb"
import ProductCard from "../components/ProductCard"
import { Spinner } from "../components/ui/spinner";

const Shop: React.FC = () => {
    const { isLoading, data } = useGetProductsQuery('');
    
  return (
    <section>
      <div className="container min-h-screen">
        <CommonBreadcrumb className="mt-20 mb-12.5"/>
        {isLoading && <div className="flex items-center text-center justify-center gap-4 text-3xl max-w-[300px]"><Spinner className="size-8"/> Loading....</div>}
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
