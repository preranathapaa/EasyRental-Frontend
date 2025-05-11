import React from "react";
import { Honda } from "../components/Images";

const Details = () => {
  return (
    <div className="wrapper">
      <div className="flex items-center h-screen ">
        <div className="w-[60%] h-full">
          <img
            className="w-full h-full items-center justify-center object-fill"
            src={Honda}
            alt=""
          />
        </div>

        <div className="flex w-[40%] flex-col bg-white px-1 h-full items-start justify-center pl-10 ">
          <h2 className="text-[40px] font-bold text-black">
            HONDA <span className="text-[#025CA3]">SP 125</span>
          </h2>

          <div className="mt-8 space-y-4">
            <p className="text-start text-black text-[20px] font-medium mt-6">
              Price:Rs 1000 per day
            </p>
            <p className="text-start text-black text-[20px] font-medium mt-6">
              Engine Capacity: 125cc
            </p>
            <p className="text-start text-black text-[20px] font-medium mt-6">
              Milage: kmpl
            </p>
            <p className="text-start text-black text-[20px] font-medium mt-6">
              Fuel Tank Capacity: 11.2 litres
            </p>
          </div>
          <button className="mt-10 ml-4 px-5 py-2 bg-[#025CA3] text-white font-semibold rounded-md hover:bg-[#014b85] transition-colors">
            Hire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
