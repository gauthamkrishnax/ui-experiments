import React from "react";

import "../styles/global.css";

import supervisor from "../images/threecard-layout/icon-supervisor.svg";
import teamBuilder from "../images/threecard-layout/icon-team-builder.svg";
import karma from "../images/threecard-layout/icon-karma.svg";
import calculator from "../images/threecard-layout/icon-calculator.svg";
import { Helmet } from "react-helmet";

const cardData = [
  {
    name: "Supervisor",
    details: "Monitors activity to identity project roadblocks",
    photo: supervisor,
    color: "#45d3d3",
  },
  {
    name: "Team Builder",
    details:
      "Scans our talent network to create the optimal team for your project",
    photo: teamBuilder,
    color: "#ea5353",
  },
  {
    name: "Karma",
    details: "Reguraly evaluates our talent to ensure quality",
    photo: karma,
    color: "#fcaf4a",
  },

  {
    name: "Calculator",
    details:
      "Uses data from the past projects to provide better delivery estimates",
    photo: calculator,
    color: "#549ef2",
  },
];

const FourCardLayout = () => {
  return (
    <>
      <Helmet>
        <title>Four Card Layout</title>
      </Helmet>
      <div className="min-h-screen flex justify-center p-8 bg-[#fafafa] font-Poppins lg:items-center ">
        <div className="max-w-lg lg:max-w-4xl">
          <div className="text-center mt-4 mb-12 lg:mt-0">
            <h1 className="font-extralight text-lg text-[#a3a5ae] lg:text-2xl">
              Reliable, efficient delivery
            </h1>
            <h2 className="text-lg font-semibold text-[#4c4e61] lg:text-2xl">
              Powered by Technology
            </h2>
            <p className=" mt-2 font-extralight text-xs text-[#a3a5ae] break-words lg:text-lg lg:max-w-lg lg:mx-auto">
              Our Artificial intelligence powered tools use millions of project
              card points to ensure that your project is successful
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            {/* card 1 */}

            <div
              className={`bg-white mb-8 shadow-xl p-4 h-48 relative rounded-lg lg:w-72 border-t-4 border-[#45d3d3] lg:mb-0`}
            >
              <h3 className="font-semibold text-[#4c4e61]">
                {cardData[0].name}
              </h3>
              <p className="text-xs font-extralight text-[#a3a5ae]">
                {cardData[0].details}
              </p>
              <img
                className="absolute bottom-4 right-4 w-12"
                src={cardData[0].photo}
                alt=""
              />
            </div>

            <div>
              {/* card 2 */}

              <div
                className={`bg-white mb-8 shadow-xl p-4 h-48 relative rounded-lg lg:w-72 border-t-4 border-[#ea5353] `}
              >
                <h3 className="font-semibold text-[#4c4e61]">
                  {cardData[1].name}
                </h3>
                <p className="text-xs font-extralight text-[#a3a5ae]">
                  {cardData[1].details}
                </p>
                <img
                  className="absolute bottom-4 right-4 w-12"
                  src={cardData[1].photo}
                  alt=""
                />
              </div>

              {/* card 3 */}

              <div
                className={`bg-white mb-8 shadow-xl p-4 h-48 relative rounded-lg lg:w-72 border-t-4 border-[#fcaf4a] lg:mb-0`}
              >
                <h3 className="font-semibold text-[#4c4e61]">
                  {cardData[2].name}
                </h3>
                <p className="text-xs font-extralight text-[#a3a5ae]">
                  {cardData[2].details}
                </p>
                <img
                  className="absolute bottom-4 right-4 w-12"
                  src={cardData[2].photo}
                  alt=""
                />
              </div>
            </div>

            {/* card 4 */}

            <div
              className={`bg-white mb-8 shadow-xl p-4 h-48 relative rounded-lg lg:w-72 border-t-4 border-[#549ef2] lg:mb-0`}
            >
              <h3 className="font-semibold text-[#4c4e61]">
                {cardData[3].name}
              </h3>
              <p className="text-xs font-extralight text-[#a3a5ae]">
                {cardData[3].details}
              </p>
              <img
                className="absolute bottom-4 right-4 w-12"
                src={cardData[3].photo}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourCardLayout;
