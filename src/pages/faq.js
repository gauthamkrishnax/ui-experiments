import React from "react";
import { Helmet } from "react-helmet";
import "../styles/global.css";

import FaqDisclosure from "../components/Disclosure";

import mainPicDesk from "../images/faq/illustration-woman-online-desktop.svg";
import patternDesk from "../images/faq/bg-pattern-desktop.svg";
import box from "../images/faq/illustration-box-desktop.svg";
import patternMobile from "../images/faq/bg-pattern-mobile.svg";
import mainPicMobile from "../images/faq/illustration-woman-online-mobile.svg";

const faqData = [
  {
    q: "How many team member can I invite?",
    a: "You can Invite from two to four teams for the event.",
  },
  {
    q: "What is the maximum file upload size?",
    a: "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    q: "How do I reset my password?",
    a: "You can choose forget password on Sign In menu or go to http://hsudk.fsdfsd.com/forgot-menu/ for more info",
  },
  {
    q: "Can I cancel my subscription?",
    a: " You can cancel your subscription within 10 days of your registration",
  },
  {
    q: "Do you provide additional support?",
    a: " Of course we do ! Click here for more info. ",
  },
];

const Faq = () => {
  return (
    <>
      <Helmet>
        <html
          lang="en"
          className="bg-[#af67e9] bg-gradient-to-b from-[#af67e9] to-[#6565e7] "
        >{``}</html>
      </Helmet>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center  relative mx-4 mb-10  lg:mx-0 font-KumbSans">
        <img
          src={mainPicMobile}
          alt=""
          className="-ml-5 -mb-24 z-10 lg:hidden"
        />
        <div className="relative w-full max-w-4xl ">
          <img
            src={box}
            alt=""
            className=" z-40 hidden lg:block absolute top-44 -left-24"
          />
          <div className="bg-white w-full rounded-2xl shadow-2xl lg:grid lg:grid-cols-2 lg:relative lg:overflow-hidden">
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
      </div>
    </>
  );
};

export default Faq;
