// src/ui/DecorationElements.jsx

import React from 'react';

const DecorationElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
       {/* Diagonal line elements with animation */}
      <div className="absolute top-12 left-12 w-40 h-0.5 bg-gray-900 rotate-45 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-12 right-12 w-40 h-0.5 bg-amber-600 -rotate-45 opacity-30 animate-pulse delay-300"></div>
      
      {/* Curved decorative elements */}
      <div className="absolute top-32 right-16 w-28 h-28 border-2 border-gray-900 rounded-full opacity-20 animate-spin"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 border-2 border-amber-600 rounded-full opacity-30 animate-[spin_15s_linear_infinite_reverse]"></div>
      
      {/* Floating triangles */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 border-l-2 border-t-2 border-gray-900 transform -rotate-30 opacity-20 animate-float"></div>
      {/* Fashion-themed decorative elements: Hangers */}
      {/* <div className="absolute top-12 left-12 w-8 h-12 bg-gray-900 opacity-20 animate-pulse" style={{clipPath: 'polygon(50% 0%, 20% 100%, 80% 100%)'}}></div> */}
      <div className="absolute bottom-12 right-12 w-8 h-12 bg-amber-600 opacity-30 animate-pulse delay-300" style={{clipPath: 'polygon(50% 0%, 20% 100%, 80% 100%)'}}></div>
      
      {/* Fashion-themed elements: Shirts */}
      <div className="absolute top-32 right-16 w-28 h-28 bg-gray-900 opacity-20 animate-spin" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-amber-600 opacity-30 animate-[spin_15s_linear_infinite_reverse]" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
      
      {/* Fashion-themed elements: Pants */}
      <div className="absolute top-1/4 left-1/4 w-16 h-24 bg-gray-900 transform rotate-30 opacity-20 animate-float" style={{clipPath: 'polygon(30% 0%, 70% 0%, 60% 100%, 40% 100%)'}}></div>
      
      {/* Decorative dots pattern */}
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 grid-rows-8 opacity-10">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-gray-900' : 'bg-amber-600'}`}></div>
        ))}
      </div>
      
      {/* Animated interactive elements */}
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gray-900 rounded-full opacity-30 animate-[spin_5s_linear_infinite] transform origin-center"></div>
    </div>
  );
};

export default DecorationElements;
