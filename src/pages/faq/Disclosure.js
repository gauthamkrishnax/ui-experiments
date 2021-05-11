import React from "react";

import { Disclosure, Transition } from "@headlessui/react";

import arrow from "./icon-arrow-down.svg";

const FaqDisclosure = ({ q, a }) => {
  return (
    <div className="mb-4 border-b border-[#e7e7e9] pb-4">
      <Disclosure className="border border-black">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between w-full focus:outline-none ">
              <span className="text-[#4a4b5e] text-xs lg:text-sm">{q}</span>
              <img
                src={arrow}
                alt="arrow icon"
                className={`${open ? "transform rotate-180" : ""}`}
              />
            </Disclosure.Button>

            <Disclosure.Panel>
              <p className="text-xs lg:text-sm mt-3 text-[#787887]">{a}</p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
export default FaqDisclosure;
