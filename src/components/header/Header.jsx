import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-[#fffafa] px-10 py-5 shadow-sm font-poppins">
        <div className="text-[27px] font-bold text-[#025CA3]">
          Easy <span className="text-[#025CA3]">RentAL</span>
        </div>
        <nav className="flex justify-between items-center space-x-8">
          <a href="#" className="text-black font-semibold hover:underline">
            HOME
          </a>
          <a href="#" className="text-black font-semibold hover:underline">
            BIKES FOR RENT
          </a>
          <a href="#" className="text-black font-semibold hover:underline">
            ABOUT US
          </a>
          <a href="#" className="text-black font-semibold hover:underline">
            FAQS
          </a>
          <div className="flex space-x-4">
            <button className="px-5 py-2 border border-[#025CA3] text-[#025CA3] font-semibold rounded-md bg-gray-100 hover:bg-gray-200">
              LOG IN
            </button>
            <button className="px-5 py-2 bg-[#025CA3] text-white font-semibold rounded-md hover:bg-[#025CA3]">
              REGISTER
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
