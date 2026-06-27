import React from "react";

const bottom = ({ pay, location }) => {
  return (
    <div className="p-1 flex justify-between items:center border-t">
      <div>
        <h3>{pay}</h3>
        <p>{location}</p>
      </div>
      <button>Apply now</button>
    </div>
  );
};

export default bottom;
