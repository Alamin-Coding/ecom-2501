import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Slash, X } from 'lucide-react';
import { gamepad, monitor } from '../constant/constant';
import { nanoid } from 'nanoid';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
import { Link } from 'react-router';

// Types
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const Cart: React.FC = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="cart_container">
                    {/* Breadcrumb */}
                    <div className="mt-20 mb-10">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="text-[14px]">
                                    <BreadcrumbLink >
                                    <Link to={"/"}>Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <Slash className="w-3 h-3" />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink>
                                    <Link to={"/cart"}>Cart</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    {/* Cart Header */}
                    <div className="grid shadow-contact py-6 rounded-sm mb-10 px-10 grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center font-poppins">
                        <p className="font-medium">Product</p>
                        <p className="font-medium">Price</p>
                        <p className="font-medium">Quantity</p>
                        <p className="font-medium">Subtotal</p>
                    </div>

                    {/* Cart Items */}
                    <CartItems />

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between mb-20">
                        <Button1>
                            Return To Shop
                        </Button1>
                        <Button1>
                            Update Cart
                        </Button1>
                    </div>

                    {/* Coupon and Cart Total Section */}
                    <div className="grid grid-cols-[auto_1fr] justify-between  mb-20">
                        {/* Coupon Section */}
                        <div className="flex  items-start gap-4">
                            <input
                                type="text"
                                className="py-4 px-6 w-[300px]  font-poppins border border-black rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Coupon Code"
                            />
                            <Button2 className=''>
                                Apply Coupon
                            </Button2>
                        </div>

                        {/* Cart Total Box */}
                        <CartTotalBox />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Cart Items Component
const CartItems: React.FC = () => {
    const cartItems: CartItem[] = [
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
        <>
            {cartItems.map((item) => (
                <div
                    key={item.id}
                    className="grid shadow-contact py-6 rounded-sm mb-10 px-10 grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center font-poppins relative group"
                >
                    {/* Product Info */}
                    <div className="flex items-center gap-5">
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-contain"
                            />
                            <button
                                className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                                aria-label="Remove item"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                        <p className="text-sm md:text-base">{item.name}</p>
                    </div>

                    {/* Price */}
                    <span className="text-sm md:text-base">${item.price}</span>

                    {/* Quantity Controls */}
                    <div className="flex items-center border border-gray-400 rounded-sm w-fit">
                      
                        <span className="px-4 py-2 border-x border-gray-400 min-w-[60px] text-center">
                            {item.quantity}
                        </span>
                      
                    </div>

                    {/* Subtotal */}
                    <span className="text-sm md:text-base font-medium">
                        ${item.price * item.quantity}
                    </span>
                </div>
            ))}
        </>
    );
};



export default Cart;


const CartTotalBox: React.FC = () => {
    const subtotal = 1750;
    // Example total (650*1 + 550*2 = 1750) 
    const shipping = 50;
    // Example shipping cost 
    const total = subtotal + shipping;
    return (
        <div className='flex justify-end font-poppins mb-20 '>
            <div className='border border-black py-8 px-6 rounded-sm w-full max-w-sm'>
                <h3 className='text-xl font-medium mb-6'>Cart Total</h3> {/* Subtotal Row */}
                <div className='flex justify-between py-2 border-b border-gray-300'>
                    <p>Subtotal:</p> <p>${subtotal}</p>
                </div> {/* Shipping Row */}
                <div className='flex justify-between py-2 border-b border-gray-300'>
                    <p>Shipping:</p>
                    <p>${shipping}</p>
                </div> {/* Total Row */}
                <div className='flex justify-between py-2 mb-6'>
                    <p className='font-medium'>Total:</p>
                    <p className='font-medium'>${total}</p>
                </div> {/* Process to Checkout Button (Red/Primary Color) */}
                <Button2 className="w-full"> Proceed To Checkout </Button2>
            </div>
        </div>);
}