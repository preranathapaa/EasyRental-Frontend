import React from "react";

const Header = () => {
  return (
    <>
      <div className=" bg-[#fffafa] ">
        <header className="wrapper flex justify-between items-center   py-5 font-poppins">
          <div className="text-[27px] font-bold text-[#025CA3]">
            Easy <span className="text-[#025CA3]">RentAL</span>
          </div>

          <nav className="flex justify-between items-center space-x-8">
            <a
              href="/"
              className="text-black font-semibold hover:text-[#025CA3]"
            >
              HOME
            </a>
            <a
              href="/booking"
              className="text-black font-semibold hover:text-[#025CA3]"
            >
              BIKES FOR RENT
            </a>
            <a
              href="/about"
              className="text-black font-semibold hover:text-[#025CA3]"
            >
              ABOUT US
            </a>
            <a
              href="/faqs"
              className="text-black font-semibold hover:text-[#025CA3]"
            >
              FAQS
            </a>

            <div className="flex space-x-4">
              <button className="px-5 py-2 border border-[#025CA3] text-[#025CA3] font-semibold rounded-md hover:bg-blue-200">
                LOG IN
              </button>
              <button className="px-5 py-2 border border-[#025CA3] text-[#025CA3] font-semibold rounded-md hover:bg-blue-200">
                REGISTER
              </button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
