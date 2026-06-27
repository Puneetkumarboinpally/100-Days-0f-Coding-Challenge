import React from "react";

const bottom = ({ pay, location }) => {
  return (
    <div className="p-1 pt-4 flex justify-between items:center border-t border-gray-200">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold ">{pay}</h3>
        <p className="text-xs font-medium text-gray-500">{location}</p>
      </div>
      <button
        className="py-1 px-4 bg-black text-white rounded-md calculate-btn
      hover:translate-y-[-2px] transition-transform duration-300"
      >
        Apply now
      </button>
    </div>
  );
};

export default bottom;
