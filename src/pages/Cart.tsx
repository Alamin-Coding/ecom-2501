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


                    <div className='grid shadow-contact py-6 rounded-sm mb-10  px-10 grid-cols-[auto_auto_auto_auto] items-center justify-between font-poppins'>
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    <CartItems />
                </div>
            </div>
        </section>
    )
}



const CartItems:React.FC = () => {

const cartItems = [
    {
      id: nanoid(),
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: monitor,
    },
    {
      id: nanoid(),
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: gamepad,
    },
  ];


    return (

        cartItems.map((item)=>{
            return(

        <div key={item.id} className='grid shadow-contact py-6 rounded-sm mb-10  px-10 grid-cols-[auto_auto_auto_auto] items-center justify-between font-poppins'>
            <span>
                <img src={item.image} alt="image" />

            </span>
        </div>
            )
        })
    )
}

export default Cart