
import { SlashIcon } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb"
import { Icon } from "@iconify/react"
import Button2 from "../components/Button2"
import { Link } from "react-router"
const Contact: React.FC = () => {
    return (
        <section>
            <div className="container">
                <div className="contact_container">
                    <div className="mt-20 mb-20">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="text-[14px] ">
                                    <BreadcrumbLink>
                                    <Link to={"/"}>Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <SlashIcon />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink>
                                    <Link to={"/contact"}>Contact</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>


                    <div className="grid grid-cols-[auto_1fr] gap-7.5 ">
                        <div className="py-10 max-w-[340px] shadow-contact px-9">
                            <div className="flex items-center mb-6 gap-4">
                                <div className="bg-button2  rounded-full w-10 text-white h-10 flex items-center justify-center">
                                    <Icon icon="akar-icons:phone" width="20" height="20" />
                                </div>
                                <p className="font-poppins font-medium">Call To US</p>
                            </div>

                            <p className="mb-4 font-poppins text-sm">We are available 24/7, 7 days a week.</p>
                            <p className="font-poppins text-sm mb-8"> Phone: +8801611112222</p>

                            {/* divider */}
                            <div className="w-full h-px bg-button mb-8 "></div>

                            <div className="flex items-center mb-6 gap-4">
                                <div className="bg-button2  rounded-full w-10 text-white h-10 flex items-center justify-center">
                                    <Icon icon="material-symbols:mail-outline" width="20" height="20" />
                                </div>
                                <p className="font-poppins font-medium">Write To US</p>
                            </div>

                            <p className="mb-4 font-poppins text-sm">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="font-poppins text-sm mb-4"> Emails: customer@exclusive.com</p>
                            <p className="font-poppins text-sm "> Emails: support@exclusive.com</p>


                        </div>

                        {/* Form */}
                        <div className="py-10 px-8 max-w-[800px] shadow-contact">
                            <div className="grid grid-cols-12 gap-x-4 gap-y-8 mb-8">
                                {/* Name */}
                                <div className="relative col-span-4">
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-sm bg-secondary h-[50px] font-poppins text-[rgba(0,0,0,0.53)] py-3 px-4 pr-6"
                                        placeholder="Your Name"
                                    />
                                    <span className="absolute left-28 top-2/5 -translate-y-1/2 text-button2 opacity-50 ">*</span>
                                </div>

                                {/* Email */}
                                <div className="relative col-span-4">
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-sm bg-secondary h-[50px] font-poppins text-[rgba(0,0,0,0.53)] py-3 px-4 pr-6"
                                        placeholder="Your Email"
                                    />
                                    <span className="absolute left-28 top-2/5 -translate-y-1/2 text-button2 opacity-50 ">*</span>
                                </div>

                                {/* Phone */}
                                <div className="relative col-span-4">
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-sm bg-secondary h-[50px] font-poppins text-[rgba(0,0,0,0.53)] py-3 px-4 pr-6"
                                        placeholder="Your Phone"
                                    />
                                    <span className="absolute left-28 top-2/5 -translate-y-1/2 text-button2 opacity-50 ">*</span>
                                </div>

                                {/* Message */}
                                <textarea
                                    className="h-[207px] bg-secondary rounded-sm resize-none col-span-12 py-3 px-4 text-[rgba(0,0,0,0.49)] font-poppins"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <div className="flex items-center justify-end">
                            <Button2 className="">Send Message</Button2>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact