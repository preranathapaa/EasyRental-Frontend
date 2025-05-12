import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Booking from "../pages/Booking";
import Details from "../pages/Details";
import Faqs from "../pages/Faqs.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import Registration from "../pages/Registration.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/details" element={<Details />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/about" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
    </Routes>
  );
};

export default Router;
