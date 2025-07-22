// src/components/layout/Hero.jsx

import baju from '/src/assets/kemeja.png';
// import heroText from '/src/assets/manish.png';
import DecorationElements from '../ui/DecorationElement'; // Impor komponen DecorationElements
import FollowCursor from '../ui/FollowCursor'; // Impor komponen FollowCursor
import ButtonOrder from '../common/ButtonOrder'; // Impor komponen ButtonOrder

export default function Hero() {
  return (
    <main className="bg-white relative overflow-hidden h-screen">
      {/* === Dekorasi === */}
      {/* <DecorationElements /> */}
      {/* <FollowCursor />  */}

      {/* === Hero Content === */}
<div className="flex items-center justify-center h-full pt-4 px-4 md:px-8">
  <div className="container mx-auto py-10 max-w-screen-xl">
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
      
      {/* Kolom Kiri: Hero Text dan Tombol Order */}
      <div className="w-full md:w-2/5 flex flex-col items-center md:items-start gap-4">
      {/* Hero Text Horizontal */}
      <div className="flex flex-col items-center md:items-start ml-8 md:ml-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins text-center md:text-left">
            <span className="block">Let your</span>
            <span className="block">outfit speak —</span>
            <span className="block">loud and bold</span>
          </h2>
        </div>
        
        {/* Tombol Order */}
        <div className="ml-4 md:ml-[100px] lg:ml-[60px] w-fit">
          <ButtonOrder />
        </div>
      </div>

      {/* Gambar Baju */}
      <div className="w-full md:w-3/5 flex justify-center">
        <img
          src={baju}
          alt="Brand T-shirt"
          className="w-full max-w-sm md:max-w-md lg:max-w-xl object-contain"
          style={{ backgroundColor: 'transparent' }}
        />
      </div>

    </div>
  </div>
</div>

    </main>
  );
}
