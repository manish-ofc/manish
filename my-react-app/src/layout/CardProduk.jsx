import React, { useState } from "react";

// import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

const colorOptions = [
  {
    color: "#034880ff",
    images: [
      "./src/assets/cardproduklanding/poloblue1.jpg",
      "./src/assets/cardproduklanding/poloblue2.jpg",
      "./src/assets/cardproduklanding/poloblue3.jpg",
    ],
  },
  {
    color: "#c09382ff",
    images: [
      "./src/assets/cardproduklanding/polobrown1.jpg",
      "./src/assets/cardproduklanding/polobrown2.jpg",
      "./src/assets/cardproduklanding/polobrown1.jpg",
    ],
  },
  {
    color: "#ce5128ff",
    images: [
      "./src/assets/cardproduklanding/polobata1.jpg",
      "./src/assets/cardproduklanding/polobata2.jpg",
      "./src/assets/cardproduklanding/polobata3.jpg",
    ],
  },
  {
    color: "#267c3bff",
    images: [
      "./src/assets/cardproduklanding/poloolive1.jpg",
      "./src/assets/cardproduklanding/poloolive2.jpg",
      "./src/assets/cardproduklanding/poloolive1.jpg",
    ],
  },
];

const CardProduct = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedImages = colorOptions[selectedColorIndex].images;
  const currentImage = selectedImages[selectedImageIndex];

  return (
    <div className="relative flex min-h-screen items-start justify-center overflow-hidden px-4 pt-10 md:px-10">
      
      {/* Decoration */}
      <div className="absolute top-8 left-8 h-1 w-32 rotate-45 bg-black opacity-40"></div>

      <div className="absolute bottom-8 right-8 h-1 w-32 -rotate-45 bg-amber-700 opacity-50"></div>

      <div className="absolute top-20 right-12 h-1 w-24 rotate-12 bg-black opacity-40"></div>

      <div className="absolute bottom-20 left-12 h-1 w-24 -rotate-12 bg-amber-700 opacity-50"></div>

      <div className="absolute top-1/3 left-4 h-12 w-12 rounded-full border-[3px] border-black opacity-40"></div>

      <div className="absolute bottom-1/3 right-4 h-16 w-16 rounded-full border-[3px] border-amber-700 opacity-50"></div>

      {/* Product Card */}
      <div className="z-10 flex w-full max-w-3xl flex-col items-center gap-10 rounded-xl bg-white p-6 shadow-2xl md:flex-row md:p-10">
        
        {/* Product Image */}
        <div className="relative w-full md:w-1/2">
          
          {/* Product Main Image */}
          <img
            src={currentImage}
            alt="Product"
            className="h-auto max-h-[400px] w-full rounded-xl object-cover"
          />

          {/* Thumbnail Images */}
          <div className="relative z-30 mt-6 flex flex-wrap justify-center gap-3">
            
            {selectedImages.map((img, index) => (
              <div key={index} className="group relative">
                
                <img
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`h-16 w-16 cursor-pointer rounded-md border object-cover transition duration-300 md:h-20 md:w-20 ${
                    selectedImageIndex === index
                      ? "ring-2 ring-[#5d4037]"
                      : ""
                  }`}
                />

                {/* Hover Preview */}
                <div className="absolute bottom-full left-1/2 z-50 mb-2 origin-bottom -translate-x-1/2 scale-0 transform transition-transform duration-300 group-hover:scale-100">
                  
                  <img
                    src={img}
                    alt={`thumb-preview-${index}`}
                    className="h-40 w-40 rounded-md border border-gray-300 object-cover shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="w-full md:mt-[-100px] md:w-1/2">
          
          <h2 className="font-poppins text-2xl font-bold text-[#4e342e] md:text-3xl">
            Manish Collection
          </h2>

          <h3 className="font-poppins text-md font-semibold text-[#4e342e] md:text-lg">
            Polo Session
          </h3>

          {/* Price */}
          <p className="mt-4 font-poppins text-xl font-bold text-[#6d4c41]">
            Rp 79.300
          </p>

          {/* Color Picker */}
          <div className="mt-6">
            
            <p className="text-sm font-semibold text-[#4e342e]">
              PILIH WARNA
            </p>

            <div className="mt-3 flex flex-wrap gap-3">
              
              {colorOptions.map((opt, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedColorIndex(idx);
                    setSelectedImageIndex(0);
                  }}
                  style={{ backgroundColor: opt.color }}
                  className={`h-7 w-7 cursor-pointer rounded-full border-2 transition-transform duration-200 ${
                    selectedColorIndex === idx
                      ? "scale-110 border-black"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            
            <p className="mb-2 font-poppins text-sm font-semibold uppercase text-[#5d4037]">
              Deskripsi
            </p>

            <ul className="list-disc space-y-1 pl-4 text-justify font-poppins text-xs text-gray-700 md:text-sm">
              <li>Material: 100% cotton</li>
              <li>Fit: Regular</li>
              <li>Care: Machine wash</li>
            </ul>
          </div>

          {/* Cart Button */}
          {/*
          <button className="mt-8 text-[#5d4037] transition-transform duration-200 hover:scale-110">
            <FaShoppingCart size={32} />
          </button>
          */}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;