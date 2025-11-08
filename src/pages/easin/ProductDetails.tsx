import { Link } from "react-router"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../../components/ui/breadcrumb"
import { Heart, RefreshCw, SlashIcon, Truck } from "lucide-react"
import { detailed_1, detailed_2, detailed_3, detailed_4, detailedPic } from "../../constant/constant"
import { nanoid } from "nanoid"
import { useState } from "react"
import Button2 from "../../components/Button2"
import HeadingHomePage from "../../components/HeadingHomePage"
import { useGetProductsQuery } from "../../api/productApi"
import ProductCard from "../../components/ProductCard"
import { Spinner } from "../../components/ui/spinner"

type Size = {
  id: string;
  size: string;
}

const ProductDetails: React.FC = () => {

  const { data, isLoading } = useGetProductsQuery('')
  const size: Size[] = [
    {
      id: nanoid(),
      size: "XS"
    },
    {
      id: nanoid(),
      size: "S"
    },
    {
      id: nanoid(),
      size: "M"
    },
    {
      id: nanoid(),
      size: "L"
    },
    {
      id: nanoid(),
      size: "XL"
    }
  ]

  return (
    <section>
      <div className="container mt-20 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="text-[14px] ">
              <BreadcrumbLink >
                <Link to={"/account"}>Account</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink >
                <Link to={"/gaming"}>Gaming</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink >
                <Link to={"/gaming"}>Havic HV G-92 Gamepad</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Grid Layout */}
        <div className="mt-20 grid grid-cols-[1fr_auto] items-center gap-17.5 mb-[140px]">
          {/* Left Side images*/}
          <div className="max-w-[700] gap-7.5 grid grid-cols-[auto_1fr]">
            <div className="max-w-[170px] grid gap-y-4 grid-cols-1 ">
              <div className="bg-secondary flex items-center justify-center rounded-sm py-3 px-6">
                <img src={detailed_1} alt="image" />
              </div>
              <div className="bg-secondary flex items-center justify-center rounded-sm py-3 px-6">
                <img src={detailed_2} alt="image" />
              </div>
              <div className="bg-secondary flex items-center justify-center rounded-sm py-3 px-6">
                <img src={detailed_3} alt="image" />
              </div>
              <div className="bg-secondary flex items-center justify-center rounded-sm py-3 px-6">
                <img src={detailed_4} alt="image" />
              </div>
            </div>

            <div className="max-w-[500px] py-[142px] flex items-center justify-center bg-secondary rounded-sm px-[27px]">
              <img src={detailedPic} alt="image" />
            </div>

          </div>

          {/* Right Side text */}
          <div className="max-w-[400px]">
            <div className="space-y-4 border-b ">
              <h2 className="text-2xl font-semibold font-inter">Havic HV G-92 Gamepad</h2>
              {
                [1, 2, 3, 4].map((_, i) => (
                  <span className='text-yellow-400' key={i}>★</span>
                ))
              }
              <p className="mt-3">$192.00</p>
              <p className="mb-3 ">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

            </div>

            <p className="mt-7 flex items-center mb-6 gap-3">
              Colours:
              <div className="h-5 w-5 rounded-full bg-hoverButton"></div>
              <div className="h-5 w-5 rounded-full bg-hoverButton2"></div>
            </p>

            <p className="flex mb-6 items-center gap-6">
              Size :

              <div className="flex items-center justify-center gap-4" >

                {
                  size.map((i) => (
                    <div className="rounded-sm h-8 w-8 flex items-center border border-black hover:bg-button2 hover:text-white transition-all duration-300 cursor-pointer justify-center">
                      {i.size}
                    </div>
                  ))
                }
              </div>

            </p>

            <ProductActions />


          </div>
        </div>

        <HeadingHomePage subHeading="Related Items" headingAlign="left" />
        <div>

          {isLoading && <div className="flex items-center mx-auto text-gray-400 text-center justify-center gap-4 text-3xl max-w-[300px]"><Spinner className="size-8" /> Loading....</div>}

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

export default ProductDetails




const ProductActions = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      {/* Quantity and Buy Now */}
      <div className="flex items-center gap-2">
        <div className="flex border rounded-md overflow-hidden">
          <button
            onClick={decrement}
            className="px-3 py-2 text-lg hover:text-white cursor-pointer font-semibold hover:bg-button2"
          >
            −
          </button>
          <div className="px-4 py-2 border-x text-lg font-medium">{quantity}</div>
          <button
            onClick={increment}
            className="px-3 py-2 text-lg font-semibold  text-black cursor-pointer hover:text-white hover:bg-button2"
          >
            +
          </button>
        </div>

        <Button2 className="!py-2.5">Buy Now</Button2>

        <button className="p-2.5 border border-black  h-full rounded-md hover:bg-gray-100">
          <Heart className="w-6 h-6" />
        </button>
      </div>

      {/* Delivery Info */}
      <div className="border border-black rounded-sm mt-10 divide-y divide-black">
        {/* Free Delivery */}
        <div className="flex items-start gap-3 p-3">
          <Truck className="w-6 h-6 text-gray-700" />
          <div>
            <a
              href="#"
              className="font-semibold text-sm  hover:underline"
            >
              Free Delivery
            </a>
            <p className="text-sm text-gray-600 hover:underline">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>

        {/* Return Delivery */}
        <div className="flex items-start gap-3 p-3">
          <RefreshCw className="w-6 h-6 text-gray-700" />
          <div>
            <p className="font-semibold text-sm text-gray-800">
              Return Delivery
            </p>
            <p className="text-sm text-gray-600">
              Free 30 Days Delivery Returns.{" "}
              <a href="#" className="underline font-medium">
                Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


