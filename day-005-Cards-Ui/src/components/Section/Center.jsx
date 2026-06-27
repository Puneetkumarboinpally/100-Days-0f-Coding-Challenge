import React from "react";

const Center = ({ company, date, post, tag1, tag2 }) => {
  return (
    <div className="h-48 mt-6">
      <h2 className=" font-bold text-lg">
        {company}
        <span className="px-1 text-xs font-normal text-gray-600 small">
          {date}
        </span>
      </h2>
      <h1 className="font-bold text-2xl mb-2">{post}</h1>
      <button className="py-1 px-2 bg-gray-200 text-sm mr-2 font-semibold rounded-md">
        {tag1}
      </button>
      <button className="py-1 px-2 bg-gray-200 text-sm font-semibold rounded-md">
        {tag2}
      </button>
    </div>
  );
};

export default Center;
