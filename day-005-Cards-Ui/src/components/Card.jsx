import React from "react";
import Top from "./Section/Top";
import Center from "./Section/Center";
import Bottom from "./Section/Bottom";

const Card = ({ logo, company, date, post, tag1, tag2, pay, location }) => {
  return (
    <div
      className="p-4 bg-white rounded-xl 
    flex flex-col justify-between"
    >
      <Top logo={logo} />
      <Center
        post={post}
        date={date}
        company={company}
        tag1={tag1}
        tag2={tag2}
      />
      <Bottom pay={pay} location={location} />
    </div>
  );
};

export default Card;
