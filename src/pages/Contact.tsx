
import { SlashIcon } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb"
import { Icon } from "@iconify/react"
const Contact: React.FC = () => {
    return (
        <section>
            <div className="container">
                <div className="contact_container">
                    <div className="mt-20 mb-20">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="text-[14px] ">
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <SlashIcon />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>


                    <div className="grid grid-cols-[auto_1fr] gap-7.5 ">
                        <div className="py-10 max-w-[340px] shadow-contact px-9">
                            <div className="flex items-center mb-6 gap-4">
                                <div className="bg-secondery  rounded-full w-10 text-white h-10 flex items-center justify-center">
                                    <Icon icon="akar-icons:phone" width="20" height="20" />
                                </div>
                                <p className="font-poppins font-medium">Call To US</p>
                            </div>

                            <p className="mb-4 font-poppins text-sm">We are available 24/7, 7 days a week.</p>
                            <p className="font-poppins text-sm mb-8"> Phone: +8801611112222</p>

                            {/* divider */}
                            <div className="w-full h-px bg-button mb-8 "></div>

                             <div className="flex items-center mb-6 gap-4">
                                <div className="bg-secondery  rounded-full w-10 text-white h-10 flex items-center justify-center">
                                    <Icon icon="material-symbols:mail-outline" width="20" height="20" />
                                </div>
                                <p className="font-poppins font-medium">Write To US</p>
                            </div>

                            <p className="mb-4 font-poppins text-sm">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="font-poppins text-sm mb-4"> Emails: customer@exclusive.com</p>
                            <p className="font-poppins text-sm "> Emails: support@exclusive.com</p>


                        </div>

                        <div className="py-10 px-8">

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact