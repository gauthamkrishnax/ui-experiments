import React, { useState } from "react";

import { IoIosArrowForward } from "react-icons/io";

const Slider = ({ data }) => {
  const length = data.length - 1;
  let [current, setcurrent] = useState(0);

  const next = () => {
    current + 1 > length ? setcurrent(0) : setcurrent(++current);
  };
  const previous = () => {
    current - 1 < 0 ? setcurrent(length) : setcurrent(--current);
  };

  return (
    <div className="max-w-xl flex items-center flex-col relative font-Inter">
      <div>
        <img
          className="rounded-lg shadow-2xl max-h-64"
          src={data[current].photo}
          alt=""
        />
        <div className="absolute inset-x-0 -mt-4 flex justify-center">
          <button
            className="p-2 bg-white rounded-l-full focus:outline-none focus-visible:ring"
            onClick={previous}
          >
            <IoIosArrowForward className="w-6 h-6 transform rotate-180 focus:outline-none focus-visible:ring" />
          </button>
          <button className="p-2 bg-white rounded-r-full" onClick={next}>
            <IoIosArrowForward className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="max-w-md mt-24 text-center">
        <p className="font-light text-[#202046]">{data[current].quote}</p>
        <h3 className="mt-4 text-[#202046] font-bold">{data[current].name}</h3>
        <p className="font-medium text-[#babacf]">{data[current].job}</p>
      </div>
    </div>
  );
};

export default Slider;
