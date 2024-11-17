"use client";

import React, { useState,Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoMdMenu } from "react-icons/io"; // Importing the menu icon

const DetailsPage = () => {
  const searchParams = useSearchParams();
  // const vehicleNumber = searchParams.get("vehicleNumber");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility
 



  // const router = useRouter();

  // const handleContinue = () => {
  //   // Include vehicleData and user inputs in the data to pass to the next page
  //   const updatedData = {
  //     vehicleNumber:vehicleNumber,
  //     email:email,
  //     name:name,
  //     phone:phone,
  //     id:id,
  //   };
  //   const dataString = encodeURIComponent(JSON.stringify(updatedData));
  //   router.push(`/estimate?data=${dataString}`);
  // };

  // if (!vehicleNumber) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="w-full h-screen overflow-x-hidden overflow-y-hidden pb-10">
      <div className="flex w-full ">
        <div className="bgimg w-full flex flex-col h-screen">
         <div className="flex flex-row justify-start items-center pt-5  w-[100%] ">
            
          <div className="h-fit sm:w-[30%] w-[50%]   flex  justify-start items-baseline ">
            <Image
              src="/ballons.png"
              alt="Car with clouds"
              width={350}
              height={400}
              className="sm:pl-10 ml-2 "
            />


  </div>

            <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden ml-auto  text-white text-3xl mr-5"
        >
          <IoMdMenu className="pointer text-4xl" />
        </button>

        {/* Mobile Menu - Visible only on mobile */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute  top-10 right-14 bg-gray-300 text-sm rounded-lg border-4 border-blue-200 text-center items-center text-black flex-col gap-2  p-4 w-[35%] sm:hidden`}
        >
          <button className="hover:cursor-pointer hover:font-semibold pr-2 pl-2 rounded-full hover:bg-gray-200">
            How it works
          </button>
          <button className="hover:cursor-pointer hover:font-semibold pr-2 pl-2 rounded-full hover:bg-gray-200">
            Tools
          </button>
          <button className="hover:cursor-pointer hover:font-semibold pr-2 pl-2 rounded-full hover:bg-gray-200">
            Sell my car
          </button>
          <button className="hover:cursor-pointer hover:font-semibold pr-2 pl-2 rounded-full hover:bg-gray-200">
            More
          </button>
          <button className="hover:cursor-pointer hover:font-semibold pr-2 pl-2 rounded-full hover:bg-gray-200">
            Dealer
          </button>
        </div>
      
          
          </div>
          <div className="h-screen flex  items-center   ">
            <div className="flex w-full justify-center items-center flex-col">
              <div className="flex items-start flex-col  sm:w-[80%]  ">
                <span
                  className="font-semibold flex text-white  cursor-pointer pl-2 sm:pl-0"
                  // onClick={() => router.back()}
                >
                  <MdKeyboardArrowLeft className="mt-1 text-white text-lg font-semibold" />{" "}
                  Back
                </span>
                <h1 className="sm:text-4xl sm:pt-5 text-2xl text-white sm:font-bold p-5 sm:p-0 font-semibold sm:mt-0 ">
                  Complete your details to get <u>FREE</u> no-obligation offers
                  and advice on selling your Car
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5 sm:mt-5 mt-2 ml-5 sm:ml-0 ">
                  <input
                    type="email"
                    placeholder="Email"
                   className="sm:w-80 w-60  bg-white/30  placeholder:text-white text-white h-10 rounded-md pl-2"
                    value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    className="sm:w-80  bg-white/30  placeholder:text-white text-white h-10 rounded-md pl-2"
                    value={name}
                    // onChange={(e) => setName(e.target.value)}
                  />
                <input
  type="tel"
  placeholder="Phone"
  className="sm:w-80  bg-white/30  placeholder:text-white text-white h-10 rounded-md pl-2"
  value={phone}
  // onChange={(e) => setPhone(e.target.value)}
/>

                  <input
                    type="text"
                    placeholder="ID"
                    className="sm:w-80 w-36  bg-white/30  placeholder:text-white text-white h-10 rounded-md pl-2"
                    value={id}
                    // onChange={(e) => setId(e.target.value)}
                  />
                </div>

               
               
                <div className="sm:mt-5  text-white sm:w-[70%] w-[80%] p-4 sm:p-0  font-medium text-xs">
                  By proceeding you confirm you have read our{" "}
                  <u>Privacy Policy</u> and agree to our{" "}
                  <u>Terms & Conditions</u>. You agree to sign up to our free
                  service and understand you will be contacted about selling
                  your vehicle. More information about how you will be contacted
                  is <u>here</u>. You can opt out of these emails and stop this
                  service at any time.
                </div>
                 <div className="flex justify-center sm:mt-6 w-full p-4 sm:p-0 sm:w-[100%]  items-center relative align-middle h-12">
                  <button
                    className="bg-yellow-500 h-12 rounded-xl sm:mb-3 sm:mt-5 text-black font-bold text-xl sm:w-full w-[90%] "
                    // onClick={handleContinue}
                  >
                    See My Valuation
                    <FaCircleArrowRight className=" sm:bottom-2 bottom-4  right-16 text-lg sm:text-2xl absolute" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 foundcar bg-white h-screen hidden sm:flex items-center justify-center relative">
          <div className="bg-transparent flex items-start justify-start mr-auto h-fit w-full">
            {/* <Image
              src="/ballons.png"
              alt="Car with clouds"
              width={500}
              height={500}
              className=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const CarMileagePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailsPage />
    </Suspense>
  );
};

export default CarMileagePage;

