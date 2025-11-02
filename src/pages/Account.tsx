import React from 'react'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb"
import { SlashIcon } from 'lucide-react'
const Account:React.FC = () => {
  return (
    <section>
        
        <div className="container">
            <div className="account_container">
                <div className='mt-20 flex items-center justify-between text-sm'>
                    <div >
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="text-[14px] ">
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <SlashIcon />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/account">My Account</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <span>Welcome! {/* Name From Account*/ }</span>
                </div>


                <div>
                    <aside>
                        <h2>Manage</h2>
                    </aside>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Account