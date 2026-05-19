import React from "react";

const OrderButton = () => {
  return (
    <>
      <button
        className="relative flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 px-5 py-3 font-poppins font-bold tracking-wide text-amber-50 transition-all duration-300 hover:scale-105"
        style={{
          animation: "pulse-glow 2s infinite",
        }}
      >
        ORDER NOW

        {/* Icon */}
        <svg
          className="ml-2 h-5 w-5"
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
          />
        </svg>
      </button>

      {/* Animation */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(25, 20, 20, 0.7);
          }

          70% {
            box-shadow: 0 0 0 10px rgba(251, 146, 60, 0);
          }
        }

        button::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          transform: rotate(45deg);
          transition: all 0.5s;
        }

        button:hover::after {
          animation: shine 1.5s;
          opacity: 0;
        }

        @keyframes shine {
          0% {
            left: -50%;
          }

          100% {
            left: 150%;
          }
        }
      `}</style>
    </>
  );
};

export default OrderButton;