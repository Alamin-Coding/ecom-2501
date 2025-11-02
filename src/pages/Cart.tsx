import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { SlashIcon } from 'lucide-react';
const Cart:React.FC = () => {
  return (
    <section>
        <div className="container">
            <div className="cart_container">

                {/* Breadcumb */}
                <div className='mt-20'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="text-[14px]">
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon className="w-3 h-3" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                </div>


                <div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart