import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Booking from "../pages/Booking";
import Details from "../pages/Details";

import Faqs from "../pages/Faqs.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import Registration from "../pages/Registration.jsx";
import Bookingconfirmation from '../pages/Bookingconfirmed.jsx'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />

     
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/about" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />

      <Route path="/details/:id" element={<Details />} />
      <Route path="/confirmation" element={<Bookingconfirmation />} />
       
         


    </Routes>
  );
};

export default Router;
