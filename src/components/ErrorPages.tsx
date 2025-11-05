import React from 'react'
import { Link } from 'react-router'

const ErrorPages: React.FC = () => {
  return (
    <div className='container ' >

     <h3 className=' flex items-center gap-3 mt-[80px] ' > <Link to={"/"} className='dark:text-shadow-gray-200 text-[14px] font-semibold text-gray-600 ' >Home</Link> <span className='dark:text-amber-50 font-extrabold ' >/</span> <p className='dark:text-amber-50 text-[14px] font-bold ' >404 Error</p> </h3>

      <div className=' flex flex-col items-center justify-center ' >
     <h1 className=' text-[110px] font-inter font-bold leading-[115px] mt-[140px] dark:text-amber-50 ' > 404 Not Found </h1>
     <p className=' font-poppins font-normal text-[16px] mt-[40px] leading-[24px] dark:text-amber-50 ' > Your visited page not found. You may go home page. </p>
     
     <Link to={"/"} >
     <button className='dark:text-amber-50 cursor-pointer text-[16px] mt-[80px] mb-[140px] py-[16px] px-[48px] bg-[#DB4444] text-[#FAFAFA] rounded-[4px] ' > Back to home page </button>
     </Link>
      </div>
      
    </div>
  )
}

export default ErrorPages
