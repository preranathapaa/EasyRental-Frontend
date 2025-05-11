import React, { useState } from "react";

export default function BikeBookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    hireDate: "",
    dropOffDate: "",
    bike: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Submitted", form);
  };

   const handleSelectChange = (e) => {
    setSelectedBike(e.target.value);
   }

  return (
  <>
    <div className="wrapper">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 p-10 font-sans text-gray-700">
        <form
          onSubmit={handleSubmit}
          className="w-full flex-1 space-y-4 bg-white shadow-md p-6 rounded-2xl"
        >
          <h2 className="text-base text-center font-poppins text-gray-800 ">Please Fill Up The Form In Detail For The Rental Inquiry:</h2>


          <div className="flex  gap-4 items-center">

            <label className="w-1/3 font-bold text-[16px]" htmlFor=""> Name</label>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-2/3 p-2 border rounded-xl  focus:ring"
              required
            />
          </div>



          <div className="flex items-center gap-4">

            <label className="w-1/3 font-bold text-[16px]" htmlFor="">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-2/3 p-2 border rounded-xl  focus:ring"
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-1/3 font-bold text-[16px]">Email</label>
            <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-2/3 p-2 border rounded-xl focus:outline-none focus:ring"
            required
          />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-1/3 font-bold text-[16px]">Hire Date</label>
            <input
            type="date"
            name="hireDate"
            value={form.hireDate}
            onChange={handleChange}
            className="w-2/3 p-2 border rounded-xl focus:outline-none focus:ring"
            required
          />
           </div>

          <div className="flex items-center gap-4">
            <label className="w-1/3 font-bold text-[16px]">Dropoff Date</label>
            <input
            type="date"
            name="dropdate"
            value={form.dropOffDate}
            onChange={handleChange}
            className="w-2/3 p-2 border rounded-xl focus:outline-none focus:ring"
            required
          />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-1/3 font-bold text-[16px]">Select Bike</label>
            <select
            id="bikeSelect"
            value={form.bike}
            onChange={handleSelectChange}
            className="p-2 w-2/3 border rounded-xl focus:outline-none focus:ring text-gray-700"
          
            >
            <option value="" disabled>
              Select Bike
            </option>
            <option value="Yamaha">Yamaha mt 15 v2</option>
            <option value="ktm">Ktm 200 duke</option>
            <option value="honda">Honda SP 125</option>
            <option value="royal ">Royal enfield hunter 350</option>
            <option value="Honda dio">Honda Dio 125</option>
            <option value="Scooter">TVS jupiter 125</option>
            <option value="Aprilla">Aprilla SR 160</option>
            <option value="Honda activa">Honda Activa</option>
    

          </select>
            

          </div>
          
          <button
            type="submit"
            className="w-full bg-[#025CA3] hover:bg-[#025CA3] text-white py-2 rounded-xl"
          >
            BOOK
          </button>
        </form>

        <div className="w-full flex-1">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">BOOK NOW</h2>
          <p className="mb-4">
            <strong>Booking Procedure:</strong><br />
            We have simple form and terms and conditions, which you need to fill up before hiring the bikes.
            Here are some required documents which you need to submit before renting motorbike at City Motorbike.
          </p>
          <ul className="list-disc ml-5 mb-4">
            <li>Original Passport with Nepalese visa or refundable cash deposit.</li>
            <li>Id card or Citizenship card original.</li>
            <li>Valid driving license from your country or International Driving license for the hire.</li>
            <li>
              Or Someone from Nepal who can stay as a Guarantor for the security along with his/her
              citizenship, Address, Contact details or requesting for the bike hire with their letter
              head where you are working or travel agents.
            </li>
          </ul>
          <p>
            We have bike expertise who don’t compromise in mechanism and we don’t compromise in the service. We
            assure you that we provide all conditioned and maintained motorbikes.<br />
            If you have any questions, please write us on citymotorbike.com@gmail.com.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
