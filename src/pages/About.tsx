import {   SlashIcon  } from "lucide-react"
import { Icon } from "@iconify/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb"
import { about_image, customer_service, delivery, employee_1, employee_2, employee_3, secure } from "../constant/constant"
import { nanoid } from 'nanoid';

const About: React.FC = () => {

  const info = [
    {
      id: nanoid(),
      icon: <Icon icon="iconoir:shop-four-tiles" width="40" height="40" />,
      total: 10.5,
      description: "Sellers active in our site"
    },
    {
      id: nanoid(),
      icon: <Icon icon="streamline:dollar-coin" width="40" height="40" />,
      total: 33,
      description: "Monthly product sell"
    },
    {
      id: nanoid(),
      icon: <Icon icon="fluent:shopping-bag-16-regular" width="40" height="40" />,
      total: 45.5,
      description: "Customer active in our site"
    },
    {
      id: nanoid(),
      icon: <Icon icon="healthicons:money-bag-outline" width="40" height="40" />,
      total: 25,
      description: "Anual gross sale in our site"
    },
  ]

  const employees = [
    {
      id: nanoid(),
      name:"Tom Cruise",
      title: "Founder & Chairman",
      image: employee_1 ,
      icons: [
          {
          id: 1,
          icon: "ph:twitter-logo"
        },
        {
          id: 2,
          icon: "streamline-logos:instagram-logo-2"
        },
        {
          id: 2,
          icon: "ri:linkedin-line"
        },

      ]

    },
    {
      id: nanoid(),
      name:"Emma Watson",
      title: "Managing Director",
      image: employee_2 ,
      icons: [
         {
          id: 1,
          icon: "ph:twitter-logo"
        },
        {
          id: 2,
          icon: "streamline-logos:instagram-logo-2"
        },
        {
          id: 2,
          icon: "ri:linkedin-line"
        },

      ]

    },
    {
      id: nanoid(),
      name:"Will Smith",
      title: "Product Designer",
      image: employee_3 ,
      icons: [
        {
          id: 1,
          icon: "ph:twitter-logo"
        },
        {
          id: 2,
          icon: "streamline-logos:instagram-logo-2"
        },
        {
          id: 2,
          icon: "ri:linkedin-line"
        },

      ]

    },
  ]

  const services = [
    {
      id: nanoid(),
      title: "FREE AND FAST DELIVERY",
      icon: delivery,
      description: "Free delivery for all orders over $140"
    },
    {
      id: nanoid(),
      title: "24/7 CUSTOMER SERVICE",
      icon: customer_service,
      description: "Friendly 24/7 customer support"
    },
    {
      id: nanoid(),
      title: "MONEY BACK GUARANTEE",
      icon: secure,
      description: "We reurn money within 30 days"
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


      {/* About Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center mb-[140px]">
            {
              info.map((item) => {
                return (
                  <div className="py-8 hover:shadow-info transition-all duration-300 hover:bg-button2 hover:cursor-pointer group px-8 flex flex-col w-full max-w-[270px]  border border-[rgba(0,0,0,0.31)] items-center justify-center" key={item.id}>
                    <div className="rounded-full flex transition-all items-center group-hover:bg-[rgba(255,255,255,0.3)] justify-center bg-[rgba(47,46,48,0.31)] w-20 h-20 mb-6">
                      <div className="rounded-full flex transition-all items-center justify-center group-hover:bg-white group-hover:text-black bg-button w-[58px] h-[58px] text-white">
                        {item.icon}
                      </div>
                    </div>
                    <p className="font-inter text-[32px] group-hover:text-white font-bold mb-3">{item.total}k</p>
                    <p className="font-poppins text-[14px] group-hover:text-white max-w-[213px]">{item.description}</p>
                  </div>
                );
              })
            }
          </div>


            {/* About Of Owners and employees */}
            {/* This part will be in carousel */}
          <div className="grid grid-cols-3 gap-7.5 items-center mb-10 justify-between">
            {
                employees.map((employee)=>{
                  return(
                    <div key={employee.id}>
                        <div className="bg-[#F5F5F5] flex justify-center pt-10 items-end mb-8">
                          <img src={employee.image} alt="image" />
                        </div>
                        <div>
                          <h3 className="font-inter text-[32px] leading-[30px]">{employee.name}</h3>
                          <p className="font-poppins mt-2">{employee.title}</p>
                          <div className="flex items-center gap-4 mt-4">
                            {
                              employee.icons.map((social)=>{
                                return(
                                    <a key={social.id} href="#">
                                      <Icon icon={social.icon} width={24} height={24}/>
                                    </a>
                                )
                              })
                            }
                          </div>
                        </div>
                    </div>
                  )
                })
            }

          </div>


            {/* About Services */}
          <div className="grid grid-cols-3 items-center mt-[140px]  justify-center gap-22">
              {
                services.map((item)=>{
                  return(
                    <div className=" flex flex-col w-full    items-center justify-center" key={item.id}>
                    <div className="rounded-full flex  items-center  justify-center bg-[rgba(47,46,48,0.31)] w-20 h-20 mb-6">
                      <div className="rounded-full flex  items-center justify-center  bg-button w-[58px] h-[58px] text-white">
                        <img src={item.icon} alt="icon" />
                      </div>
                    </div>
                    <p className="font-inter text-[20px]  font-semibold mb-2">{item.title}</p>
                    <p className="font-poppins text-[14px]  ">{item.description}</p>
                  </div>
                  )
                })
              }
          </div>

        </div>
      </div>
    </section>
  )
}

export default About