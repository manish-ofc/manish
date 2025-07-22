import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // install lucide jika belum

import PoloBata from '/src/assets/cardproduklanding/polobata3.jpg';
import PoloBlue from '/src/assets/cardproduklanding/poloblue3.jpg';
import PoloBrown from '/src/assets/cardproduklanding/polobrown2.jpg';
import PoloOlive from '/src/assets/cardproduklanding/poloolive2.jpg';

import ShirtBlack from '/src/assets/cardshirt/shirtblack.jpg'; // Ganti dengan path gambar shirt
import ShirtBrown from '/src/assets/cardshirt/shirtbrown.jpg'; // Ganti dengan path gambar shirt
import ShirtOlive from '/src/assets/cardshirt/shirtolive.jpg'; // Ganti dengan path gambar shirt

export default function GallerySlider() {
  const [isPolo, setIsPolo] = useState(true); // State untuk menentukan jenis gambar

  const poloSlides = [
    { image: PoloBata, title: 'Brick Red Boldness' },
    { image: PoloBlue, title: 'Beyond Just Blue' },
    { image: PoloBrown, title: 'Brown Speaks Class' },
    { image: PoloOlive, title: 'Subtle Strong Olive' },
  ];

  const shirtSlides = [
    { image: ShirtBlack, title: 'Vibrant Black Shirt' },
    { image: ShirtBrown, title: 'Classic Brown Shirt' },
    { image: ShirtBlack, title: 'Vibrant Black Shirt' },
    { image: ShirtOlive, title: 'Fresh Olive Shirt' },

  ];

  const slides = isPolo ? poloSlides : shirtSlides; // Pilih slides berdasarkan state

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center pb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">Our Collection</h2>
          <p className="text-lg text-gray-600 font-poppins">
            Discover our exclusive collection of {isPolo ? 'polo shirts' : 'shirts'} that blend style and functionality.
          </p>
          {/* Saklar untuk beralih antara Polo dan Shirt */}
         <div className="mt-4">
  <div div className="inline-flex items-center bg-gray-200 rounded-full p-1">
    <button
      onClick={() => setIsPolo(true)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
        ${isPolo ? 'bg-white shadow text-gray-900 font-poppins font-semibold' : 'text-gray-500'}`}
    >
      Polo
    </button>
    <button
      onClick={() => setIsPolo(false)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
        ${!isPolo ? 'bg-white shadow text-gray-900 font poppins font-semibold' : 'text-gray-500'}`}
    >
      Shirt
    </button>
  </div>
</div>

        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          autoplay={{ delay: 3000 }}
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
              <div className="max-w-[319px] grid mx-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover rounded-xl mb-2"
                />
                <div className="mt-[-10px] text-center">
                  <h5 className="text-xl text-gray-900 leading-loose font-poppins">
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
