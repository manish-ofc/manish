import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

// Polo Images
import PoloBata from "/src/assets/cardproduklanding/polobata3.jpg";
import PoloBlue from "/src/assets/cardproduklanding/poloblue3.jpg";
import PoloBrown from "/src/assets/cardproduklanding/polobrown2.jpg";
import PoloOlive from "/src/assets/cardproduklanding/poloolive2.jpg";

// Shirt Images
import ShirtBlack from "/src/assets/cardshirt/shirtblack.jpg";
import ShirtBrown from "/src/assets/cardshirt/shirtbrown.jpg";
import ShirtOlive from "/src/assets/cardshirt/shirtolive.jpg";

export default function GallerySlider() {
  const [isPolo, setIsPolo] = useState(true);

  // Polo Collection
  const poloSlides = [
    { image: PoloBata, title: "Brick Red Boldness" },
    { image: PoloBlue, title: "Beyond Just Blue" },
    { image: PoloBrown, title: "Brown Speaks Class" },
    { image: PoloOlive, title: "Subtle Strong Olive" },
  ];

  // Shirt Collection
  const shirtSlides = [
    { image: ShirtBlack, title: "Vibrant Black Shirt" },
    { image: ShirtBrown, title: "Classic Brown Shirt" },
    { image: ShirtBlack, title: "Vibrant Black Shirt" },
    { image: ShirtOlive, title: "Fresh Olive Shirt" },
  ];

  // Dynamic Slides
  const slides = isPolo ? poloSlides : shirtSlides;

  return (
    <section className="relative bg-white py-24">
      
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="pb-16 text-center">
          
          <h2 className="mb-4 font-poppins text-3xl font-bold text-gray-900">
            Our Collection
          </h2>

          <p className="font-poppins text-lg text-gray-600">
            Discover our exclusive collection of{" "}
            {isPolo ? "polo shirts" : "shirts"} that blend style and
            functionality.
          </p>

          {/* Toggle Button */}
          <div className="mt-6">
            
            <div className="inline-flex items-center rounded-full bg-gray-200 p-1">
              
              <button
                onClick={() => setIsPolo(true)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isPolo
                    ? "bg-white font-poppins font-semibold text-gray-900 shadow"
                    : "text-gray-500"
                }`}
              >
                Polo
              </button>

              <button
                onClick={() => setIsPolo(false)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  !isPolo
                    ? "bg-white font-poppins font-semibold text-gray-900 shadow"
                    : "text-gray-500"
                }`}
              >
                Shirt
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            1920: { slidesPerView: 3 },
            1400: { slidesPerView: 3 },
            900: { slidesPerView: 3 },
            200: { slidesPerView: 2 },
          }}
          className="pt-6"
        >
          
          {slides.concat(slides).map((item, index) => (
            <SwiperSlide key={index}>
              
              <div className="mx-auto grid max-w-[319px]">
                
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-2 w-full rounded-xl object-cover"
                />

                <div className="-mt-[10px] text-center">
                  
                  <h5 className="font-poppins text-xl leading-loose text-gray-900">
                    {item.title}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}