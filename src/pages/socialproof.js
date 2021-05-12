import React from "react";
import { Helmet } from "react-helmet";
import "../styles/global.css";

import StarSection from "../components/StarSection";
import QuoteCard from "../components/QuoteCard";

import mbottom from "../images/social-proof/bg-pattern-bottom-mobile.svg";
import mtop from "../images/social-proof/bg-pattern-top-mobile.svg";
import dbottom from "../images/social-proof/bg-pattern-bottom-desktop.svg";
import dtop from "../images/social-proof/bg-pattern-top-desktop.svg";

import colton from "../images/social-proof/image-colton.jpg";
import irene from "../images/social-proof/image-irene.jpg";
import anne from "../images/social-proof/image-anne.jpg";

const SocialProof = () => {
  return (
    <>
      <Helmet>
        <html lang="en" className="bg-white">{``}</html>
        <title>Social Proof</title>
      </Helmet>

      <div className="flex min-h-screen justify-center items-center">
        <div className="p-6 pt-12 max-w-sm mx-auto text-center font-Spartan grid grid-cols-1 gap-8 relative lg:static lg:max-w-screen-xl lg:grid-cols-2 lg:text-left lg:p-20">
          <div>
            <h1 className=" font-bold text-3xl text-[#502050] lg:text-4xl lg:w-80">
              10,000+ of our users love our products.
            </h1>
            <p className=" mt-4 text-sm text-[#ee68a4] lg:w-96 lg:leading-6 ">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>

          {/* STAR SECTION GRID */}

          <div>
            <StarSection
              starsNo={4}
              name="Reviews"
              Style=" lg:transform lg:-translate-x-24"
            />
            <StarSection
              starsNo={5}
              name="Report Guru"
              Style="lg:transform lg:-translate-x-12"
            />
            <StarSection
              starsNo={2}
              name="BestTech"
              last=" "
              Style="lg:transform lg:-translate-x-0"
            />
          </div>

          {/* QUOTE SECTION GRID */}

          <div className=" lg:col-span-2 lg:grid lg:grid-cols-3 lg:mt-10">
            <QuoteCard
              name="Colton Smith"
              photo={colton}
              buyer="Verified Buyer"
              quote="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also recieved it in time. Excellent!"
              Style=""
            />
            <QuoteCard
              name="Irene Roberts"
              photo={irene}
              buyer="Verified Buyer"
              quote="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed delivery."
              Style="lg:transform lg:translate-y-4"
            />
            <QuoteCard
              name="Anne Wallace"
              photo={anne}
              buyer="Verified Buyer"
              quote="Put an order with this company and only praise them for very high standard. Will defineitely use them again recommend them to everyone!"
              Style="lg:transform lg:translate-y-8"
              last=" "
            />
          </div>

          {/* BACKGROUND IMAGES */}

          <img
            src={mtop}
            alt=""
            className=" absolute inset-x-0 top-0 z-[-1] lg:hidden"
          />
          <img
            src={mbottom}
            alt=""
            className=" absolute inset-x-0 bottom-0 z-[-2] lg:hidden"
          />
          <img
            src={dtop}
            alt=""
            className=" absolute inset-x-0 top-0 z-[-1] hidden lg:block"
          />
          <img
            src={dbottom}
            alt=""
            className=" absolute inset-x-0 bottom-0 z-[-1] hidden lg:block"
          />
        </div>
      </div>
    </>
  );
};

export default SocialProof;
