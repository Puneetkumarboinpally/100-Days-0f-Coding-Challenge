import React from "react";

const Top = () => {
  return (
    <div className="flex justify-between items-center">
      <img
        className="h-10 w-10 rounded-full bg-gray-100 p-1 border-2 border-pink-500"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iQY-eq57eJu8wDzsAvmPcYz2eHFXgxRsgYqR0ojp6A&s"
      />
      <div className="py-1 px-2 border rounded-lg">
        Save <span>❤️</span>
      </div>
    </div>
  );
};

export default Top;
