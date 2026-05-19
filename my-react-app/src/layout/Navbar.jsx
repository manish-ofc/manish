// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import LogoStore from "/src/assets/manish.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/galleri" },
    { name: "About Us", path: "/about" },
    // { name: "Collection", path: "/collection" },
  ];

  return (
    <div className="w-full bg-white shadow-md font-poppins text-sm font-bold">
      
      {/* Top Bar */}
      <div className="bg-black overflow-hidden whitespace-nowrap">
        <div className="inline-block w-max animate-scroll px-6 py-2 text-xs tracking-wide text-white">
          MANISH BY ZULFIMANHAJ • MANISH BY ZULFIMANHAJ • MANISH BY
          ZULFIMANHAJ • MANISH BY ZULFIMANHAJ • MANISH BY ZULFIMANHAJ •
          MANISH BY ZULFIMANHAJ • MANISH BY ZULFIMANHAJ
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between border-b px-6 py-4">
        
        {/* Logo */}
        <img
          src={LogoStore}
          alt="Our Website Store"
          className="mb-2 w-[100px]"
        />

        {/* Desktop Icons */}
        <div className="hidden items-center gap-4 text-lg md:flex">
          
          <AiOutlineUser className="cursor-pointer transition duration-300 hover:scale-110 hover:text-[#00df9a]" />

          <AiOutlineHeart className="cursor-pointer transition duration-300 hover:scale-110 hover:text-[#00df9a]" />

          <div className="relative cursor-pointer">
            <AiOutlineShopping className="transition duration-300 hover:scale-110 hover:text-[#00df9a]" />

            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
              0
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="z-50 md:hidden" onClick={toggleNav}>
          {navOpen ? (
            <AiOutlineClose size={24} className="text-gray-800" />
          ) : (
            <AiOutlineMenu size={24} className="text-gray-800" />
          )}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden items-center justify-between px-6 py-4 md:flex">
        <ul className="flex gap-6 uppercase tracking-widest font-poppins font-italic">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex cursor-pointer items-center gap-1 transition duration-300 hover:text-[#00df9a]"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-3/4 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        {/* Mobile Logo */}
        <img
          src={LogoStore}
          alt="Our Website Store"
          className="mb-6 w-[200px] sm:w-[250px] md:w-[300px]"
        />

        {/* Mobile Navigation */}
        <ul className="space-y-4 uppercase tracking-widest">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex cursor-pointer items-center gap-2 border-b border-gray-300 pb-2 transition duration-300 hover:scale-105 hover:text-[#00df9a]"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icons */}
        <div className="mt-8 flex items-center gap-6 text-xl">
          
          <AiOutlineUser className="cursor-pointer transition duration-300 hover:scale-110 hover:text-[#00df9a]" />

          <AiOutlineHeart className="cursor-pointer transition duration-300 hover:scale-110 hover:text-[#00df9a]" />

          <div className="relative cursor-pointer">
            <AiOutlineShopping className="transition duration-300 hover:scale-110 hover:text-[#00df9a]" />

            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;