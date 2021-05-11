import React from "react";
import { Helmet } from "react-helmet";
import "../styles/global.css";

import faqData from "./faq/faqData";
import FaqDisclosure from "./faq/Disclosure";

import mainPicDesk from "./faq/illustration-woman-online-desktop.svg";
import patternDesk from "./faq/bg-pattern-desktop.svg";
import box from "./faq/illustration-box-desktop.svg";
import patternMobile from "./faq/bg-pattern-mobile.svg";
import mainPicMobile from "./faq/illustration-woman-online-mobile.svg";

const Faq = () => {
  return (
    <>
      <Helmet>
        <html
          lang="en"
          className="bg-[#af67e9] bg-gradient-to-b from-[#af67e9] to-[#6565e7] "
        >{``}</html>
      </Helmet>
      <div className="min-h-screen flex flex-col justify-center items-center relative mx-4 mb-10 lg:mt-10 lg:mx-0 font-KumbSans">
        <img
          src={mainPicMobile}
          alt=""
          className="-ml-5 -mb-24 z-10 lg:hidden"
        />
        <div className="bg-white max-w-4xl  w-full rounded-2xl shadow-2xl lg:grid lg:grid-cols-2 lg:relative lg:overflow-hidden">
          <img src={patternMobile} alt="" className=" m-auto lg:hidden" />

          {/* DESKTOP IMAGE COLLECTION */}

          <div className="hidden lg:block ">
            <img
              src={mainPicDesk}
              alt=""
              className="absolute -left-16 top-10 z-10"
            />
            <img
              src={patternDesk}
              alt=""
              className="absolute w-[850px] -top-48 -left-96 pr-20"
            />
          </div>

          {/* FAQ SECTION */}

          <div className=" w-full p-4 lg:p-16">
            <h1 className="text-center lg:text-left mb-8 lg:mb-10 font-bold text-[#1d1e35] text-3xl lg:text-4xl">
              FAQ
            </h1>
            {faqData.map(({ q, a }, n) => (
              <FaqDisclosure key={n} q={q} a={a} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
