import React from "react";
import { FaArrowRight } from "react-icons/fa";
const PrimaryButton = () => {
  return (
    <>
      <div className="flex items-center group space-x-2 sm:space-x-3">
        <button className="bg-primary text-white py-2 px-4 text-sm sm:text-base rounded-md h-[40px] whitespace-nowrap">Mulai Langganan Yuk!</button>
      </div>
    </>
  );
};

export default PrimaryButton;
