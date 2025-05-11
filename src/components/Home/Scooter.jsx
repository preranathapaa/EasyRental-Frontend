import react from "react";
import { Dio } from "../Images";
import { Jupiter } from "../Images";
import { Activa } from "../Images";
import { Aprilia } from "../Images";
const scooter = () => {
  return (
    <>
      <div className="wrapper">
        <div className=" grid grid-cols-4 gap-8 my-10">
          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-2xl ">
            <img src={Dio} alt="bike image" />
            <h2 className="text-1xl font-bold text-black">
              HONDA <span className="text-[#025CA3]">DIO 125</span>
            </h2>
            <p className="mt-2 text-">Start prices from Rs 1000 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>

          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-lg ">
            <img src={Jupiter} alt="bike image" />
            <h2 className="text-1xl font-bold text-black">
              TVS <span className="text-[#025CA3]">JUPITER 125</span>
            </h2>

            <p className="mt-2">Start prices from Rs 1000 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>

          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-lg ">
            <img src={Activa} alt="bike image" />
            <h2 className="text-1xl font-bold text-black">
              HONDA <span className="text-[#025CA3]">ACTIVA</span>
            </h2>
            <p className="mt-2">Start prices from Rs 1000 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>

          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-lg ">
            <img src={Aprilia} alt="bike image" />
            <h2 className="text-1xl font-bold text-black">
              APRILIA <span className="text-[#025CA3]">SR 160S</span>
            </h2>
            <p className="mt-2">Start prices from Rs 1500 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default scooter;
