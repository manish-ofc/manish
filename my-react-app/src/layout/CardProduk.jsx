import React, { useState } from 'react';
// import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';

const colorOptions = [
  {
    color: '#034880ff',
    images: [
      // 'src/assets/cardproduklanding/poloblue.jpg',
      './src/assets/cardproduklanding/poloblue1.jpg',
      './src/assets/cardproduklanding/poloblue2.jpg',
      './src/assets/cardproduklanding/poloblue3.jpg',
    ],
  },
  {
    color: '#c09382ff',
    images: [
      // 'src/assets/cardproduklanding/poloblue.jpg',
      './src/assets/cardproduklanding/polobrown1.jpg',
      './src/assets/cardproduklanding/polobrown2.jpg',
      './src/assets/cardproduklanding/polobrown1.jpg',
    ],
  },
  {
    color: '#ce5128ff',
    images: [
      // 'src/assets/cardproduklanding/poloblue.jpg',
      './src/assets/cardproduklanding/polobata1.jpg',
      './src/assets/cardproduklanding/polobata2.jpg',
      './src/assets/cardproduklanding/polobata3.jpg',
    ],
  },
  {
    color: '#267c3bff',
    images: [
      // 'src/assets/cardproduklanding/poloblue.jpg',
      'src/assets/cardproduklanding/poloolive1.jpg',
      'src/assets/cardproduklanding/poloolive2.jpg',
      'src/assets/cardproduklanding/poloolive1.jpg',
    ],
  },
];

const CardProduct = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedImages = colorOptions[selectedColorIndex].images;
  const currentImage = selectedImages[selectedImageIndex];

  return (
    <div className="relative flex justify-center items-start pt-10 px-4 md:px-10 min-h-screen overflow-hidden ">
      {/* Dekorasi */}
      <div className="absolute top-8 left-8 w-32 h-1 bg-black rotate-45 opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-32 h-1 bg-amber-700 -rotate-45 opacity-50"></div>
      <div className="absolute top-20 right-12 w-24 h-1 bg-black rotate-12 opacity-40"></div>
      <div className="absolute bottom-20 left-12 w-24 h-1 bg-amber-700 -rotate-12 opacity-50"></div>
      <div className="absolute top-1/3 left-4 w-12 h-12 border-[3px] border-black rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 right-4 w-16 h-16 border-[3px] border-amber-700 rounded-full opacity-50"></div>

      {/* Card */}
      <div className="max-w-3xl bg-white rounded-xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 z-10 w-full">
        {/* Gambar */}
        <div className="relative w-full md:w-1/2">
          {/* <div className="absolute top-4 left-4 text-white bg-[#5d4037] p-3 rounded-full cursor-pointer z-20">
            <FaArrowLeft />
          </div> */}

          <img
            src={currentImage}
            alt="Product"
            className="rounded-xl object-cover w-full h-auto max-h-[400px]"
          />

          {/* Thumbnail */}
          <div className="flex justify-center mt-6 gap-3 flex-wrap relative z-30">
            {selectedImages.map((img, index) => (
              <div key={index} className="relative group">
                <img
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-16 h-16 md:w-20 md:h-20 border rounded-md object-cover cursor-pointer transition duration-300 ${
                    selectedImageIndex === index ? 'ring-2 ring-[#5d4037]' : ''
                  }`}
                />
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom z-50">
                  <img
                    src={img}
                    alt={`thumb-preview-${index}`}
                    className="w-40 h-40 object-cover rounded-md shadow-xl border border-gray-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
       <div className="w-full md:w-1/2 md:mt-[-100px] ">
  <h2 className="text-2xl md:text-3xl font-bold text-[#4e342e] font-poppins">Manish Collection</h2>
  <h3 className="text-md md:text-lg font-semibold text-[#4e342e] font-poppins">Polo Session</h3>

  <p className="text-xl text-[#6d4c41] font-bold mt-4 font-poppins">Rp 79.300</p>

  <div className="mt-6">
    <p className="text-[#4e342e] text-sm font-semibold">PILIH WARNA</p>
    <div className="flex gap-3 flex-wrap mt-3">
      {colorOptions.map((opt, idx) => (
        <div
          key={idx}
          className={`w-7 h-7 rounded-full border-2 cursor-pointer transition-transform duration-200 ${
            selectedColorIndex === idx ? 'border-black scale-110' : 'border-gray-300'
          }`}
          style={{ backgroundColor: opt.color }}
          onClick={() => {
            setSelectedColorIndex(idx);
            setSelectedImageIndex(0);
          }}
        />
      ))}
    </div>
  </div>

  <div className="mt-6">
    <p className="text-sm text-[#5d4037] font-semibold mb-2 uppercase font-poppins">Deskripsi</p>
    <ul className="text-gray-700 list-disc pl-4 text-xs md:text-sm space-y-1 font-poppins text-justify">
      <li>Material: 100% cotton</li>
      <li>Fit: Regular</li>
      <li>Care: Machine wash</li>
    </ul>
  </div>


          {/* Icon Keranjang */}
          {/* <button className="mt-8 text-[#5d4037] hover:scale-110 transition-transform duration-200">
            <FaShoppingCart size={32} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
