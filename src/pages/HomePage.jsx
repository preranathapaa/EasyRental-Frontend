import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import Bikes from "../components/Home/Bikes";
import Scooter from "../components/Home/Scooter";
import { useGetAllVehiclesQuery } from "../app/vehicles/vehiclesApi";

const HomePage = () => {
  const { isLoading, data } = useGetAllVehiclesQuery();

  // Filter the data into bikes and scooters
  const bikeData = data?.data?.filter((vehicle) => vehicle.type.toLowerCase() === "bike") || [];
  const scooterData = data?.data?.filter((vehicle) => vehicle.type.toLowerCase() === "scooter") || [];

  useEffect(() => {
    if (data?.data) {
      data.data.forEach((vehicle) => {
        console.log("Type:", vehicle.type);
      });
    }
  }, [data]);

  return (
    <>
      <Hero />
      <Bikes bikes={bikeData} />
      <Scooter scooters={scooterData} />
    </>
  );
};

export default HomePage;
