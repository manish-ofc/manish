import React from "react";
import heroImg from "../assets/all1.jpg"; // Ganti path sesuai gambarmu

export default function HeroBanner() {
  return (
     <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-cover object-center sm:object-top"
      />

      {/* Gradasi Putih Parallax */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />

      {/* Konten Teks */}
      {/* <div className="absolute bottom-16 left-10 z-10 text-white">
        <div className="bg-black bg-opacity-50 p-4 rounded">
          <h1 className="text-2xl md:text-4xl font-bold font-poppins">Kemeja Cocoon Katun Lengan Panjang</h1>
          <p className="mt-2">Item Pre-Launch sudah tersedia.<br />Grand Launch: 5 September</p>
          <p className="mt-4 text-xl font-semibold text-white">Rp399.000</p>
        </div>
      </div> */}

      {/* Tombol bawah */}
      {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
        <button className="bg-white rounded-full p-3 shadow-md">
          <i className="fa fa-home text-black"></i>
        </button>
        <button className="bg-white rounded-full p-3 shadow-md">
          <i className="fa fa-search text-black"></i>
        </button>
        <button className="bg-white rounded-full p-3 shadow-md">
          <i className="fa fa-user text-black"></i>
        </button>
      </div> */}
    </div>
  );
}
