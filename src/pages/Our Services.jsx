import React from "react";

const services = [
  {
    title: "Bike Rentals",
    description:
      "Choose from a wide range of bikes for rent on an hourly, daily, or weekly basis. Whether you're commuting or exploring the city, we've got a ride that suits your needs.",
  },
  {
    title: "Helmet & Safety Gear",
    description:
      "Your safety is our priority. Every rental comes with a sanitized helmet and basic safety gear to ensure a secure riding experience on every journey.",
  },
  {
    title: "Regular Maintenance",
    description:
      "Our fleet is inspected and serviced regularly by professionals to guarantee top performance, cleanliness, and rider satisfaction.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Encounter a problem or need help with booking? Our support team is available round-the-clock to assist you instantly.",
  },
  {
    title: "Easy Online Booking",
    description:
      "Book your ride in minutes using our fast and secure online platform. No paperwork, no wait — just a few clicks and your bike is ready to go.",
  },
  {
    title: "Affordable Pricing",
    description:
      "We offer transparent pricing with no hidden charges. Enjoy flexible rental options that are budget-friendly for both short-term and long-term users.",
  },
  {
  title: "Instant Ride Availability",
  description:
    "Book and start your ride instantly — no waiting, no delays. Our system shows real-time availability so you can rent a bike that's ready to go the moment you are.",
},

 {
  title: "Flexible Extension Service",
  description:
    "Need more time with your rental? No problem. Easily extend your rental duration directly from your account before your session ends.",
},

];

export default function OurServices() {
  return (
    <section className="bg-white from-gray-100 to-white py-8 px-4 md:px-20">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-base md:text-4xl font-bold text-center text-[#025CA3] mb-10">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          We’re committed to delivering a safe, convenient, and affordable ride
          experience with every rental.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center hover:scale-[1.02] transform min-h-[280px] flex flex-col justify-start"
            >
              <h3 className="text-2xl font-semibold cursor-pointer text-[#025CA3] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600  cursor-pointer text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}