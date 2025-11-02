import React, { useState } from 'react'
import { LoginImages } from '../ImportImages/ImportImages'
import { Eye, EyeOff } from 'lucide-react';

const LoginPages: React.FC = () => {
     const [password, setPassword] = useState('');
     const [showPassword, setShowPassword] = useState(false);

     const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
     };

     return (
          <div className=' flex items-center  ' >
               <div>
                    <img className=' h-[750px] mt-[60px] ' src={LoginImages} alt="loginimages" />
               </div>

               <div className=' ml-[130px] ' >
                    <div>
                         <h2 className=' dark:text-amber-50 leading-[30px] text-[40px] font-semibold ' >Log in to Exclusive</h2>
                         <p className='dark:text-amber-50 mt-[24px] text-[16px] leading-[24px] ' >Enter your details below</p>
                    </div>

                    <div className=' mt-[48px] ' >
                         <label className="input outline-none border-t-transparent border-x-transparent border-b-[1px] border-[#000000] shadow-none ">
                              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                   <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                   >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                   </g>
                              </svg>
                              <input type="email" placeholder="Email or Phone Number" />
                         </label>
                         <div className="validator-hint hidden">Enter valid email address</div>
                    </div>

                    <div className=" pr-4 mt-[40px] w-[340px]">
                         <div className="mb-4">
                              <div className="relative">
                                   <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 focus:outline-none transition-colors"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                   >
                                        {showPassword ? (
                                             <EyeOff className="w-5 h-5" />
                                        ) : (
                                             <Eye className="w-5 h-5" />
                                        )}
                                   </button>

                                   <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-3 pr-12 border-[1px] focus:outline-none border-x-transparent border-t-transparent transition-all"
                                   />
                              </div>
                         </div>
                    </div>

               <div className=' pt-[40px] ' >
               <button className=' py-[16px] cursor-pointer px-[48px] text-amber-50 text-[16px] font-[500] bg-[#DB4444] rounded-[4px] ' >Log In</button>
               <button className=' ml-15 cursor-pointer text-[16px] leading-[24px] text-[#DB4444] ' >Forget Password?</button>
               </div>

               </div>

          </div>
     )
}

export default LoginPages
