import React from "react";

const Cards = () => {
  return (
    <div className="border border-gray-300 h-full w-full flex flex-col rounded-md px-3 py-3 hover:cursor-pointer">
      <div className="flex-2 w-full h-20">
        <div className="w-full border rounded-sm h-full"></div>
      </div>
      <div className="w-full py-2 flex overflow-hidden rounded-b-md">
        <button className="text-sm font-medium text-white px-5 py-2 rounded-md bg-black ">
          Try Out
        </button>
      </div>
    </div>
  );
};

export default Cards;
