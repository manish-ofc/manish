// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      {/* Emoji dan Heading */}
      <div className="text-center animate-fadeInUp">
        <div className="text-7xl mb-4">🚧</div>
        <h1 className="text-6xl font-extrabold text-blue-700 font-poppins">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-2 font-poppins">
          Ups! Halaman Tidak Ditemukan
        </h2>

        {/* Deskripsi */}
        <p className="text-gray-600 mt-4 text-lg max-w-md mx-auto font-poppins">
          Sepertinya kamu nyasar nih..
        </p>

        {/* Tombol kembali */}
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 hover:scale-105 transition-all duration-300 font-poppins"
        >
          🔙 Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
