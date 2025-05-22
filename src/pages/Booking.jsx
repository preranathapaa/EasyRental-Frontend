import { useFormik } from "formik";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useRentVehicleMutation } from "../app/vehicles/vehiclesApi";

export default function BikeBookingForm() {
  const { id } = useParams();
  const { state } = useLocation();
  const bikeName = state?.Vehicename || "";
  const vehicleId = state?.vehicle_id || id || "";
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [booking] = useRentVehicleMutation();

  const formik = useFormik({
    initialValues: {
      book_date: "",
      dropoffdate: "",
    },
    onSubmit: async (values) => {
      if (!token) {
        navigate("/login", { state: { from: location.pathname } });
        return;
      }

      try {
        await booking({
          data: {
            book_date: values.book_date,
            dropoffdate: values.dropoffdate,
            vehicle_id: vehicleId,
          },
          token: `Bearer ${token}`,
        }).unwrap();

        navigate("/confirmation")
    

      
      } catch (err) {
        console.error("Booking failed:", err);
        alert("Booking failed. Please try again.");
      }
    },
  });

  return (
    <div className="wrapper">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 p-10 font-sans text-gray-700">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex-1 space-y-4 bg-white shadow-md p-6 rounded-2xl"
        >
          <h2 className="text-base text-center font-poppins text-gray-800">
            Please Fill Up The Form In Detail For The Rental Inquiry:
          </h2>

          <div className="flex items-center gap-4">
            <label className="w-1/3 font-bold text-[16px]">Hire Date</label>
            <input
              type="date"
              name="book_date"
              value={formik.values.book_date}
              onChange={formik.handleChange}
              className="w-2/3 p-2 border rounded-xl focus:outline-none focus:ring"
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-1/3 font-bold text-[16px]">Dropoff Date</label>
            <input
              type="date"
              name="dropoffdate"
              value={formik.values.dropoffdate}
              onChange={formik.handleChange}
              className="w-2/3 p-2 border rounded-xl focus:outline-none focus:ring"
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-1/3 font-bold text-[16px]">Selected Bike</label>
            <input
              type="text"
              value={bikeName}
              readOnly
              className="w-2/3 p-2 border rounded-xl focus:outline-none focus:ring"
            />
          </div>

          <button
          
            type="submit"
            className="w-full bg-[#025CA3] hover:bg-[#1c2329] cursor-pointer text-white py-2 rounded-xl"
          >
            BOOK
          </button>
        </form>



        <div className="w-full flex-1">
          <h2 className="text-2xl font-bold mb-4 text-[#025CA3]">BOOK NOW</h2>
          <p className="mb-4">
            <strong>Booking Procedure:</strong><br />
            Submit required documents and fill out the form to book a bike.
          </p>
          <ul className="list-disc ml-5 mb-4">
            <li>Original Passport with visa or refundable cash deposit.</li>
            <li>ID card or Citizenship card (original).</li>
            <li>Valid national or international driving license.</li>
            <li>
              Or a local guarantor with contact info or employer recommendation letter.
            </li>
          </ul>
          <p>
            Our bikes are well-maintained and we provide excellent service.
            For questions, contact: <strong>citymotorbike.com@gmail.com</strong>
          </p>
        </div>
      
      </div>
    </div>
  );
}
