import React from "react";

import { Disclosure, Transition } from "@headlessui/react";

import arrow from "./icon-arrow-down.svg";

const FaqDisclosure = ({ q, a }) => {
  return (
    <div className="mb-5 border-b border-[#e7e7e9]">
      <Disclosure className="border border-black">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between w-full">
              <span>{q}</span>
              <img
                src={arrow}
                className={`${open ? "transform rotate-180" : ""}`}
              />
            </Disclosure.Button>

            <Disclosure.Panel>
              <p>{a}</p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
export default FaqDisclosure;
