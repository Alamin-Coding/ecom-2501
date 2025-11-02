import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const NavBar: React.FC = () => {
  const themeToggle = () => {
    document.querySelector('body')?.classList.toggle('dark'); 
  }
   
  return (
    <nav className=' bg-white dark:bg-black border-b-[0.5px] border-[#000000] dark:border-b-gray-400' >
      <div className="navbar container bg-base-100 ">
  <div className="navbar-start  ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 dark:bg-black dark:text-amber-50 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <Link to={""} className=' font-bold text-[16px] dark:font-semibold dark:text-amber-50 dark:text-[16px] ' > Home </Link>
       <Link to={""} className=' font-bold text-[16px] dark:font-semibold dark:text-amber-50 dark:text-[16px] ' > Contact </Link>
       <Link to={""} className=' font-bold text-[16px] dark:font-semibold dark:text-amber-50 dark:text-[16px] ' > About </Link>
       <Link to={""} className=' font-bold text-[16px] dark:font-semibold dark:text-amber-50 dark:text-[16px] ' > Sign Up </Link>
      </ul>
    </div>
    <div>
      <h1 className=' font-[700] text-[24px] leading-[24px] dark:text-amber-50 ' >Exclusive</h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-8 px-1">
      <Link to={""} className=' font-bold text-[16px] dark:font-semibold dark:text-amber-50 dark:text-[16px] ' > Home </Link>
       <Link to={""} className=' font-bold text-[16px] dark:font-semibold dark:text-amber-50 dark:text-[16px] ' > Contact </Link>
       <Link to={""} className=' font-bold text-[16px] dark:font-semibold dark:text-amber-50 dark:text-[16px] ' > About </Link>
       <Link to={""} className=' font-bold text-[16px] dark:font-semibold dark:text-amber-50 dark:text-[16px] ' > Sign Up </Link>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <button className=' cursor-pointer ' >
      <label className="input outline-transparent focus:outline-none ">
        <input type="search" required placeholder="What are you looking for?" />
  <svg className="h-[20px] cursor-pointer opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
</label>
    </button>

    <button className="">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[25px]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>

<div>
<ShoppingCart />
</div>

<button onClick={themeToggle}>
<label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-[30px] w-[30px] fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-[30px] w-[30px] fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
</button>

  </div>
</div>
    </nav>
  )
}

export default NavBar
