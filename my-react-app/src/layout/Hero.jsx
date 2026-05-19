// src/components/layout/Hero.jsx

import baju from "/src/assets/kemeja.png";

// import heroText from "/src/assets/manish.png";

import DecorationElements from "../ui/DecorationElement";
import FollowCursor from "../ui/FollowCursor";

import ButtonOrder from "../common/ButtonOrder";

export default function Hero() {
  return (
    <main className="relative h-screen overflow-hidden bg-white">
      
      {/* Decoration */}
      {/* <DecorationElements /> */}
      {/* <FollowCursor /> */}

      {/* Hero Content */}
      <div className="flex h-full items-center justify-center px-4 pt-4 md:px-8">
        
        <div className="container mx-auto max-w-screen-xl py-10">
          
          <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:gap-12">
            
            {/* Left Content */}
            <div className="flex w-full flex-col items-center gap-4 md:w-2/5 md:items-start">
              
              {/* Hero Text */}
              <div className="ml-8 flex flex-col items-center md:ml-32 md:items-start">
                
                <h2 className="mb-4 text-center font-poppins text-5xl font-bold text-gray-900 md:text-left">
                  <span className="block">Let your</span>
                  <span className="block">outfit speak —</span>
                  <span className="block">loud and bold</span>
                </h2>
              </div>

              {/* Button Order */}
              <div className="w-fit translate-x-6 md:translate-x-24 lg:translate-x-32">
                <ButtonOrder />
              </div>
            </div>

            {/* Product Image */}
            <div className="flex w-full justify-center md:w-3/5">
              
              <img
                src={baju}
                alt="Brand T-shirt"
                className="w-full max-w-sm object-contain md:max-w-md lg:max-w-xl"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}