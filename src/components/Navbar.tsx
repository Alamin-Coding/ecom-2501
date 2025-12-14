import React, { useEffect, useRef, useState } from 'react';
import { Heart, Menu, Search, ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Icon } from '@iconify/react';
import { DropdownMenuItem, DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import ProductSearch from './sections/ProductSearch';

export default function NavBar() {
  const navbar = useRef<HTMLElement>(null);
  const themeButton = useRef<HTMLLabelElement>(null);
  const {wishList} = useSelector((state: RootState) => state.wishlist);
  const {cart} = useSelector((state: RootState) => state.cart);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [position, setPosition] = React.useState("bottom")

  const [dark, setDark] = useState("light")

  const handleChange = () => {
    setDark((theme) => theme === "light" ? "dark" : "light")
    console.log(dark);

    document.querySelector("html")?.classList.toggle("dark")
  }

  const handleTheme = (mode: string) => {
    setDark(mode)
  }

  useEffect(() => {
    document.querySelector("html")?.classList.remove("light")
    document.querySelector("html")?.classList.remove("dark")
    document.querySelector("html")?.classList.remove("device")
    document.querySelector("html")?.classList.add(dark)
  }, [dark])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' },
    { to: '/signup', label: 'Sign Up' },
  ];

  // scroll event listener for navbar shadow
  useEffect(() => {
    // const handleScroll = ;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        navbar.current?.classList.add('fixed_header');
        themeButton.current?.classList.add('fixed_theme_button');
      } else {
        navbar.current?.classList.remove('fixed_header');
        themeButton.current?.classList.remove('fixed_theme_button');
      }
    });
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (

    <>
      {/* Top Header Design  */}
      <div className="py-[15px]  bg-black max-w-full text-text relative">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-20"></div>
            <p className="font-poppins sm:text-start md:text-center text-amber-50 text-[14px] ">Summer Sale Free Delivery - OFF 50%! <span><Link className="underline underline-offset-1 font-poppins text-[14px] font-semibold" to="/shop">Shop Now</Link></span></p>
            <select className="font-grotesk text-amber-50 self-end">
              <option className=' bg-black text-amber-50 ' value="english">English</option>
              <option className=' bg-black text-amber-50 ' value="bengali">Bengali</option>
            </select>
          </div>
        </div>
      </div>

      <nav ref={navbar} className="bg-white container max-w-full dark:bg-black border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between  ">
            {/* Left: Mobile Menu Button */}
            <div className="flex items-center justify-center pt-5 pb-5 lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 dark:text-amber-50" />
                ) : (
                  <Menu className="h-6 w-6 dark:text-amber-50" />
                )}
              </button>
            </div>

            {/* Center: Logo mobile */}
            <div className="absolute lg:hidden left-1/2 transform -translate-x-1/2">
              <a href="/" className="flex items-center">
                <div className="w-[140px] h-[50px] md:w-[180px] md:h-[70px]  rounded-lg flex items-center justify-center">
                  <span className="text-black dark:text-amber-50 font-bold font-inter text-xl md:text-2xl">Exclusive</span>
                </div>
              </a>
            </div>

            {/* Right: Action Icons */}
            <div className="flex items-center gap-2 md:gap-3 lg:hidden  ">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Toggle search"
              >
                {isSearchOpen ? (
                  <X className="h-6 w-6 dark:text-amber-50" />
                ) : (
                  <Search className="h-6 w-6 dark:text-amber-50" />
                )}
              </button>

              <button
                className="text-red-500 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-500 rounded-lg transition-colors md:block"
                aria-label="Wishlist"
              >
                <Heart className="h-6 w-6 stroke-red-600" />
              </button>

              <button
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-6 w-6 dark:text-amber-50" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden pt-6 pb-6 lg:flex items-center gap-12 justify-between  ">

            <div >
              <Link to={"/"} className=' text-[24px] font-bold leading-6 font-inter ' > Exclusive </Link>
            </div>

            <div className='lg:flex items-center gap-12 justify-center ' >
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className=" buttons font-poppins relative text-base dark:text-amber-50  dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-6">
                <div className="hidden lg:block translate-y-[-5px] z-80 " >
                  <ProductSearch />
                </div>

                <div className="flex items-center gap-4" >
                  <Link to={"/wishlist"} className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative'>
                    <Heart size={30} color="#000000" strokeWidth={2} absoluteStrokeWidth className='dark:stroke-white' />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {wishList.length}
                      </span>
                  </Link>

                  <Link to={"cart"}>
                    <button
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative"
                      aria-label="Shopping cart"
                    >
                      <ShoppingCart size={30} color="#000000" strokeWidth={2} className='dark:stroke-white' />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cart.length}
                      </span>
                    </button>
                  </Link>

                  

                    <DropdownMenu>
                      <DropdownMenuTrigger  className='focus:outline-0 w-10 h-10 flex items-center justify-center   rounded-full data-[state=open]:bg-button2 data-[state=open]:text-white cursor-pointer  '><Icon icon="lucide:user" width="30" height="30" /></DropdownMenuTrigger>
                      <DropdownMenuContent align='end' className='min-w-56 pt-4.5 pl-5 pb-2.5 pr-3 bg-[rgba(0,0,0,0.50)] backdrop-blur-[100px] text-white  border-none space-y-[13px]' >
                        <DropdownMenuLabel >
                          <Link className='flex items-center justify-start gap-4' to={"/account"}><Icon icon="lucide:user" width="30" height="30" />Manage My Account</Link>
                         </DropdownMenuLabel>
                         
                        <DropdownMenuItem>
                          <Link className='flex items-center justify-start gap-4' to={"/#"}><Icon icon="mage:shopping-bag" width="30" height="30" />My Order</Link>
                          </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link className='flex items-center justify-start gap-4' to={"/#"}><Icon icon="material-symbols-light:cancel-outline" width="30" height="30" />My Cancellation</Link>
                          </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link className='flex items-center justify-start gap-4' to={"/#"}><Icon icon="stash:star" width="30" height="30" /> My Reviews</Link>
                         </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link className='flex items-center justify-start gap-4' to={"#"}><Icon icon="tabler:logout-2" width="30" height="30" /> Log Out</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    
                  
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Toggle Button */}
        <label ref={themeButton} htmlFor="toggleB" className="flex items-center cursor-pointer absolute top-2 right-5">
          {/* toggle */}
          <div className="relative">
            {/* input */}
            <input onChange={handleChange} type="checkbox" id="toggleB" className="sr-only" />
            {/* line */}
            <div className="block bg-gray-600 w-14 h-8 rounded-full" />
            {/* dot */}
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
          </div>
          {/* label */}
        </label>



        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <a
                      href={link.to}
                      className="block px-4 py-3 font-semibold text-base dark:bg-slate-600 dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className=' w-full ' variant="outline">Mood</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem onClick={() => handleTheme("device")} value="top"> Device </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem onClick={() => handleTheme("light")} value="bottom"> Light </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem onClick={() => handleTheme("dark")} value="right"> Dark </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </ul>
            </div>
          </div>
        )}

        {/* Search Dropdown */}
        {isSearchOpen && (
          <div className="bg-white lg:hidden dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="What are you looking for?"
                    className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-amber-50 dark:placeholder-gray-400"
                    autoFocus
                  />
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    aria-label="Search"
                  >
                    <Search className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Popular Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {['Electronics', 'Fashion', 'Home & Garden', 'Sports'].map((term) => (
                      <button
                        key={term}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm dark:text-amber-50 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}