// src/components/SocialFloatingButton.jsx

import { useState } from "react";

import {
  FaWhatsapp,
  FaInstagram,
  FaRulerCombined,
} from "react-icons/fa";

import sizeChartImage from "/src/assets/sizechart.jpg";

export default function SocialFloatingButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end space-y-3">
        
        {/* WhatsApp */}
        <a
          href="https://wa.me/628123456789"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="rounded-full bg-green-500 p-3 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-green-600"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/akunmu"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="rounded-full bg-pink-500 p-3 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-pink-600"
        >
          <FaInstagram size={20} />
        </a>

        {/* Size Chart */}
        <button
          onClick={() => setShowModal(true)}
          title="Size Chart"
          className="rounded-full bg-gray-700 p-3 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-gray-800"
        >
          <FaRulerCombined size={20} />
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          
          {/* Modal Box */}
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-4 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-3 top-3 text-gray-500 transition duration-200 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={sizeChartImage}
              alt="Size Chart"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}