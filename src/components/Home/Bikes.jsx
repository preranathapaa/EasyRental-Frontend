import React from "react";
import { useNavigate } from "react-router";
import { Honda, Yamaha, Duke, B } from "../Images";

const Bikes = () => {
  const navigate = useNavigate();

  const bikes = [
    {
      id: 1,
      img: Honda,
      title: "Honda",
      subtitle: "SP 125",
      buttonText: "Hire Now",
      description: "Start price from Rs1000 per day",
      price: "Rs 1000 per day",
      engine: "125cc",
      milage: "65 kmpl",
      fuel: "11.2 litres"
    },
    {
      id: 2,
      img: Yamaha,
      title: "Yamaha",
      subtitle: "MT 15 V2",
      buttonText: "Hire Now",
      description: "Start price from Rs1500 per day",
      price: "Rs 1500 per day",
      engine: "155cc",
      milage: "45 kmpl",
      fuel: "10 litres"
    },
    {
      id: 3,
      img: Duke,
      title: "KTM",
      subtitle: "200 DUKE",
      buttonText: "Hire Now",
      description: "Start price from Rs2000 per day",
      price: "Rs 2000 per day",
      engine: "200cc",
      milage: "35 kmpl",
      fuel: "13.4 litres"
    },
    {
      id: 4,
      img: B,
      title: "ROYAL ",
      subtitle: "ENFIELD 350",
      buttonText: "Hire Now",
      description: "Start price from Rs2500 per day",
      price: "Rs 2500 per day",
      engine: "350cc",
      milage: "40 kmpl",
      fuel: "13 litres"
    }
  ];

  const handleNavigate = (bike) => {
    navigate(`/details/${bike.id}`, { state: bike });
  };

  return (
    <div className="wrapper">
      <div className="text-center mt-10 ">
        <div className="flex items-center gap-3 justify-center">
           <div className="h-[4px] w-8  bg-gray-400 rounded-xl " ></div>
        <h2 className="text-gray-500 font-semibold tracking-widest">Bike</h2>
        <div className="h-[4px] w-8  bg-gray-400 rounded-xl" ></div>


        </div>
       
        <h1 className="text-4xl font-bold mt-2">
          GET YOUR <span className="text-[#025CA3]">BIKE FOR RENT</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-10">
        {bikes.map((bike) => (
          <div key={bike.id} className="bg-gray-200 p-8 rounded-md shadow-2xl flex flex-col">
            <img className="w-auto" src={bike.img} alt={bike.title} />
            <h2 className="text-xl font-bold mt-5 text-center">
              {bike.title} <span className="text-[#025CA3]">{bike.subtitle}</span>
            </h2>
            <p className="mt-2 text-sm">{bike.description}</p>
            <button
              onClick={() => handleNavigate(bike)}
              className="bg-[#025CA3] text-white mt-4 py-2 px-4 rounded hover:cursor-pointer hover:bg-blue-400"
            >
              {bike.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
