import React from "react"
import { bike4 } from "../components/Home/Images";


const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 md:px-12 py-8 ">
      <div className="flex items-center justify-center gap-3">
        <div className="h-[4px] w-8  bg-gray-400 rounded-xl" ></div>
        <h2 className="text-sm text-center font-semibold text-gray-500 tracking-widest ">
          ABOUT US
        </h2>
        <div className="h-[4px] w-8 bg-gray-400 rounded-xl" ></div>
      </div>
      <h1 className="text-base md:text-4xl font-bold text-center mb-10 ">
        KNOW MORE <span className="text-[#025CA3]">ABOUT US</span>
      </h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        <div>
          <img
            src={bike4} // Replace with your actual image path
            alt="Motorcycle"
            className=" h-[600px] w-[800px] shadow-lgn object-fill"
          />
        </div>

        {/* Right - Text */}
        <div className="max-w-xl p-6 rounded-2xl ">
          <p className="text-sm font-semibold tracking-widest text-[#025CA3] mb-2">
            KNOW ABOUT US
          </p>
          <h3 className="text-2xl font-bold mb-4">
            WHO WE ARE IN THE <span className="text-[#025CA3]">INDUSTRY WE</span>{" "}
            SHOW YOU
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to promote eco-friendly and convenient transportation
            by providing a seamless rental experience through our user-friendly
            platform. From hourly rentals to daily plans, we offer flexible
            options to suit every need. With well-maintained bikes, multiple
            pickup locations, and 24/7 customer support, we're here to help you
            ride better, faster, and greener. Come join us and make your journey
            memorable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
