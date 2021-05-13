import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import "../styles/global.css";

export const query = graphql`
  query MyQuery {
    allSitePage(
      filter: { path: { nin: ["/", "/404/", "/404.html", "/dev-404-page/"] } }
    ) {
      nodes {
        path
      }
    }
  }
`;

// markup
const IndexPage = ({ data }) => {
  console.log(data.allSitePage.nodes);

  return (
    <>
      <Helmet>
        <html lang="en" className="bg-[#FFFDEF]">{``}</html>
        <title>UI - EXPERIMENTS</title>
      </Helmet>
      <main className="min-h-screen font-OpenSans tracking-[6px] p-4 md:px-8 lg:text-lg">
        <div className="self-start mt-10 lg:text-right">
          <h1 className="font-PorterSans text-2xl lg:text-5xl md:text-4xl tracking-wide w-32 lg:w-full">
            UI - EXPERIMENTS
          </h1>
          <nav>
            <ul className="mt-10 text-[#353535] lg:flex lg:justify-end mb-4 lg:h-20">
              <li className="mb-8 lg:mb-0">
                <Link
                  className=" lg:mr-10  hover:border-b-4 hover:border-black transition cursor-pointer"
                  to="/"
                >
                  /ABOUT
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
        </div>

        {/* UNCOMMENT TO ADD WEBSITES SECTION */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
          <ul className="flex flex-wrap gap-6 lg:gap-16 mt-10">
            <h2 className="w-full">WEBITES :</h2>
            {data.allSitePage.nodes.map((e, n) => (
              <Link className="h-16" to={`${e.path}`}>
                <li className="border-2 border-black px-8 py-2 tracking-[6px] lg:text-3xl lg:py-6 uppercase hover:border-b-8 hover:transform hover:-translate-y-2 ">
                  {e.path}
                </li>
              </Link>
            ))}
          </ul> */}
        <ul className="flex flex-wrap gap-6 lg:gap-16 mt-10 ">
          <h2 className="w-full">COMPONENTS :</h2>

          {data.allSitePage.nodes.map((e, n) => (
            <Link className="h-16" to={`${e.path}`}>
              <li className="border-2 border-black px-8 py-2 tracking-[6px] lg:text-3xl lg:py-6 uppercase hover:border-b-8 hover:transform hover:-translate-y-2 ">
                {e.path}
              </li>
            </Link>
          ))}

          <a
            className="h-16"
            href="https://reactcardcomponent.netlify.app/"
            rel="noopener noreferrer"
          >
            <li className="border-2 border-black px-8 py-2 tracking-[6px] lg:text-3xl lg:py-6 uppercase hover:border-b-8 hover:transform hover:-translate-y-2 ">
              /Stat card/
            </li>
          </a>
          <a
            className="h-16"
            href="https://reactthreecolumncardcomponent.netlify.app/"
            rel="noopener noreferrer"
          >
            <li className="border-2 border-black px-8 py-2 tracking-[6px] lg:text-3xl lg:py-6 uppercase hover:border-b-8 hover:transform hover:-translate-y-2 ">
              /THREE COLUMN CARD/
            </li>
          </a>
          <a
            className="h-16"
            href="https://reactprofilecardcomponent.netlify.app/"
            rel="noopener noreferrer"
          >
            <li className="border-2 border-black px-8 py-2 tracking-[6px] lg:text-3xl lg:py-6 uppercase hover:border-b-8 hover:transform hover:-translate-y-2 ">
              /profile card/
            </li>
          </a>
        </ul>
        {/* </div> */}
      </main>
    </>
  );
};

export default IndexPage;
