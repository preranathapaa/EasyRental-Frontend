import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Honda, Yamaha, Duke, B } from "../Images";
import { useGetAllVehiclesQuery } from "../../app/vehicles/vehiclesApi";

const Bikes = ({bikes}) => {

  const navigate = useNavigate();
 
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
        {bikes.map((vehicle) => (
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

            <Link
              to={`/details/${vehicle.id}`}
              className="bg-[#025CA3] text-white mt-4 py-2 px-4 rounded hover:bg-blue-400 cursor-pointer text-center"
            >
              Hire Now
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Bikes;
