import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { SlashIcon } from 'lucide-react';
import { gamepad, monitor } from '../constant/constant';
import { nanoid } from 'nanoid';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
const Cart: React.FC = () => {
    return (
        <section>
            <div className="container">
                <div className="cart_container">

                    {/* Breadcumb */}
                    <div className='mt-20 mb-10'>
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


                    <div className='grid shadow-contact py-6 rounded-sm mb-10  px-10 grid-cols-4 gap-[284px] items-center justify-between font-poppins'>
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>

                    
                  

                 
                </div>
            </div>
        </section>
    )
}







export default Cart