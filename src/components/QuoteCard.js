import React from "react";

const QuoteCard = ({ name, photo, buyer, quote, last = false, style }) => {
  return (
    <div
      className={`bg-[#502050] p-8 rounded-lg text-left ${
        last ? "lg:mb-4" : "mb-4 lg:mr-8"
      } ${style}`}
    >
      <div className="flex items-center">
        <img src={photo} alt={name} className="rounded-full w-8" />
        <div className="ml-3">
          <h4 className="text-sm text-white font-bold">{name}</h4>
          <p className="text-[#ee68a4] text-xs">{buyer}</p>
        </div>
      </div>
      <p className="text-xs mt-4 text-[#f7f2f7]">"{quote}"</p>
    </div>
  );
};

export default QuoteCard;
