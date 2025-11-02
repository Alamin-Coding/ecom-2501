
import type React from "react"
import { Link } from "react-router"

const Navbar: React.FC = () => {
  return (
    <header className="border-b border-[rgba(0,0,0,0.29)]">
      {/* Top Header Design  */}
      <div className="py-[15px] bg-button text-text">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-20"></div>
            <p className="font-poppins text-[14px] ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span><a className="underline underline-offset-1 font-poppins text-[14px] font-semibold" href="#">Shop Now</a></span></p>
            <select className="font-grotesk self-end">
              <option value="english">English</option>
              <option value="bengali">Bengali</option>
            </select>
          </div>
        </div>
      </div>


      {/* Navbar Starts */}
      <nav className="mt-10 mb-[23px]">
        <div className="container">
          <div className="nav_container flex items-center justify-between text-button">
            <h2 className="font-inter font-bold text-2xl">Exclusive</h2>

            <ul className="flex font-poppins items-center gap-12">
              <li className="relative buttons "><a href="#">Home</a></li>
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

                <div>
                  <img src="cart.svg" alt="icon" />
                </div>

                <div>
                  <img src="user.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar