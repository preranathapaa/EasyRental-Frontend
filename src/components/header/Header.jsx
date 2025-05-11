import React from "react";

const Header = () => {
  return (
    <>
      <div className=" bg-[#fffafa] ">
        <header className="wrapper flex justify-between items-center   py-5 font-poppins">
        <div className="text-[27px] font-bold text-[#025CA3]">
          Easy <span className="text-[#025CA3]">RentAL</span>
        </div>
        <nav className="flex space-x-8">
          <a href="/" className="text-black font-semibold hover:text-[#025CA3]">
            HOME
          </a>
          <a href="/booking" className="text-black font-semibold hover:text-[#025CA3]">
            BIKES FOR RENT
          </a>
          <a href="/about" className="text-black font-semibold hover:text-[#025CA3]">
            ABOUT US
          </a>
          <a href="/faqs" className="text-black font-semibold hover:text-[#025CA3]">
            FAQS
          </a>
          <a href="#" className="text-black font-semibold ">
            LOGIN
          </a>
          <a href="#" className="text-black font-semibold hover:underline">
            SIGNUP
          </a>
        </nav>
      </header>
      </div>
    </>
  );
};

export default Header;
