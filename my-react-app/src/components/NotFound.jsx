// src/components/NotFound.jsx

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      
      {/* Content */}
      <div className="animate-fadeInUp text-center">
        
        {/* Icon */}
        <div className="mb-4 text-7xl">
          🚧
        </div>

        {/* 404 */}
        <h1 className="font-poppins text-6xl font-bold text-blue-700 md:text-7xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-2 font-poppins text-2xl font-semibold text-gray-700">
          Ups! Halaman Tidak Ditemukan
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md font-poppins text-lg text-gray-600">
          Sepertinya kamu nyasar nih..
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 font-poppins text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-500"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;