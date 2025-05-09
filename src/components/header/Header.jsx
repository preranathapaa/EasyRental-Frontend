import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-[#fffafa] px-10 py-5 shadow-sm font-poppins">
        <div className="text-[27px] font-bold text-[#025CA3]">
          Easy <span className="text-[#025CA3]">RentAL</span>
        </div>
        <nav className="flex space-x-8">
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
        </nav>
      </header>
    </>
  );
};

export default Header;
