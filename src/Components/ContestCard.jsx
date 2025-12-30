import React from 'react';
import { X } from 'lucide-react';

const ContestCard = ({ onClose }) => {
  return (
    // The card itself now has the gray background, rounded corners, and shadow.
    <div className="flex flex-col h-full max-h-[600px] bg-gray-200 p-5 rounded-xl shadow-2xl overflow-hidden">
      
      {/* Header */}
      <div className="mb-5 flex justify-between items-start">
        <div>
          <h2 className="font-bold text-2xl text-gray-800">LeeCheck</h2>
          <p className="text-sm text-gray-600 font-medium mt-1">User :User Name</p>
        </div>
        {/* Close button integrated into the header */}
        <button 
          onClick={onClose} 
          className="p-1.5 hover:bg-gray-300 rounded-full transition-colors text-gray-500"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>

      {/* Scrollable List of Rows */}
      <div className="space-y-3 overflow-y-auto pr-1">
        {/* These are hardcoded examples based on your image. 
            You would replace this with a .map() over your actual data. */}
        <RedDetailRow contestName="Contest Name" result="Result ()" />
        <RedDetailRow contestName="Contest Name" result="Result ()" />
        <RedDetailRow contestName="Contest Name" result="Result ()" />
        <RedDetailRow contestName="Contest Name" result="Result ()" />
        <RedDetailRow contestName="Contest Name" result="Result ()" />
        <RedDetailRow contestName="Contest Name" result="Result ()" />
      </div>

    </div>
  );
};

// A reusable component for the red rows to keep the code clean.
const RedDetailRow = ({ contestName, result }) => (
  <div className="flex justify-between items-center p-4 bg-[#d9534f] text-white rounded-lg text-sm font-semibold shadow-sm">
    <span>{contestName} - :</span>
    <span>{result}</span>
  </div>
);

export default ContestCard;