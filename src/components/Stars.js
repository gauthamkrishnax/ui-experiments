import React from "react";

import { StarIcon } from "@heroicons/react/solid";

const Stars = ({ no = 5, selected }) => {
  return (
    <div className="flex w-32">
      {[...Array(no)].map((e, n) => (
        <StarIcon
          key={n}
          className={`text-gray-300 ${n < selected ? " text-yellow-500" : " "}`}
        />
      ))}
    </div>
  );
};

export default Stars;
