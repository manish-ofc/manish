// src/components/SocialFloatingButton.jsx

import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaRulerCombined } from 'react-icons/fa';
import sizeChartImage from '/src/assets/sizechart.jpg'; // Ganti sesuai gambar kamu

export default function SocialFloatingButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end space-y-3">
        <a
          href="https://wa.me/628123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition transform hover:scale-110"
          title="WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>

        <a
          href="https://instagram.com/akunmu"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full shadow-lg transition transform hover:scale-110"
          title="Instagram"
        >
          <FaInstagram size={20} />
        </a>

        <button
          onClick={() => setShowModal(true)}
          className="bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full shadow-lg transition transform hover:scale-110"
          title="Size Chart"
        >
          <FaRulerCombined size={20} />
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg max-w-sm w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <img
              src={sizeChartImage}
              alt="Size Chart"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
