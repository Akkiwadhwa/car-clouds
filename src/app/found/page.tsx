"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io"; // Importing the menu icon
const CarMileagePageContent = () => {
  // const searchParams = useSearchParams();
  // const router = useRouter();
const [isMenuOpen, setIsMenuOpen] = useState(false); 
  // // Safely fetch query parameter
  // const vehicleNumber = searchParams?.get("vehicle_number");
  // const [vehicleData, setVehicleData] = useState(null);
  // const [error, setError] = useState(null);

  // // Fetch vehicle data when `vehicleNumber` changes
  // useEffect(() => {
  //   if (!vehicleNumber) return;

  //   const fetchVehicleData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://carcloudstest.fabspot.co.uk:5000/api/get_data?vehicle_number=${vehicleNumber}`
  //       );
  //       if (!response.ok) throw new Error("Failed to fetch vehicle data");

  //       const data = await response.json();
  //       setVehicleData(data);
  //       setError(null);
  //     } catch (err) {
  //       console.error("Error fetching vehicle data:", err);
  //       setError(err.message);
  //     }
  //   };

  //   fetchVehicleData();
  // }, [vehicleNumber]);

  // // Handle navigation on button click
  // const handleContinue = () => {
  //   router.push(`/car-mileage?vehicleNumber=${vehicleNumber}`);
  // };

  // // Handle loading and error states
  // if (error) return <p className="text-red-500 mt-4">{error}</p>;
  // if (!vehicleData) return <p>Loading...</p>;

  // Render vehicle information
  return (
    <div className="w-full h-screen">
      <div className="flex w-full">
        {/* Left Section */}
        <div className="bgimg w-full flex flex-col h-screen">
          <div className="h-fit sm:w-[30%] w-[50%]   flex  justify-start items-baseline ">
            <Image
              src="/ballons.png"
              alt="Car with clouds"
              width={350}
              height={400}
              className="sm:pl-10 ml-2 "
            />

            <div className=" sm:hidden  w-full h-full ml-36 flex mr-3 ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="sm:hidden mt-5 text-white text-3xl mr-5"
              >
                <IoMdMenu className="pointer text-4xl" />
              </button>

              {/* Mobile Menu - Visible only on mobile */}
              <div
                className={`${
                  isMenuOpen ? "flex" : "hidden"
                } absolute  top-10 right-14 bg-gray-300 text-sm rounded-lg border-4 border-blue-200 text-center items-center text-white flex-col gap-2  p-4 w-[35%] sm:hidden`}
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
          </div>

          <div className="h-3/4 flex items-center">
            <div className="flex w-full justify-center items-center flex-col">
              <div className="flex sm:items-start flex-col pl-3 sm:pl-0 sm:w-2/3">
                {/* Back Button */}
                <button
                  className="font-semibold flex text-white  cursor-pointer"
                  // onClick={() => router.back()}
                >
                  <MdKeyboardArrowLeft className="pt-1 text-white text-lg font-semibold" />
                  Back
                </button>

                {/* Vehicle Information */}
                <h1 className="sm:text-5xl text-3xl text-white font-bold mt-5">
                  Have we found your car?
                </h1>
                <div className="flex sm:items-center items-start relative gap-4 mt-5 flex-col">
                  <span className="bg-yellow-400 pl-4 text-3xl pr-4 font-bold text-black rounded-lg">
                    ABC1234
                  </span>
                </div>
                <span className="text-white text-xl sm:mt-4 mt-7  font-semibold flex items-center">
                  <Image
                    src="/bmw-logo (2).svg"
                    alt="BMW logo"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  BMW X5 (2020) Black
                </span>
                <p className="text-white ml-10 text-sm -mt-1">
                  Petrol &#8226; 3000 cc &#8226; Black
                </p>
              </div>
              <div className="mt-10  flex justify-start item-start w-[75%]">
                <p className="text-white ml-10 underline sm:text-sm text-xs -mt-1">
                  This isn't the right car
                </p>
                </div>
            </div>
            
          </div>

          {/* Continue Button */}
          <div className="h-fit  flex justify-center items-center pb-5">
            <div className="flex justify-center mt-auto w-[80%]  items-center relative align-middle h-fit">
              <button
                // onClick={handleContinue}
                className="bg-yellow-500 h-12 rounded-xl mb-3 text-black font-bold text-xl w-full"
              >
                Continue
                <FaCircleArrowRight className="bottom-6  right-6 text-2xl absolute" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-2/3 bgimg h-screen flex items-center justify-center relative"
          id="foundbg"
        >
          <div className="bg-transparent flex items-start justify-start mr-auto h-fit w-full">
            {/* <Image
              src="/ballons.png"
              alt="Car with clouds"
              width={500}
              height={500}
              className="object-cover"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarMileagePageContent;
