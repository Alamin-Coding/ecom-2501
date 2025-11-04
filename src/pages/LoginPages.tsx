import React, { useState } from 'react'
import { LoginImages } from '../ImportImages/ImportImages'
import { Eye, EyeOff, Icon } from 'lucide-react';
import { signup } from '../constant/constant';
import Button2 from '../components/Button2';

const LoginPages: React.FC = () => {
     const [password, setPassword] = useState('');
     const [showPassword, setShowPassword] = useState(false);

     const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
     };

     return (
          <div className=' flex items-center  ' >
               <div>
                    <img className=' h-[750px] mt-[60px] ' src={signup} alt="loginimages" />
               </div>

               <div className=' ml-[130px] ' >
                    <div>
                         <h2 className='  leading-[30px] text-[36px] font-semibold tracking-wide font-inter' >Log in to Exclusive</h2>
                         <p className='mt-6 text-[16px] leading-6 ' >Enter your details below</p>
                    </div>

                    <div className=' mt-12 ' >
                        <input type="text" placeholder='Email or Phone Number' className='w-full text-gray-500 focus:outline-none font-poppins border-b border-button pb-2' />
     
                         <div className="validator-hint hidden">Enter valid email address</div>
                    </div>

                    <div className=" pr-4 mt-10 w-[340px]">
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
                                        placeholder="Password"
                                        className="w-full  py-3 text-gray-500 border-b border-button focus:outline-none "
                                   />
                              </div>
                         </div>
                    </div>

               <div className=' pt-10 ' >
               <Button2>Log In</Button2>
               <button className=' ml-15 cursor-pointer text-[16px] leading-6 text-button2 ' >Forget Password?</button>
               </div>

               </div>

          </div>
     )
}

export default LoginPages
