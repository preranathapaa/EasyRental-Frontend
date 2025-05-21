import React, { useState } from 'react'
import { bike, bike2 } from './Images';


const Hero = () => {

  const [selectedImage, setSelectedImage] = useState('bike');


  return (
    <>
      <div className=" wrapper bg-white flex items-center  ">
        <div className="flex  flex-col-reverse md:flex-row  mt-10 gap-10 items-center justify-center ">
          {/* Left Section */}
          <div className="flex-1 text-left  space-y-6 max-w-md mr-20">
            <div className="space-y-2 font-Bebas Neue">
              <div className="w-15 h-1 bg-gray-600 rounded-xl"></div>
              <h1 className="text-4xl font-semibold font-Bebas Neue">
                WE PROVIDE <span className="text-[#025CA3] font-bold">BIKES</span>{" "}
                <br />
                <span className="text-[#025CA3] font-bold">AND SCOOTER</span> FOR RENT
              </h1>
              <p className="text-12px text-gray-600 font-poppins font-semibold ">
                Books directly from local suppliers. No Commissions, No Markups
              </p>
            </div>

            {/* Buttons */}
            <div className="flex space-x-2 font-poppins">
              <button
                onClick={() => setSelectedImage('bike')}
                className={`px-4 py-6 rounded-xl mr-[-20px] z-10 hover:cursor-pointer ${selectedImage === 'bike' ? 'bg-[#025CA3] text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 shadow-md'
                  }`}
              >
                BIKE FOR RENT
              </button>
              <button
                onClick={() => setSelectedImage('scuter')}
                className={`px-8 py-6 rounded-xl hover:cursor-pointer text-right ${selectedImage === 'scuter' ? 'bg-[#025CA3] text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 shadow-md'
                  }`}
              >
                SCOOTER FOR RENT
              </button>
            </div>
          </div>

          {/* Right Section - Bike Image */}
          <div className="  flex-1 rounded-xl flex flex-row overflow-hidden shadow-lg ">
            {selectedImage === 'bike' && (
              <img className='h-[200px] md:h-[500px]' src={bike} alt="" />
            )}


            {selectedImage === 'scuter' && (
              <img className='h-[200px] md:h-[500px]' src={bike2} alt="" />
            )}

          </div>
        </div>
      </div>
    </>
  )
}

export default Hero