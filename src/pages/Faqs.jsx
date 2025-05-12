import React, { useState } from "react";

const faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Risks and responsibilities:",
      answer: `I am aware of the potential hazards associated with traveling in Nepal, as emergency aid may not be accessible and City Motorbike not be held accountable for any harm or damage. I will ensure to have my driver’s license and international driving permit with me at all times, as failure to present them to the authorities may result in fines. I will also comply with traffic regulations and utilize protective gear while operating a vehicle. I will not ride while under the influence of drugs or alcohol.`,
    },
    {
      question: "Cancellation policy:",
      answer: `I acknowledge that payments for Rental / Tour bookings are non-refundable. If I cancel my trip/tour for any reason after the booking or departure (such as illness, fatigue, accident, etc.), I will not get the refund. Additionally, no refunds will be provided for any unused services.`,
    },
    {
      question: "Insurance:",
      answer: `Insurance is generally not provided by motorbike rental companies in Nepal for rental motorbikes. If any incidents such as accidents, scratches, damage to other vehicles or property, injuries, or broken parts occur during the rental period, insurance will not cover them. The individual renting the motorbike will be fully responsible for any such incidents and will be liable to pay for them.`,
    },
    {
      question: "Bike Damage:",
      answer: `Upon returning the bike, it must be in the same condition as it was received, along with documents. If the bike is damaged (such as broken parts, theft, scratches, punctures, accidents, or issues with the police), the cost of repairs will be the responsibility of the person who rented the bike. If I am unable to return the bike, documents. I will be responsible for all costs related to its return, including those for mechanics, guides, transportation, food, and accommodation.`,
    },
  ];

  return (
    <div className="bg-white wrapper py-10 w-full mx-auto text-gray-800">
      <h2 className="text-xl font-bold text-center mb-4">
        FREQUENTLY ASKED QUESTIONS (FAQS){" "}
        <span className="text-[#025CA3]">ABOUT BIKE RENTAL</span>
      </h2>

      <p className="mb-2 text-sm">
        Our motorbikes are regularly inspected to ensure each rental will go
        convenient. Our price covers the motorbike rental and a helmet only. We
        also provide pick-and-drop service at your hotel or at a chosen
        destination with a certain charge. We have provided information to our
        guests about Travel to Nepal on Motorcycle.
      </p>
      <p className="mb-2 text-sm">
        Please read carefully before renting bikes or joining our motorcycle
        tours in Nepal. <br />
        Contact us through the booking/inquiry form or Whatsapp on following no:
        +9779843366010, +9779841205828 for details.
      </p>
      <p className="mb-2 text-sm">
        While Renting with Easy Rental, following terms and conditions is
        applied. Once you fully agreed with the following terms and conditions
        you are ready to go for rental motorbike or tour with us.
      </p>
      <p className="mb-2 font-semibold text-sm">
        Please read carefully all the content below:
      </p>

      <div className="space-y-3">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b pb-1">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-medium py-1 text-sm flex justify-between items-center focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-xs">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="text-sm text-gray-700 mt-1 leading-snug">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Rest content kept unchanged */}
      <h3 className="mt-8 text-base font-bold">
        Few things to remember before hiring a bike:
      </h3>
      <div className="space-y-4 mt-3 text-sm">
        <div>
          <h4 className="font-semibold">
            1. Booking information on Motorbike rental
          </h4>
          <ul className="list-disc ml-5">
            <li>
              You need a 40% advance payment from the total payment to reserve
              the Motorbike. Reservation payment is nonrefundable.
            </li>
            <li>
              Payment can be done with various methods, such as available
              payment systems in Nepal like IME or Bank transfer, etc.
            </li>
            <li>Full payment should be done before renting the Motorbike.</li>
            <li>
              Payment can be done either in Nepalese rupees or in the dollar.
            </li>
            <li>We don’t accept credit cards.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">2. What should I submit for Rental?</h4>
          <ul className="list-disc ml-5">
            <li>
              Motorcycle Driving license is mandatory for renting Motorbike.
            </li>
            <li>Deposit of your Original Passport with Nepalese Visa.</li>
            <li>
              Or you need to have someone to stay as a guarantor from Nepal in
              case if you don’t want to deposit your passport.
            </li>
            <li>
              One identity card + refundable Cash Deposit according to Bike.
              (Depends on the bike from USD 500 up to USD 1000 refundable cash
              required to rent a motorbike.)
            </li>
            <li>Required a International motorcycle driving license</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">
            3. What license is required for Motorbike rental or Tours ?
          </h4>
          <p>
            Rider must have a Motorcycle driving license to rent a bike or
            touring with us. It's not allowed riding a motorbike with a Car
            Driving license in Nepal.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            4. What is included on the Motorcycle Rental price ?
          </h4>
          <ul className="list-disc ml-5">
            <li>
              Only helmet and the use of motorcycle for the time. (Fuel is not
              included in rental price).
            </li>
            <li>
              We provide only 2/3 ltr of fuel before handing bike for Rentals.
              Which is enough to go any nearby fuel pump.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default faqs;
