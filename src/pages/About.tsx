import { SlashIcon, Store } from "lucide-react"
import { Icon } from "@iconify/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb"
import { about_image } from "../constant/constant"
import { nanoid } from 'nanoid';

const About: React.FC = () => {
  const info = [
    {
      id: nanoid(),
      icon: <Icon icon="iconoir:shop-four-tiles" width="40" height="40" />,
      total:10.5,
      description: "Sellers active in our site"
    },
    {
      id: nanoid(),
      icon: <Icon icon="streamline:dollar-coin" width="40" height="40" />,
      total:33,
      description: "Monthly product sell"
    },
    {
      id: nanoid(),
      icon: <Icon icon="fluent:shopping-bag-16-regular" width="40" height="40" />,
      total:45.5,
      description: "Customer active in our site"
    },
    {
      id: nanoid(),
      icon: <Icon icon="healthicons:money-bag-outline" width="40" height="40" />,
      total:25,
      description: "Anual gross sale in our site"
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



          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center">
  {
    info.map((item) => {
      return (
        <div className="py-8 px-8 flex flex-col w-full max-w-[270px]  border border-[rgba(0,0,0,0.31)] items-center justify-center" key={item.id}>
          <div className="rounded-full flex items-center justify-center bg-[rgba(47,46,48,0.31)] w-20 h-20 mb-6">
            <div className="rounded-full flex items-center justify-center bg-button w-[58px] h-[58px] text-white">
              {item.icon}
            </div>
          </div>
          <p className="font-inter text-[32px] font-bold mb-3">{item.total}k</p>
          <p className="font-poppins text-[14px] max-w-[213px]">{item.description}</p>
        </div>
      );
    })
  }
</div>

        </div>
      </div>
    </section>
  )
}

export default About