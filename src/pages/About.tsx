import { SlashIcon } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb"
import { about_image } from "../constant/constant"
const About: React.FC = () => {
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
        </div>
      </div>
    </section>
  )
}

export default About