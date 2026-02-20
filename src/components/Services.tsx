import { nanoid } from "nanoid"
import { customer_service, delivery, secure } from "../constant/constant"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


interface Service  {
    id: string
    title: string
    icon: string
    description: string
}

const Services:React.FC = () => {
    const services:Service[] = [
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
    <div>
        {/* Desktop */}
        <div className="grid grid-cols-3 items-center mt-[140px]  justify-center gap-22 hidden lg:grid">
              {
                services.map((item)=>{
                  return(
                    <div className=" flex flex-col w-full    items-center justify-center" key={item.id}>
                    <div className="rounded-full flex  items-center  justify-center dark:bg-gray-300 bg-[rgba(47,46,48,0.31)] w-20 h-20 mb-6">
                      <div className="rounded-full flex  items-center justify-center dark:bg-gray-700 bg-button w-[58px] h-[58px] text-white">
                        <img src={item.icon} alt="icon" />
                      </div>
                    </div>
                      
                    <p className="font-inter text-[20px]  font-semibold mb-2">{item.title}</p>
                    <p className="font-poppins text-[14px]">{item.description}</p>

                  </div>
                  )
                })
              }
          </div>

        {/* Mobile */}
        <div className="block lg:hidden mt-[140px]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {services.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center justify-center">
                  <div className="rounded-full flex items-center justify-center dark:bg-gray-300 bg-[rgba(47,46,48,0.31)] w-20 h-20 mb-6">
                    <div className="rounded-full flex items-center justify-center dark:bg-gray-700 bg-button w-[58px] h-[58px] text-white">
                      <img src={item.icon} alt="icon" />
                    </div>
                  </div>
                  <p className="font-inter text-[20px] font-semibold mb-2">{item.title}</p>
                  <p className="font-poppins text-[14px]">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}

export default Services