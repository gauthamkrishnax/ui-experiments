import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import "../styles/global.css";

const About = () => {
  return (
    <>
      <Helmet>
        <html lang="en" className="bg-[#FFFDEF]">{``}</html>
        <title>About</title>
      </Helmet>
      <main className="min-h-screen font-OpenSans tracking-[6px] p-4 md:px-8 lg:text-lg">
        <div className="self-start mt-10 lg:text-right">
          <h1 className="font-PorterSans text-2xl lg:text-5xl md:text-4xl tracking-wide w-32 lg:w-full">
            ABOUT
          </h1>
          <nav>
            <ul className="mt-10 text-[#353535] lg:flex lg:justify-end mb-4 lg:h-20">
              <li className="mb-8 lg:mb-0">
                <Link
                  className=" lg:mr-10  hover:border-b-4 hover:border-black transition cursor-pointer"
                  to="/"
                >
                  /GO-BACK-HOME
                </Link>
              </li>

              <li className="mb-8 lg:mb-0">
                <a
                  className="  hover:border-b-4 hover:border-black transition cursor-pointer"
                  href="https://github.com/gauthamkrishnax/ui-experiments"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /SOURCE-CODE
                </a>
              </li>
            </ul>
          </nav>
          <hr className=" border-[#353535] transition-all animate-growWidth" />
          <div className="flex flex-col items-start mt-10 tracking-normal text-left">
            <h4 className=" mb-4"> Hey !</h4>
            <p>
              I am sorry there is no " about " here :x . I can probably parse
              the markdown here but I am too lazy for that.
              <br />
              Maybe you wanna look into the readme file in my SOURCE CODE.
              <br></br>
              <br />- Good Luck
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
