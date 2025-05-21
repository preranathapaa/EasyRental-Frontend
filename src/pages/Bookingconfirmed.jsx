import React from "react";

export default function BookingConfirmation() {
  const bookingDetails = {
    bookingId: "BR-4572-2025",
    userName: "Jane Doe",
    bikeModel: "Trek FX 3 Disc",
    rentalStart: "May 16, 2025, 10:00 AM",
    rentalEnd: "May 18, 2025, 4:00 PM",
    location: "Downtown Bike Hub, San Francisco",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-xl w-full">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-green-100 text-green-600 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2l4 -4M12 22c5.523 0 10 -4.477 10 -10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Booking Confirmed!</h1>
            <p className="text-gray-600">Thank you, {bookingDetails.userName}</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div>
            <span className="font-semibold">Booking ID:</span>{" "}
            {bookingDetails.bookingId}
          </div>
          <div>
            <span className="font-semibold">Bike Model:</span>{" "}
            {bookingDetails.bikeModel}
          </div>
          <div>
            <span className="font-semibold">Rental Period:</span>{" "}
            {bookingDetails.rentalStart} – {bookingDetails.rentalEnd}
          </div>
          <div>
            <span className="font-semibold">Pickup Location:</span>{" "}
            {bookingDetails.location}
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
            Book Another
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#025CA3] text-white hover:bg-blue-700">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
