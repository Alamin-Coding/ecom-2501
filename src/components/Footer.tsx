import React from 'react';
import {facebook, instagram, twitter, linkedin} from "../constant/constant.ts"
import { Link } from 'react-router';
// Tailwind CSS classes are used directly within the className attribute

const Footer: React.FC = () => {
  
  const year= new Date().getFullYear()

  return (
    <footer className="bg-black text-text pt-20 pb-10 mt-[140px]">
      <div className="container mx-auto px-4">
        
        {/* --- Main Grid Layout for 5 Columns --- */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8  pb-12">
          
          {/* 1. Exclusive (Subscribe Column) */}
          <div>
            <h3 className="text-2xl font-bold font-inter mb-6">Exclusive</h3>
            <h4 className="text-xl font-poppins font-medium mb-4">Subscribe</h4>
            <p className="text-sm mb-4">Get 10% off your first order</p>
            
            {/* Input with Icon */}
            <div className="relative border border-white rounded-sm w-full max-w-[200px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white text-sm py-2 pl-3 pr-10 focus:outline-none w-full"
              />
              <button className="absolute right-0 top-0 h-full px-2">
                {/* SVG for Send/Arrow Icon */}
                <img src="send.svg" alt="icon" />
              </button>
            </div>
          </div>

          {/* 2. Support Column */}
          <div>
            <h3 className="text-2xl font-inter font-bold mb-6">Support</h3>
            <p className="  mb-4">
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-sm mb-4">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          {/* 3. Account Column */}
          <div>
            <h3 className="text-2xl font-inter font-bold mb-6">Account</h3>
            <ul className="space-y-4  ">
              <li><Link to="/account" >My Account</Link></li>
              <li><Link to="/signup" >Login / Register</Link></li>
              <li><Link to="/cart" >Cart</Link></li>
              <li><Link to="/wishlist" >Wishlist</Link></li>
              <li><Link to="/shop" >Shop</Link></li>
            </ul>
          </div>

          {/* 4. Quick Link Column */}
          <div>
            <h3 className="text-2xl font-inter font-bold mb-6">Quick Link</h3>
            <ul className="space-y-4  ">
              <li><a href="#" >Privacy Policy</a></li>
              <li><a href="#" >Terms Of Use</a></li>
              <li><a href="#" >FAQ</a></li>
              <li><Link to="contact" >Contact</Link></li>
            </ul>
          </div>

          {/* 5. Download App Column */}
          <div>
            <h3 className="text-2xl font-inter font-bold mb-6">Download App</h3>
            <p className="text-xs mb-2 text-gray-400">Save $3 with App New User Only</p>
            
            {/* QR Code and App Links */}
            <div className="flex  space-x-2">
              <div >
                <img src="Qr.svg" alt="qr code" />
                </div> {/* QR Code placeholder */}
              <div className="flex flex-col space-x-2">
                <a href="#" > <img src="playstore.svg" alt=" icon" /></a>
                <a href="#" > <img src="appstore.svg" alt=" icon" /></a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-4">
              <a href="#" > <img src={facebook} alt="icon" /></a> 
              <a href="#" > <img src={instagram} alt="icon" /></a> 
              <a href="#" > <img src={twitter} alt="icon" /></a> 
              <a href="#" > <img src={linkedin} alt="icon" /></a> 
              
            </div>
          </div>
        </div>
        
      </div>

        {/* --- Copyright Section --- */}
        <div className="text-center pt-4 text-gray-500 border-t border-gray-700 text-sm">
          <p>&copy; Copyright Rimel {year}. All right reserved</p>
        </div>
    </footer>
  );
};

export default Footer;