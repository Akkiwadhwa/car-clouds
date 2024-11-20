import React from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  };

  
  return (
    <footer className="bg-[#001a4d] text-white w-screen bb-10 ">
      <div className="container mx-auto  text-center flex flex-col items-center space-y-6">
        <div className="h-20  bg-[#001a4d] w-[100%] justify-center rounded-b-2xl flex-col ">
          {/* Contact Section */}
          <p className="text-xl font-medium pt-5">
            Need a hand? Call, email or WhatsApp, we’re here to help.{" "}
          </p>
          <a href="#" className="text-yellow-500 font-medium underline">
            Chat to us now!
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 h-14 bg-blue-700 justify-center items-center w-full py-2 px-8 ">
          <a href="#" aria-label="Facebook" className="text-white text-2xl">
            {/* Add your Facebook icon component here */}
            <RiFacebookFill className="text-white" />
          </a>
          <a href="#" aria-label="Instagram" className="text-white text-2xl">
            {/* Add your Instagram icon component here */}
            <FaInstagram className="text-white" />
          </a>
        </div>

        {/* Call to Action Button */}
        <button  onClick={scrollToTop} className="bg-yellow-500 text-black w-48 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition">
          Car Clouds For Dealers →
        </button>

        {/* Legal Links */}
        <div className="text-lg font-bold space-x-4">
          <a href="#" className="text-yellow-500 underline">
            Terms
          </a>
          <span>•</span>
          <a href="#" className="text-white">
            Privacy
          </a>
          <span>•</span>
          <a href="#" className="text-white">
            GDPR
          </a>
          <span>•</span>
          <a href="#" className="text-white">
            Cookies
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-xs mt-4 font-thin w-[50%] ">
          <p>© Car Clouds Ltd. 2024</p>
          <p className="mt-2">
            *84% of Car Clouds sellers sold their vehicle for more than the
            average market price valuation between Jan 2020 and October 2023
            (based on two independent market pricing guides). Visit
            carclouds.co.uk/claims
          </p>
          <p className="mt-2">
            **On average, Car Clouds sellers received £1,600 more for their
            vehicle compared to part exchange offers (based on a customer survey
            in August 2024). Visit carclouds.co.uk/claims
          </p>
          <p className="mt-2">
            83% of payments are made on the day of handover.
          </p>
        </div>

        {/* Decorative Cloud Images */}
        <div className="flex justify-center space-x-10 mt-10 ">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66016d2b60ecbd0de68c4460/dc4b058c-f7cc-4e98-8ca8-e66a3673d7b9/car+clouds+%2819%29.png?format=2500w"
            alt="Cloud Left"
            className="h-16"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/66016d2b60ecbd0de68c4460/dc4b058c-f7cc-4e98-8ca8-e66a3673d7b9/car+clouds+%2819%29.png?format=2500w"
            alt="Cloud Right"
            className="h-16"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
