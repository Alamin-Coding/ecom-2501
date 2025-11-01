import { SlashIcon, Store } from "lucide-react"
import { Icon } from "@iconify/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb"
import { about_image } from "../constant/constant"
import { nanoid } from 'nanoid';

const About: React.FC = () => {
  const info = [
    {
      id: nanoid(),
      icon: <Icon icon="iconoir:shop-four-tiles" width="24" height="24" />,
      price:10.5,
      description: "Sellers active in our site"
    },
    {
      id: nanoid(),
      icon: <Icon icon="streamline:dollar-coin" width="14" height="14" />,
      price:10.5,
      description: "Monthly product sell"
    },
    {
      id: nanoid(),
      icon: <Icon icon="fluent:shopping-bag-16-regular" width="16" height="16" />,
      price:10.5,
      description: "Sellers active in our site"
    },
    {
      id: nanoid(),
      icon: <Icon icon="healthicons:money-bag-outline" width="48" height="48" />,
      price:10.5,
      description: "Sellers active in our site"
    },
  ]
  
  

  return (
    <section className="pt-20">
      <div className="container">
        <div className="about_container">
          <div>
            {/* Breadcrumb from Shadecn UI */}

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="text-[14px] ">
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/about">About</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="mt-10.5 flex items-center justify-between gap-19 mb-35">
            {/* About Text */}
            <div className=" max-w-[505px]">

              <h1 className="font-inter text-[54px] mb-10 font-semibold">Our Story</h1>
              <p className="font-poppins text-base leading-[26px]">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                <br /><br />
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
              </p>
            </div>

            {/*About Image  */}
            <div className="about_image">
              <img src={about_image} alt="image" />
            </div>

          </div>



          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About