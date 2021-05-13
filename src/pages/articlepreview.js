import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

import "../styles/global.css";

import backdrop from "../images/articlepreview/drawers.jpg";
import avatar from "../images/articlepreview/avatar-michelle.jpg";

import { IoIosShareAlt, IoIosClose } from "react-icons/io";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillCaretDown,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const ArticlePreview = () => {
  const [shareBar, setshareBar] = useState(false);
  const [shouldRender, setshouldRender] = useState(shareBar);

  useEffect(() => {
    if (shareBar) setshouldRender(true);
  }, [shareBar]);

  const onAnimationEnd = () => {
    if (!shareBar) setshouldRender(false);
  };

  return (
    <>
      <Helmet>
        <html lang="en" className="bg-[#ecf2f8]">{``}</html>
        <title>Article Preview</title>
      </Helmet>
      <div className=" p-4 min-h-screen flex justify-center items-center font-Manrope font-medium">
        <div className="lg:relative">
          <div className="rounded-2xl overflow-hidden bg-white shadow-2xl relative lg:static max-w-xl flex flex-col lg:flex-row lg:max-w-4xl lg:max-h-80">
            <img
              src={backdrop}
              alt="Backdrop"
              className="h-40 w-full object-cover lg:w-72 lg:h-80"
            />
            <div className="lg:max-w-lg lg:m-10">
              <article className="m-4 mt-6 ">
                <h4 className="text-[#48556a] font-bold lg:text-xl ">
                  Shift the overall look and feel by adding these wonderful
                  touches to furnitue in your home.
                </h4>
                <p className=" mt-3 text-sm text-[#6d7f97] lg:text-base">
                  Ever been in a room and felt like something was missing ?
                  Perhaps it felt slightly bare and uninviting. I've gat some
                  simple tips to help you make any room feel complete.
                </p>
              </article>
              <div className="mt-4 flex h-20 items-center p-5">
                <img src={avatar} alt="Avatar" className="rounded-full w-10" />
                <div className="ml-4">
                  <h5 className=" text-[#48556a] text-sm font-bold">
                    Michelle Appleton
                  </h5>
                  <p className="text-[#6d7f97] text-xs">28 Jun 2020</p>
                </div>
                <button
                  onClick={() => setshareBar(!shareBar)}
                  className=" ml-auto z-20 focus:outline-none focus-visible:ring-2"
                >
                  {!shareBar ? (
                    <IoIosShareAlt className=" bg-[#ecf2f8] text-[#48556a] w-8 h-8 p-2 rounded-full " />
                  ) : (
                    <IoIosClose className=" bg-[#ecf2f8] text-[#48556a] w-8 h-8 p-2 rounded-full " />
                  )}
                </button>
              </div>
            </div>
            {shouldRender && (
              <div
                onAnimationEnd={onAnimationEnd}
                className={`h-20 flex items-center p-5 absolute inset-x-0 bottom-0 bg-[#48556a] ${
                  shareBar ? "animate-comeUp" : "animate-comeDown"
                } lg:w-60 lg:h-12 lg:rounded-lg  lg:bottom-28 lg:-right-8 lg:left-auto lg:justify-center lg:shadow-2xl`}
              >
                <p className="text-[#6d7f97] tracking-[4px] text-sm mr-4">
                  SHARE
                </p>
                <div className="flex gap-3">
                  <AiFillFacebook className="text-[#ecf2f8] hover:text-white h-6 w-6 cursor-pointer" />
                  <AiOutlineTwitter className="text-[#ecf2f8] hover:text-white h-6 w-6 cursor-pointer" />
                  <FaPinterest className="text-[#ecf2f8] hover:text-white w-6 h-6 cursor-pointer" />
                  <AiFillCaretDown className="hidden lg:block absolute -bottom-6 w-10 h-10 text-[#48556a]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePreview;
