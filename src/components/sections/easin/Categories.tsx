import { ArrowLeft, ArrowRight } from "lucide-react"
import HeadingHomePage from "../../HeadingHomePage"
import { nanoid } from "nanoid"
import { camera, computer, gameconsole, headphone, phone, watch } from "../../../constant/constant"

interface Categories{
    id: string
    title: string
    category: string
    icon: string
}


const Categories:React.FC = () => {
    const categories:Categories[] = [
        {
            id: nanoid(),
            title:"Phones",
            category: 'phone',
            icon: phone ,
        },
        {
            id: nanoid(),
            title:"Computers",
            category: 'computer',
            icon: computer ,
        },
        {
            id: nanoid(),
            title:"SmartWatch",
            category: 'watch',
            icon: watch ,
        },
        {
            id: nanoid(),
            title:"Camera",
            category: 'camera',
            icon: camera ,
        },
        {
            id: nanoid(),
            title:"HeadPhones",
            category: 'headphone',
            icon: headphone ,
        },
        {
            id: nanoid(),
            title:"Gamepads",
            category: 'gamepads',
            icon: gameconsole ,
        },
    ]

  return (
    <section className=" pt-20 pb-17.5  mb-17.5 border-y-2">
        <div className="container">
            <div className="flex items-center justify-between">
                <HeadingHomePage subHeading="Categories" heading="Browse by Category" headingAlign="left"/>

                {/* Right Buttons */}
                <div className="flex items-center gap-2">
                <div className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5"> 
                    <ArrowLeft/>
                    
                    </div>
                <div className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5"> 
                    <ArrowRight/>
                    
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-6 gap-7.5">
                {
                    categories?.map((category)=>{
                        return(
                            <div key={category.id} className="py-6 transition-all duration-400 group cursor-pointer px-10 border border-gray-500 space-y-4 flex flex-col items-center justify-center hover:bg-button2">
                                <div>
                                    <img  src={category.icon} alt="icon" />
                                    
                                </div>
                                <p className="group-hover:text-white">
                                    {category.title}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Categories