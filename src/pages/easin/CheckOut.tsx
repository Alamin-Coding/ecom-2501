import { Link } from "react-router"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../../components/ui/breadcrumb"
import { SlashIcon } from "lucide-react"
import { useState } from "react"
import Button2 from "../../components/Button2"
import { gamepad, monitor } from "../../constant/constant"


const CheckOut: React.FC = () => {
    return (
        <section>
            <div className="container pt-20">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="text-[14px] ">
                            <BreadcrumbLink >
                                <Link to={"/account"}>Account</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <SlashIcon />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink >
                                <Link to={"/account"}>My Account</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <SlashIcon />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink >
                                <Link to={"/shop"}>Product</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <SlashIcon />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink >
                                <Link to={"/cart"}>View Cart</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <SlashIcon />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink >
                                <Link to={"/checkout"}>CheckOut</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="grid md:grid-cols-2 gap-10 mt-20 justify-between">
                    <BillingForm />

                    <div className="max-w-[526px]">
                        <OrderSummary />
                        <PaymentOptions />
                        <CouponSection />
                        <Button2>Place Order</Button2>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CheckOut


const BillingForm: React.FC = () => {
    return (
        <div className="max-w-[470px] space-y-4">
            <h2 className="text-4xl font-inter leading-7.5 tracking-wide font-medium mb-12">Billing Details</h2>

            <form className="space-y-8 font-poppins">
                <div>
                    <label className="block  text-gray-400  mb-2">
                        First Name<span className="text-red-500">*</span>
                    </label>
                    <input type="text" className="w-full bg-secondary border rounded-sm p-2.5" />
                </div>

                <div>
                    <label className="block  text-gray-400  mb-2">Company Name</label>
                    <input type="text" className="w-full bg-secondary border rounded-sm p-2.5" />
                </div>

                <div>
                    <label className="block  text-gray-400  mb-2">
                        Street Address<span className="text-red-500">*</span>
                    </label>
                    <input type="text" className="w-full border bg-secondary rounded-sm p-2.5" />
                </div>

                <div>
                    <label className="block  text-gray-400  mb-2">
                        Apartment, floor, etc. (optional)
                    </label>
                    <input type="text" className="w-full border bg-secondary rounded-sm p-2.5" />
                </div>

                <div>
                    <label className="block  text-gray-400  mb-2">
                        Town/City<span className="text-red-500">*</span>
                    </label>
                    <input type="text" className="w-full border bg-secondary rounded-sm p-2.5" />
                </div>

                <div>
                    <label className="block  text-gray-400  mb-2">
                        Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input type="text" className="w-full border bg-secondary rounded-sm p-2.5" />
                </div>

                <div>
                    <label className="block  text-gray-400  mb-2">
                        Email Address<span className="text-red-500">*</span>
                    </label>
                    <input type="email" className="w-full border bg-secondary rounded-sm p-2.5" />
                </div>

                <div className="flex items-center space-x-2">
                    <input type="checkbox" className="accent-red-500 w-4 h-4" />
                    <label className="text-sm text-gray-700">
                        Save this information for faster check-out next time
                    </label>
                </div>
            </form>
        </div>
    );
};

const OrderSummary: React.FC = () => {
    return (
        <div className="w-full mb-8 space-y-6">
            <div className="space-y-8 border-b pb-3">
                <div className="flex justify-between items-center">
                    <span className="flex items-center space-x-5.5">
                        <img src={monitor} alt="Monitor" className="w-[54px] h-[54px]" />
                        <p>LCD Monitor</p>
                    </span>
                    <p>$650</p>
                </div>

                <div className="flex justify-between items-center">
                    <span className="flex items-center space-x-5.5">
                        <img src={gamepad} alt="Gamepad" className="w-[54px] h-[54px]" />
                        <p>H1 Gamepad</p>
                    </span>
                    <p>$1100</p>
                </div>
            </div>

            <div className="space-y-4 mt-8 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal:</p>
                    <p>$1750</p>
                </div>
                <div className="flex justify-between">
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                    <p>Total:</p>
                    <p>$1750</p>
                </div>
            </div>
        </div>
    );
};

const PaymentOptions: React.FC = () => {
    const [selected, setSelected] = useState("cod");

    return (
        <div className="space-y-3">
            <label className="flex items-center justify-between space-x-2">

                <div className="flex items-center gap-4">

                <input
                    type="radio"
                    name="payment"
                    checked={selected === "bank"}
                    onChange={() => setSelected("bank")}
                />
                <span>Bank</span>
                </div>
                <img
                    src="payments.png"
                    alt="Payments"
                    className="h-full ml-2"
                />
            </label>

            <label className="flex items-center space-x-4">
                <input
                    type="radio"
                    name="payment"
                    checked={selected === "cod"}
                    onChange={() => setSelected("cod")}
                />
                <span>Cash on delivery</span>
            </label>
        </div>
    );
};

const CouponSection: React.FC = () => {
    return (
        <div className="flex items-center h-14 mb-8 gap-3 mt-8">
            <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 border py-4 px-6 h-full rounded-sm"
            />
            <Button2>Apply Coupon</Button2>
        </div>
    );
};