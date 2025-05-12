
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Booking from "../pages/Booking";
import Details from "../pages/Details";
import Faqs from "../pages/faqs.jsx";

import About from '../pages/About.jsx'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/details/:id" element={<Details />} />
        <Route path="/faqs" element={<Faqs/>}/>
         <Route path="/about" element={<About/>}/>

    </Routes>
  );
};

export default Router;
