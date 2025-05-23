import { button } from "@material-tailwind/react";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../../app/auth/usersSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const links = [
    { name: "Home", path: "/" },
    { name: "Our services", path: "/service" },
    { name: "About Us", path: "/about" },
    { name: "FAQS", path: "/faqs" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/login");
  }


  return (
    <>
      <nav className="bg-[#fffafa] ">
        <div className="wrapper">
          <div className="flex items-center justify-between font-poppins px-4 py-5">
            <div className="text-[27px] font-bold text-[#025CA3]">
              Easy <span className="text-[#025CA3]">RentAL</span>
            </div>

            {/* Desktop Menu */}

            <div className="hidden md:flex gap-6 items-center ">
              <ul className="hidden md:flex gap-6">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-black font-semibold hover:text-[#025CA3] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-row gap-6">
                {
                  user ? (
                    <button onClick={handleLogout} className="px-5 py-2 border hover:cursor-pointer border-red-500 text-red-600 font-semibold rounded-md hover:bg-red-100">Logout</button>
                  ) : (
                    <>
                      <button onClick={() => navigate("/login")} className="px-5 py-2 border hover:cursor-pointer border-[#025CA3]  text-[#025CA3] font-semibold rounded-md hover:bg-blue-200">Login</button>
                      <button onClick={() => navigate("/Registration")} className="px-5 py-2 hover:cursor-pointer border border-[#025CA3] text-[#025CA3] font-semibold rounded-md hover:bg-blue-200">Signup</button>

                    </>
                  )
                }
              </div>
            </div>



            {/* Hamburger Icon */}

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoClose className="cursor-pointer" size={30} /> : <HiMenu className="cursor-pointer" size={30} />}
              </button>
            </div>
          </div>


          {/* Mobile Nav */}

          {
            isOpen && (
              <>

                <ul className="flex md:hidden flex-col items-center justify-center gap-4 px-4 pb-4 ">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-black font-semibold hover:text-[#025CA3] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex md:hidden flex-col items-center justify-center gap-4 px-4 pb-4">
                  <button onClick={() => navigate("/login")} className="px-5 py-2 border hover:cursor-pointer border-[#025CA3] text-[#025CA3] font-semibold rounded-md hover:bg-blue-200">Login</button>
                  <button onClick={() => navigate("/Registration")} className="px-5 py-2 hover:cursor-pointer border border-[#025CA3] text-[#025CA3] font-semibold rounded-md hover:bg-blue-200">Signup</button>
                </div>

              </>
            )
          }
        </div>
      </nav>
    </>
  );
};

export default Header;
