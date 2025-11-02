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

                    <CartItems />
                    <div className='flex items-center justify-between'>


                        <Button1>
                            Return To Shop
                        </Button1>
                        <Button1>
                            Update Cart
                        </Button1>
                    </div>

                    <div className='grid grid-cols-[auto_1fr] justify-between mt-20 gap-[173px]'>
                    <div className='flex items-start gap-4'>
                        <input type="text" className='py-4 px-6 w-[300px] font-poppins border border-black rounded-sm' placeholder='Coupon Code' />
                        <Button2 className=''>
                            Apply Coupon
                        </Button2>
                    </div>


                    <CartTotalBox/>
                    </div>
                </div>
            </div>
        </section>
    )
}



const CartItems: React.FC = () => {

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

        cartItems.map((item) => {
            return (
                <>


                    <div key={item.id} className='grid shadow-contact py-6 rounded-sm mb-10   px-10 grid-cols-4 items-center justify-between font-poppins'>
                        <span className='flex items-center gap-5'>
                            <img src={item.image} alt="image" />
                            <p>
                                {item.name}
                            </p>
                        </span>

                        <span>
                            ${item.price}
                        </span>


                        <span className='border border-gray-400 py-2 px-3'>
                            {item.quantity}
                        </span>

                        <span >
                            ${item.price * item.quantity}
                        </span>
                    </div>




                </>



            )
        })
    )
}


// --- New Cart Total Box Component ---
const CartTotalBox: React.FC = () => {
    const subtotal = 1750; // Example total (650*1 + 550*2 = 1750)
    const shipping = 50;   // Example shipping cost
    const total = subtotal + shipping;

    return (
        <div className='flex justify-start font-poppins mb-20'>
            <div className='border border-black p-8 rounded-sm w-full max-w-sm'>
                <h3 className='text-xl font-medium mb-6'>Cart Total</h3>

                {/* Subtotal Row */}
                <div className='flex justify-between py-2 border-b border-gray-300'>
                    <p>Subtotal:</p>
                    <p>${subtotal}</p>
                </div>

                {/* Shipping Row */}
                <div className='flex justify-between py-2 border-b border-gray-300'>
                    <p>Shipping:</p>
                    <p>${shipping}</p>
                </div>

                {/* Total Row */}
                <div className='flex justify-between py-2 mb-6'>
                    <p className='font-medium'>Total:</p>
                    <p className='font-medium'>${total}</p>
                </div>

                {/* Process to Checkout Button (Red/Primary Color) */}
               <Button2 className="w-full">
                Proceed To Checkout
               </Button2>
            </div>
        </div>
    );
}


export default Cart