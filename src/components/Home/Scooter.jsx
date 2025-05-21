import react from "react";
import { useNavigate } from "react-router";
import { Dio } from "../Images";
import { Jupiter } from "../Images";
import { Activa } from "../Images";
import { Aprilia } from "../Images";

const scooter = () => {
  const navigate = useNavigate();

  const scooters  = [
    {
      id: 1,
      img: Dio,
      title: "HONDA",
      subtitle: "DIO 125",
      buttonText: "Hire Now",
      description: "Start price from Rs1000 per day",
      price: "Rs 1000 per day",
      engine: "125cc",
      milage: "48 kmpl",
      fuel: "5.3 litres"
      
    },


    {
      id: 2,
      img: Jupiter,
      title: "TVS",
       subtitle: "JUPITER 125",
      buttonText: "Hire Now",
      description: "Start price from Rs1000 per day",
      price: "Rs 1000 per day",
      engine: "125cc",
      milage: "57.2 kmpl",
      fuel: "5.1 litres"
    },


    {
      id: 3,
      img: Activa,
      title: "HONDA",
       subtitle: "ACTIVA",
      buttonText: "Hire Now",
      description:"Start price from Rs1500 per day",
      price: "Rs 1500 per day",
      engine: "125cc",
      milage: "59.5 kmpl",
      fuel: "5.3 litres"
    },

    {
      id: 4,
      img: Aprilia,
      title: "APRILIA",
       subtitle: "SR 160S",
      buttonText: "Hire Now",
      description:"Start price from Rs1500 per day",
      price: "Rs 1000 per day",
      engine: "160cc",
      milage: "35 kmpl",
      fuel: "6 litres"
    }
  ]

  
  const handleNavigate = (scooter) => {
    navigate(`/details/${scooter.id}`, { state: scooter });
  };
  return (
    <>
      <div className="wrapper">
        <div className="flex items-center justify-center gap-3 mt-10 ">
          <div className="h-[4px] w-8  bg-gray-400 rounded-xl" ></div>
          <h2 className="text-base text-center font-semibold text-gray-500 tracking-widest ">
            SCOOTER 
          </h2>
          <div className="h-[4px] w-8 bg-gray-400 rounded-xl" ></div>
        </div>
        <h1 className="text-base md:text-4xl font-bold text-center mb-10">
          GET YOUR <span className="text-[#025CA3]">SCOOTER FOR RENT</span>
        </h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-10">



          {
            scooters.map((scooter) => (
              <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-2xl ">
                <img src={scooter.img} alt="bike image" className="bg-gray-200" />
                <h2 className="text-1xl font-bold text-black mt-5 text-center">
                  {scooter.title} <span className="text-[#025CA3]">{scooter.subtitle}</span>
                </h2>
                <p className="mt-2 text-[14px] ">{scooter.description}</p>
                <button 
                onClick={() => handleNavigate(scooter)}
                className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
                  {scooter.buttonText}
                </button>
              </div>
            ))
          }






      {/*<div className="wrapper">
         <div className="flex items-center justify-center gap-3 mt-10  ">
        <div className="h-[4px] w-8  bg-gray-400" ></div>
        <h2 className="text-base text-center font-semibold text-gray-500 tracking-widest ">
        Scooter
        </h2>
        <div className="h-[4px] w-8 bg-gray-400" ></div>
      </div>
      <h1 className="text-base md:text-4xl font-bold text-center mb-10">
        GET YOUR <span className="text-[#025CA3]">Scooter FOR RENT</span>
      </h1>

        <div className=" grid grid-cols-4 gap-8 my-10">
          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-2xl ">
            <img src={Dio} alt="bike image" />
            <h2 className="text-1xl font-bold text-black mt-5 text-center">
              HONDA <span className="text-[#025CA3]">DIO 125</span>
            </h2>
            <p className="mt-2 text-">Start prices from Rs 1000 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>

          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-lg ">
            <img src={Jupiter} alt="bike image" />
            <h2 className="text-1xl font-bold text-black mt-5 text-center">
              TVS <span className="text-[#025CA3]">JUPITER 125</span>
            </h2>

            <p className="mt-2">Start prices from Rs 1000 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>

          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-lg ">
            <img src={Activa} alt="bike image" />
            <h2 className="text-1xl font-bold text-black mt-5 text-center">
              HONDA <span className="text-[#025CA3]">ACTIVA</span>
            </h2>
            <p className="mt-2">Start prices from Rs 1000 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>

          <div className="bg-gray-200 p-8 rounded-md flex flex-col shadow-lg ">
            <img src={Aprilia} alt="bike image" />
            <h2 className="text-1xl font-bold text-black mt-5 text-center">
              APRILIA <span className="text-[#025CA3]">SR 160S</span>
            </h2>
            <p className="mt-2">Start prices from Rs 1500 per day</p>
            <button className="bg-[#025CA3] px-4 py-2 text-white mt-4 cursor-pointer hover:bg-blue-400">
              Hire Now
            </button>
          </div>*/}
        </div>
      </div>
    

    </>
  )
}


export default scooter;

