import React from "react";

import heroImg from "../assets/all1.jpg";

export default function HeroBanner() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden sm:h-[80vh] md:h-screen">
      
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero Banner"
        className="h-full w-full object-cover object-center sm:object-top"
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      {/*
      <div className="absolute bottom-16 left-10 z-10 text-white">
        <div className="rounded bg-black/50 p-4 backdrop-blur-sm">
          
          <h1 className="font-poppins text-2xl font-bold md:text-4xl">
            Kemeja Cocoon Katun Lengan Panjang
          </h1>

          <p className="mt-2">
            Item Pre-Launch sudah tersedia.
            <br />
            Grand Launch: 5 September
          </p>

          <p className="mt-4 text-xl font-semibold text-white">
            Rp399.000
          </p>
        </div>
      </div>
      */}

      {/* Bottom Navigation Buttons */}
      {/*
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 transform gap-6">
        
        <button className="rounded-full bg-white p-3 shadow-md">
          <i className="fa fa-home text-black"></i>
        </button>

        <button className="rounded-full bg-white p-3 shadow-md">
          <i className="fa fa-search text-black"></i>
        </button>

        <button className="rounded-full bg-white p-3 shadow-md">
          <i className="fa fa-user text-black"></i>
        </button>
      </div>
      */}
    </div>
  );
}