import React, { useState } from 'react';
import fruitCart from '../assets/shopping-cart-icon.svg';
import leafeImage from '../assets/leaf.svg';
import mobileMenuIcon from '../assets/mobile-menu.svg';
import fruitCartWhite from '../assets/shopping-cart-icon-white.png';
import { FaCartShopping } from "react-icons/fa6";

function Nav() {
  const [mobileMenuDiv, setMobileMenuDiv] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuDiv(!mobileMenuDiv); // Toggle between true and false
  };

  return (
    <section>
      <div className='relative w-[90%] mx-auto z-10' data-aos="fade-down">
      <div>
        <div className='flex justify-between py-10 items-center space-x-4'>
          <div className='font-bold text-2xl  flex'>
            <p className='flex space-x-2'>
              <span className='text-[#de2c4d] inline'>FRUIT</span> <span className='text-[#fb923c] inline'>STORE</span>
              {/* <img src={leafeImage} alt="leaf"  className='inline ml-2 w-[30px]' /> */}
            </p>
          </div>
          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <ul className='flex space-x-12 items-center text-lg'>
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Shop</li>
              <li>Contacts</li>
              <li><FaCartShopping /></li>
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className='block md:hidden'>
            <img 
              src={mobileMenuIcon} 
              alt="menu icon" 
              width="50px" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle mobile menu" 
            />
          </div>
        </div>
        {mobileMenuDiv && (
          <div className='block md:hidden bg-[#de2c4d] text-white p-4 rounded-2xl absolute top-24 z-10 w-full'>
          <ul className='flex flex-col space-y-12 items-center text-2xl'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contacts</li>
            <li><FaCartShopping /></li>
          </ul>
        </div>
        
        )}
        </div>
      </div>
    </section>
  );
}

export default Nav;
