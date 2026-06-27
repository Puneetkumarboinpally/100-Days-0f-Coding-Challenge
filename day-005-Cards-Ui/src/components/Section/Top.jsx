import React from "react";
import { Bookmark } from "lucide-react";

const Top = ({ logo }) => {
  return (
    <div className="flex justify-between items-center">
      <img
        src={logo}
        className="w-10 h-10 rounded-full p-1 border border-gray-400 "
      />
      <div className="border-[1.5px] border-gray-200 py-1 px-2 rounded-md font-bold flex items-center">
        Save
        <span className="px-1 text-gray-600">
          <Bookmark size={16} />
        </span>
      </div>
    </div>
  );
};

export default Top;
