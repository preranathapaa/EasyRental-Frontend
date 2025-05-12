import React from "react";
import { useParams, useLocation, Navigate, useNavigate } from "react-router";

const Details = () => {
const navigate =useNavigate();
  const { state } = useLocation();
  
  return (
    <div className="wrapper">
      <div className="flex items-center mt-20">
        <div className="w-[60%]">
          <img className="w-full h-full object-contain" src={state.img} alt={state.title} />
        </div>

        <div className="flex w-[40%] flex-col bg-white px-1 h-full pl-10 justify-center">
          <h2 className="text-[40px] font-bold text-black">
            {state.title} <span className="text-[#025CA3]">{state.subtitle}</span>
          </h2>

          <div className="mt-8 space-y-4">
            <p className="text-black text-[20px] font-medium">Price: {state.price}</p>
            <p className="text-black text-[20px] font-medium">Engine Capacity: {state.engine}</p>
            <p className="text-black text-[20px] font-medium">Milage: {state.milage}</p>
            <p className="text-black text-[20px] font-medium">Fuel Tank Capacity: {state.fuel}</p>
          </div>
          <button
          onClick={() =>navigate("/booking")}
          className="mt-10 px-5 py-2 bg-[#025CA3] text-white font-semibold rounded-md  hover:cursor-pointer hover:bg-[#014b85] transition-colors">
            Hire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
