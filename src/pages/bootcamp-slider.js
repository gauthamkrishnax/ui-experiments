import React from "react";

import Slider from "../components/Slider";

import johnPhoto from "../images/slider/image-john.jpg";
import tanyaPhoto from "../images/slider/image-tanya.jpg";

import bg1 from "../images/slider/pattern-bg.svg";
import bg2 from "../images/slider/pattern-curve.svg";
import quoteicon from "../images/slider/pattern-quotes.svg";

const sliderData = [
  {
    name: "Tanya Sinclair",
    job: "UX Engineer",
    quote: `"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."`,
    photo: tanyaPhoto,
  },

  {
    name: "John Tarkpor",
    job: "Junior Front-End Developer",
    quote: `"If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."`,
    photo: johnPhoto,
  },
];

const BootcampSlider = () => {
  return (
    <div className="min-h-screen flex justify-center p-10 ">
      <Slider data={sliderData} />
      <div className="z-[-1] absolute w-full h-full flex flex-col items-center">
        <img src={bg1} alt="" className="-mt-8 max-w-[340px]" />
        <img src={bg2} alt="" className="absolute inset-x-0 bottom-0" />
        <img src={quoteicon} alt="" className="mt-10 w-16 h-16" />
      </div>
    </div>
  );
};

export default BootcampSlider;
