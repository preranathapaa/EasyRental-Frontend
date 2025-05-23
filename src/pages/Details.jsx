import React from "react";
import { useParams,  useNavigate } from "react-router";
import { useGetVehiclesDetailsQuery } from "../app/vehicles/vehiclesApi";

const Details = () => {

  const {id} = useParams();
const navigate =useNavigate();
 

  const {data, isLoading} = useGetVehiclesDetailsQuery(id);

  console.log("single details", data);

  console.log("image of details", data?.data?.image);

  const vehicle = data?.data;

  const Vehicename = vehicle?.name;

  const price = vehicle?.price;
  console.log("Price of vehicle", price);

  console.log("name of vehicle", Vehicename);

  console.log("vehicles data", vehicle)
  
  return (
    <div className="wrapper">

      
      <div className="flex items-center mt-20 mb-20">
        <div className="w-[60%]">
          <img className="w-full h-full object-contain" src={vehicle?.image} alt={vehicle?.name} />
        </div>

        <div className="flex w-[40%] flex-col bg-white px-1 h-full pl-10 justify-center">
          <h2 className="text-[40px] font-bold text-black">
            {vehicle?.name} <span className="text-[#025CA3]">{vehicle?.brand}</span>
          </h2>

          <div className="mt-8 space-y-4">
            <p className="text-black text-[20px] font-medium">Price: {vehicle?.price}</p>
            <p className="text-black text-[20px] font-medium">Engine Capacity: {vehicle?.engine}</p>
            <p className="text-black text-[20px] font-medium">Milage: {vehicle?.mileage}</p>
            <p className="text-black text-[20px] font-medium">Registration Num: {vehicle?.registration_num}</p>
          </div>
          <button
          onClick={() =>navigate(`/booking/${id}`, {state: {Vehicename, price}})}
          className="mt-10 px-5 py-2 bg-[#025CA3] text-white font-semibold rounded-md  hover:cursor-pointer hover:bg-[#014b85] transition-colors">
            Hire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
