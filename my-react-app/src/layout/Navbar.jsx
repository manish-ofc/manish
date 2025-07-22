// src/components/Navbar.jsx
import React, { useState } from 'react';
import { AiOutlineUser , AiOutlineHeart, AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link
import LogoStore from '/src/assets/manish.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/galleri' },
    { name: 'About Us', path: '/about' },
    // { name: 'Collection', path: '/collection' },
  ];

  return (
    <div className="w-full font-poppins text-sm bg-white shadow-md font-bold">
      {/* Top Bar */}
      <div className="bg-black overflow-hidden whitespace-nowrap">
        <div className="inline-block text-white text-xs tracking-wide px-6 py-2 animate-scroll w-max">
          MANISH BY ZULFIMANHAJ • MANISH BY ZULFIMANHAJ • MANISH BY ZULFIMANHAJ • MANISH BY ZULFIMANHAJ • MANISH BY ZULFIMANHAJ • MANISH BY ZULFIMANHAJ • MANISH BY ZULFIMANHAJ 
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
         <img 
          src={LogoStore} 
          alt="Our Website Store" 
          className="mb-2 w-[100px] sm:w-[100px] md:w-[100px]" 
        />
      {/* <p>Let your outfit speak — loud and bold</p> */}

      <p>Let your outfit speak — loud and bold.</p>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4 text-lg">
          <AiOutlineUser  className="cursor-pointer hover:text-[#00df9a] transition duration-300 transform hover:scale-110" />
          <AiOutlineHeart className="cursor-pointer hover:text-[#00df9a] transition duration-300 transform hover:scale-110" />
          <div className="relative cursor-pointer">
            <AiOutlineShopping className="hover:text-[#00df9a] transition duration-300 transform hover:scale-110" />
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50" onClick={toggleNav}>
          {navOpen ? <AiOutlineClose size={24} className="text-gray-800" /> : <AiOutlineMenu size={24} className="text-gray-800" />}
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex justify-between items-center px-6 py-4">
        <ul className="flex gap-6 uppercase tracking-widest font-poppins font-italic"> 
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-[#00df9a] flex items-center gap-1 transition duration-300">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-white z-40 p-6 transform duration-300 shadow-lg transition-transform ease-in-out ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <img 
          src={LogoStore} 
          alt="Our Website Store" 
          className="mb-6 w-[200px] sm:w-[250px] md:w-[300px]" 
        />
        <ul className="space-y-4 uppercase tracking-widest">
          {navItems.map((item, index) => (
            <li key={index} className="border-b border-gray-300 pb-2 flex items-center gap-2 cursor-pointer hover:text-[#00df9a] transition duration-300 transform hover:scale-105">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-6 text-xl">
          <AiOutlineUser  className="cursor-pointer hover:text-[#00df9a] transition duration-300 transform hover:scale-110" />
          <AiOutlineHeart className="cursor-pointer hover:text-[#00df9a] transition duration-300 transform hover:scale-110" />
          <div className="relative cursor-pointer">
            <AiOutlineShopping className="hover:text-[#00df9a] transition duration-300 transform hover:scale-110" />
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
