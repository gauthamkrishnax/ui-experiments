import React from "react";

import { Disclosure, Transition } from "@headlessui/react";

import arrow from "../images/faq/icon-arrow-down.svg";

const FaqDisclosure = ({ q, a }) => {
  return (
    <div className="mb-4 border-b border-[#e7e7e9] pb-4">
      <Disclosure className="border border-black">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between w-full focus:outline-none hover:text-[#f47c57] focus-visible:ring-[#af67e9] focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-indigo-50">
              <span
                className={`text-current ${
                  open ? "text-[#1d1e35] font-bold" : " "
                } text-xs lg:text-sm`}
              >
                {q}
              </span>
              <img
                src={arrow}
                alt="arrow icon"
                className={`${open ? "transform rotate-180" : ""}`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <p className="text-xs lg:text-sm mt-3 text-[#787887]">{a}</p>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};
export default FaqDisclosure;
