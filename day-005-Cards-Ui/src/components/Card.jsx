import React from "react";
import Top from "./Section/Top";
import Center from "./Section/center";
import Bottom from "./Section/Bottom";
const Card = () => {
  return (
    <div className="p-10 bg-blue-300">
      <Top />
      <Center />
      <Bottom />
    </div>
  );
};

export default Card;
