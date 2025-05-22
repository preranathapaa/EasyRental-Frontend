import react from "react";
import { useNavigate } from "react-router";
import { Dio } from "../Images";
import { Jupiter } from "../Images";
import { Activa } from "../Images";
import { Aprilia } from "../Images";

const scooter = ({scooters}) => {
  const navigate = useNavigate();

 

  
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-10">
        {scooters.map((vehicle) => (
          <div key={vehicle.id} className="bg-gray-200 p-8 rounded-md shadow-2xl flex flex-col">
            <img
              className="w-full h-[150px] object-contain mb-4"
              src={vehicle.image}
              alt={vehicle.name}
            />
            <h2 className="text-xl font-bold text-center">
              {vehicle.brand} <span className="text-[#025CA3]">{vehicle.name}</span>
            </h2>
            <p className="mt-2 text-sm text-center">Type: {vehicle.type}</p>
            <p className="text-sm text-center">Price: Rs {vehicle.price ?? 'N/A'} per day</p>

            <button
              onClick={() => handleNavigate(vehicle)}
              className="bg-[#025CA3] text-white mt-4 py-2 px-4 rounded hover:bg-blue-400 cursor-pointer"
            >
              Hire Now
            </button>
          </div>
        ))}
      </div>
      </div>
    

    </>
  )
}


export default scooter;

