import React from "react";
import Stars from "./Stars";

const StarSection = ({ starsNo, name, last = false, Style }) => {
  return (
    <div
      className={`bg-[#f7f2f7] px-5 py-4 rounded-md flex flex-col justify-center items-center 
      ${last ? " " : "mb-4"} lg:flex-row lg:justify-start ${Style}`}
    >
      <Stars selected={starsNo} />
      <p className="font-bold text-[#502050] mt-2 text-sm lg:ml-4">
        Rated {starsNo} Stars in {name}
      </p>
    </div>
  );
};

export default StarSection;
