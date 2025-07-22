import React from 'react';

const OrderButton = () => {
  return (
    <button 
      className="relative overflow-hidden px-2 py-1 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 rounded-lg font-bold tracking-wide hover:scale-105 transition-all duration-300 font-poppins flex items-center justify-center"
      style={{
        animation: 'pulse-glow 2s infinite',
      }}
    >
      ORDER NOW
      <svg 
        className="w-5 h-5 ml-2 inline-block" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        ></path>
      </svg>
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(25, 20, 20, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(251, 146, 60, 0); }
        }
        button:after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
        //   background: linear-gradient(to right, transparent, rgba(255, 251, 243, 0.81), transparent);
          transform: rotate(45deg);
          transition: all 0.5s;
        }
        button:hover:after {
          animation: shine 1.5s;
          opacity: 0;
        }
        @keyframes shine {
          0% { left: -50%; }
          100% { left: 150%; }
        }
      `}</style>
    </button>
  );
};

export default OrderButton;
