import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router";
import { useRentVehicleMutation } from "../app/vehicles/vehiclesApi";
import Swal from "sweetalert2";

export default function BikeBookingForm() {
  const { id } = useParams();
  const { state } = useLocation();

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [bikeName, setBikeName] = useState(state?.Vehicename || "");
  const [price, setPrice] = useState(state?.price || 0);
  const [vehicleId, setVehicleId] = useState(state?.vehicle_id || id || "");



  const [booking] = useRentVehicleMutation();


  useEffect(() => {
    // If bikeName is missing, try loading from localStorage
    if (!bikeName || !vehicleId) {
      const saved = localStorage.getItem("bikeBookingInfo");
      if (saved) {
        const { bikeName: savedName, vehicleId: savedId, price:savedPrice } = JSON.parse(saved);
        setBikeName(savedName || "");
        setVehicleId(savedId || "");
        setPrice(savedPrice || "");
        localStorage.removeItem("bikeBookingInfo"); // optional cleanup
      }
    }
  }, [bikeName, vehicleId]);

  const formik = useFormik({
    initialValues: {
      book_date: "",
      dropoffdate: "",
    },
    onSubmit: async (values) => {
      if (!token) {

        localStorage.setItem("bikeBookingInfo", JSON.stringify({
          bikeName,
          vehicleId,
          price
        }));

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

        Swal.fire({
          icon: "success",
          title: "Booking Successful!",
          text: "You have successfully Booked.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });

        navigate("/confirmation", {
          state: {
           
            bikeModel: bikeName,
            rentalStart: values.book_date,
            rentalEnd: values.dropoffdate,
            location: "Bharatpur",
            totalCost: totalCost
          }
        });


      } catch (err) {
        console.error("Booking failed:", err);

        Swal.fire({
          icon: "error",
          title: err?.data?.message || "An error occurred",
          text: "There was an error while Login.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    },
  });


   // Calculate rental days and cost
  const startDate = new Date(formik.values.book_date);
  const endDate = new Date(formik.values.dropoffdate);
  const totalDays =
    formik.values.book_date && formik.values.dropoffdate
      ? Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
      : 0;
  const totalCost = totalDays > 0 ? totalDays * price : 0;


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

          {totalDays > 0 && (
            <div className="flex items-center gap-4">
              <label className="w-1/3 font-bold text-[16px]">Total Cost</label>
              <div className="w-2/3 p-2 border rounded-xl bg-gray-100">
                Rs. {totalCost}
              </div>
            </div>
          )}

          

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
