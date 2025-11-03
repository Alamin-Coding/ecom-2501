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


      {/* Navbar Starts */}
      <nav className="mt-10 mb-[23px]">
        <div className="container">
          <div className="nav_container flex items-center justify-between text-button">
            <Link to={"/"} className="font-inter font-bold text-2xl">Exclusive</Link>

            <ul className="flex font-poppins items-center gap-12">
              <li className="relative buttons "><Link to={"/"}>Home</Link></li>
              <li className="relative buttons "><Link to={"about"}>About</Link></li>
              <li className="relative buttons "><Link to={"contact"}>Contact</Link></li>
              <li className="relative buttons "><a href="#">Sign Up</a></li>
            </ul>

            <div className="flex items-center  gap-6">
              <div className="flex items-center w-[243px] h-[38px] justify-between py-[7px] px-3 bg-[#F5F5F5] ">
                <input className="font-poppins text-[12px] focus:outline-none w-full" type="text" placeholder="What are you looking for?" />
                <img src="search.svg" alt="icon" />
              </div>

              <div className="flex items-center gap-4" >
                <div>
                  <img src="wishlist.svg" alt="icon" />
                </div>

                <Link to={"cart"}>
                  <img src="cart.svg" alt="icon" />
                </Link>

                <Link to={"account"}>
                  <img src="user.svg" alt="icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
