import React from "react";

const Top = ({ logo }) => {
  return (
    <div className="flex justify-between items-center">
      <img
        src={logo}
        className="w-10 h-10 rounded-full p-1 border border-grey-200 "
      />
      <div className="border-1 py-1 px-2 rounded-md font-bold bg-gray-200 ">
        Save <span>💀</span>
      </div>
    </div>
  );
};

export default Top;
