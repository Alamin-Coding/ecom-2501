import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import Button2 from "../components/Button2";

const Account: React.FC = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                {/* Breadcrumb + Welcome */}
                <div className="flex items-center justify-between text-sm mb-10">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="text-[14px]">
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon className="w-3 h-3" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/account">My Account</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <span className="text-gray-700">
                        Welcome! <span className="text-red-500 font-medium">{/* Account Name */}</span>
                    </span>
                </div>

                {/* Account Container */}
                <div className="grid grid-cols-12 gap-8 font-poppins">
                    {/* Sidebar */}
                    <aside className="col-span-3 space-y-6">
                        <div>
                            <h3 className="font-medium mb-4">Manage My Account</h3>
                            <ul className="space-y-2 pl-8.5">
                                <li className="hover:text-button2  text-gray-500 font-poppins cursor-pointer">
                                    My Profile
                                </li>
                                <li className="text-gray-500 hover:text-button2 cursor-pointer">
                                    Address Book
                                </li>
                                <li className="text-gray-500 hover:text-button2 cursor-pointer">
                                    My Payment Options
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium mb-3">My Orders</h3>
                            <ul className="space-y-2 pl-8.5 ">
                                <li className="text-gray-500 hover:text-button2 cursor-pointer">
                                    My Returns
                                </li>
                                <li className="text-gray-500 hover:text-button2 cursor-pointer">
                                    My Cancellations
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">My Wishlist</h3>
                        </div>
                    </aside>

                    {/* Profile Edit Form */}
                    <div className="col-span-9 font-poppins bg-white shadow-contact rounded-lg p-10">
                        <h2 className="text-xl font-medium text-button2 mb-6">
                            Edit Your Profile
                        </h2>

                        <form className="grid grid-cols-2 gap-6">
                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Md"
                                    className="w-full bg-gray-100 h-[45px] rounded-md px-4 text-gray-600 outline-none"
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Rimel"
                                    className="w-full bg-gray-100 h-[45px] rounded-md px-4 text-gray-600 outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    defaultValue="rimel1111@gmail.com"
                                    className="w-full bg-gray-100 h-[45px] rounded-md px-4 text-gray-600 outline-none"
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Kingston, 5236, United State"
                                    className="w-full bg-gray-100 h-[45px] rounded-md px-4 text-gray-600 outline-none"
                                />
                            </div>

                            {/* Password Section */}
                            <div className="col-span-2 mt-4">
                                <h3 className="font-semibold text-gray-800 mb-3">
                                    Password Changes
                                </h3>

                                <div className="space-y-4">
                                    <input
                                        type="password"
                                        placeholder="Current Password"
                                        className="w-full bg-gray-100 h-[45px] rounded-md px-4 text-gray-600 outline-none"
                                    />
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        className="w-full bg-gray-100 h-[45px] rounded-md px-4 text-gray-600 outline-none"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Confirm New Password"
                                        className="w-full bg-gray-100 h-[45px] rounded-md px-4 text-gray-600 outline-none"
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="col-span-2 flex justify-end gap-4 mt-6">
                                <button
                                    type="button"
                                    className="text-gray-600 hover:text-black font-medium"
                                >
                                    Cancel
                                </button>
                                <Button2>Save Change</Button2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Account;
