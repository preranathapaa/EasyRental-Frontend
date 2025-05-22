import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

import Details from "../pages/Details";

import Faqs from "../pages/Faqs.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import Registration from "../pages/Registration.jsx";
import Bookingconfirmation from "../pages/Bookingconfirmed.jsx";
import OurServices from "../pages/OurServices.jsx";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
     

      <Route path="/faqs" element={<Faqs />} />
      <Route path="/about" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />

      <Route path="/details/:id" element={<Details />} />
      <Route path="/confirmation" element={<Bookingconfirmation />} />
      <Route path="/services" element={<OurServices />} />
    </Routes>
  );
};

export default Router;
