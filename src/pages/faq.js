import React from "react";
import { Helmet } from "react-helmet";
import "../styles/global.css";

import faqData from "./faq/faqData";

import FaqDisclosure from "./faq/Disclosure";

const Faq = () => {
  return (
    <>
      <Helmet>
        <html
          lang="en"
          className="bg-[#af67e9] bg-gradient-to-b from-[#af67e9] to-[#6565e7]"
        >{``}</html>
      </Helmet>
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white overflow-hidden flex items-center w-full max-w-3xl p-10">
          <div className="mr-20">Images</div>
          <div className="w-full">
            <h1>FAQ</h1>
            {faqData.map(({ q, a }) => (
              <FaqDisclosure q={q} a={a} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
