import react from "react";
import { Honda } from "../Images";
import { Yamaha } from "../Images";
import { Duke } from "../Images";
import { B } from "../Images";
const Bikes = () => {

  return (
    <>
      <div className="wrapper">
        <div className="flex items-center justify-center gap-3 mt-10 ">
        <div className="h-[4px] w-8  bg-gray-400" ></div>
        <h2 className="text-base text-center font-semibold text-gray-500 tracking-widest ">
          Bike
        </h2>
        <div className="h-[4px] w-8 bg-gray-400" ></div>
      </div>
      <h1 className="text-base md:text-4xl font-bold text-center mb-10">
        GET YOUR <span className="text-[#025CA3]">BIKE FOR RENT</span>
      </h1>

        <div className=" grid grid-cols-4 gap-8 my-10">
          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-2xl ">
            <img src={Honda} alt="bike image" className="bg-gray-200" />
            <h2 className="text-1xl font-bold text-black mt-5 text-center">
              HONDA <span className="text-[#025CA3]">SP 125</span>
            </h2>
            <p className="mt-2">Start prices from Rs 1000 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>

          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-lg ">
            <img src={Yamaha} alt="bike image" />
            <h2 className="text-1xl font-bold text-black mt-5 text-center">
              YAMAHA <span className="text-[#025CA3]">MT 15 V2</span>
            </h2>
            <p className="mt-2">Start prices from Rs 1500 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>

          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-lg ">
            <img src={Duke} alt="bike image" />
            <h2 className="text-1xl font-bold text-black mt-5 text-center">
              KTM <span className="text-[#025CA3]">200 DUKE</span>
            </h2>
            <p className="mt-2">Start prices from Rs 2000 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>

          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-lg ">
            <img src={B} alt="bike image" />
            <h2 className="text-1xl font-bold text-black mt-5 text-center">
              ROYAL ENFIELD <span className="text-[#025CA3]">HUNTER 350</span>
            </h2>
            <p className="mt-2">Start prices from Rs 2500 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bikes;

