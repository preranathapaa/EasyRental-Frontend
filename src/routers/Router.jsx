import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Booking from "../pages/Booking";
import Details from "../pages/Details";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default Router;
