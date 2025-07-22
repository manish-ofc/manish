import React from "react";
import aboutImg from "../assets/all1.jpg"; // Gunakan gambar yang sama
// import logomanish from "../assets/manish.jpg"; // Ganti dengan logo yang sesuai

export default function AboutUs() {
  return (
    <section className="w-full">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-amber-800 flex items-center justify-center text-white p-8 text-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Welcome to Our Brand</h2>
            <p className="mt-2 text-base md:text-lg">
              A place to find comfort and confidence in what you wear every day.
            </p>
          </div>
        </div>
        <div className="h-72 md:h-auto">
          <img src={aboutImg} alt="About Top" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Middle Row */}
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex flex-col md:flex-row w-full">
          <div className="bg-teal-600 flex justify-center items-center p-10 text-white font-bold text-3xl tracking-wide w-full md:w-1/3">
            About Us
          </div>

          <div className="bg-gray-100 p-10 text-gray-800 text-base md:text-lg leading-relaxed w-full md:w-1/3 flex items-center justify-center">
            <div>
              <p>
                Sejak 2023, brand kami hadir untuk mendukung setiap individu yang ingin tampil nyaman dan percaya diri. Kami percaya bahwa pakaian bukan hanya soal gaya, tapi juga identitas dan ekspresi diri.
              </p>
              <p className="mt-4">
                Melalui koleksi kami yang terus berkembang, kami berkomitmen menghadirkan produk dengan kualitas terbaik, desain yang thoughtful, dan nilai keberlanjutan. Produk kami terinspirasi dari kebutuhan sehari-hari—simpel, fungsional, dan penuh makna.
              </p>
            </div>
          </div>

          <div className="bg-gray-300 p-10 text-gray-700 text-base md:text-lg leading-relaxed w-full md:w-1/3 flex items-center justify-center">
            <p className="max-w-md">
              {/* Optional additional content here */}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-72 md:h-auto order-2 md:order-1">
          <img src={aboutImg} alt="About Bottom" className="w-full h-full object-cover" />
        </div>
        <div className="bg-blue-900 flex items-center justify-center p-10 text-white text-center order-1 md:order-2">
          <p className="max-w-md text-base md:text-lg">
            Kami ingin mendorong setiap orang agar berani menunjukkan siapa dirinya, mengenakan apa yang membuatnya merasa baik, dan terus bertumbuh bersama komunitas kami.
          </p>
        </div>
      </div>
    </section>
  );
}
