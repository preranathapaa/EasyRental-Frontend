import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className="bg-[#025CA3] text-[#FFFFFF] px-8 py-8 border-t">
                <div className="max-w-7xl flex  justify-around items-center">
                    {/* Column 1: Logo and Description */}
                    <div>
                        <div className=" mb-4 text-2xl font-bold text-[#FFFFFF]">
                            Easy <span className="text-[#FFFFFF]">RentAL</span>
                        </div>

                        <p className="text-lg font-medium">
                            Bike and scooter for Rent<br />
                            Available in Bharatpur, Chitwan<br />
                            Nepal
                        </p>
                    </div>

                    {/* Column 2: Page Links */}
                    <div className=''>
                        <h3 className="text-xl font-bold mb-4 mt-10">Pages</h3>
                        <ul className="space-y-2 text-lg">
                            <li><a href="/about" className="hover:underline">Home</a></li>
                            <li><a href="/showroom" className="hover:underline">Bike For Rent</a></li>
                            <li><a href="/contact" className="hover:underline">Aboutus</a></li>
                            <li><a href="/legal" className="hover:underline">Faqs</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div className="md:col-span-1 lg:col-span-2">

                        {/* Contact Info */}
                        <div className=''>
                            <h3 className="text-xl font-bold mb-4">Contact</h3>
                            <p className="text-lg">+977-9817541104</p>
                            <p className="text-lg">easyrental678@gmail.com</p>
                        </div>
                        <div className="mt-4 flex gap-2 ">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#ffff]  text-2xl">
                                <FaFacebookF className='hover:text-gray-400' />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#ffff] text-2xl">
                                <FaInstagram  className='hover:text-red-400'/>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-around text-sm text-center md:text-left">
                    <p>© 2025 | All Right Reserved by EasyRentAl</p>

                </div>

            </footer>
        </>
    )
}

export default Footer