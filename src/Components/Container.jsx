import React, { useState } from "react";
import ContestCard from "./ContestCard";
import { X, Zap } from "lucide-react";

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-[9999] bottom-10 right-10 font-sans">
      {isOpen && (
        <div className="mb-4 w-80 animate-in fade-in zoom-in duration-200">
          <ContestCard onClose={() => setIsOpen((prev) => !prev)} />
        </div>
      )}

      {/* BUTTON (ALWAYS CLICKABLE) */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg
          transition-all duration-300
          ${
            isOpen
              ? "bg-gray-300 text-gray-700"
              : "bg-red-600 text-white hover:bg-red-700 hover:scale-110"
          }
        `}
        aria-label={isOpen ? "Close Details" : "Open Details"}
      >
        {isOpen ? <X size={24} /> : <Zap size={24} />}
      </button>
    </div>
  );
};

export default Container;
