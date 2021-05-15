import React, { useState } from "react";

import { IoIosArrowForward } from "react-icons/io";

import bg1 from "../images/slider/pattern-bg.svg";
import quoteicon from "../images/slider/pattern-quotes.svg";

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
    <div className="max-w-xl flex flex-col items-center relative font-Inter lg:max-w-5xl lg:flex-row-reverse">
      <div className="relative">
        <img
          className="rounded-lg shadow-2xl object-cover h-64 lg:h-auto lg:max-w-sm"
          src={data[current].photo}
          alt=""
        />
        <img
          src={bg1}
          alt=""
          className="z-[-1] absolute max-w-xs -top-6 -left-10 lg:max-w-lg lg:-top-12"
        />
        <div className="absolute inset-x-0 -mt-4 flex justify-center lg:right-40">
          <button
            className="p-2 bg-white rounded-l-full focus:outline-none focus-visible:ring"
            onClick={previous}
          >
            <IoIosArrowForward className="w-6 h-6 text-[#babacf] transform rotate-180 " />
          </button>
          <button
            className="p-2 bg-white rounded-r-full focus:outline-none focus-visible:ring"
            onClick={next}
          >
            <IoIosArrowForward className="w-6 h-6 text-[#babacf]" />
          </button>
        </div>
      </div>
      <div className="max-w-md mt-24 text-center lg:max-w-xl lg:text-left lg:-mt-0">
        <div className="relative flex justify-center">
          <p className="font-light text-[#202046] lg:text-2xl lg:-mr-20">
            {data[current].quote}
          </p>
          <img
            src={quoteicon}
            alt=""
            className="absolute -top-8 w-20 lg:left-20"
          />
        </div>
        <div className="lg:flex lg:items-center lg:mt-4">
          <h3 className="mt-4 lg:mt-0 lg:mr-4 text-[#202046] font-bold">
            {data[current].name}
          </h3>
          <p className="font-medium text-[#babacf]">{data[current].job}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
