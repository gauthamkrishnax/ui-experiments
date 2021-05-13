import React from "react";
import { Helmet } from "react-helmet";

import backdrop from "../images/articlepreview/drawers.jpg";
import avatar from "../images/articlepreview/avatar-michelle.jpg";

import { IoIosShareAlt } from "react-icons/io";

const ArticlePreview = () => {
  return (
    <>
      <Helmet>
        <html lang="en" className="bg-[#ecf2f8]">{``}</html>
        <title>Article Preview</title>
      </Helmet>
      <div className=" p-4 min-h-screen flex justify-center items-center font-Manrope font-medium">
        <div className="rounded-2xl overflow-hidden bg-white">
          <img
            src={backdrop}
            alt="Backdrop"
            className="h-40 w-full object-cover"
          />
          <div>
            <article className="m-4 mt-6">
              <h4 className="text-[#48556a] font-bold">
                Shift the overall look and feel by adding these wonderful
                touches to furnitue in your home.
              </h4>
              <p className=" mt-3 text-sm text-[#6d7f97]">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I've gat some simple tips
                to help you make any room feel complete.
              </p>
            </article>
            <div className="mt-4 flex h-20">
              <img src={avatar} alt="Avatar" className="rounded-full" />
              <div>
                <h5>Michelle Appleton</h5>
                <p>28 Jun 2020</p>
              </div>
              <IoIosShareAlt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePreview;
