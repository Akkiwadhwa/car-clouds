"use client";
import React, { useState, useEffect,Suspense} from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import { FaCircleArrowRight } from "react-icons/fa6";
// import { IoMdMenu } from "react-icons/io"; // Importing the menu icon
import Link from "next/link";

const CarMileagePageContent = () => {
  const searchParams = useSearchParams();
  const vehicleNumber = searchParams.get("vehicleNumber");
  const router = useRouter();

  const [vehicleData, setVehicleData] = useState(null);
  const [mileageEstimate, setMileageEstimate] = useState("");
  const [error, setError] = useState(null);
  //  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        // Fetch vehicle data including mileage
        const response = await fetch(
          `https://carcloudstest.fabspot.co.uk:5000/api/get_mileage?vehicle_number=${vehicleNumber}`
        );
        if (!response.ok) throw new Error("Failed to fetch vehicle data");

        const data = await response.json();
        setVehicleData(data);

        // Get the last recorded mileage from the response
        const lastMileage = data.summary?.lastRecordedMileage || "";
        setMileageEstimate(lastMileage);

        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    if (vehicleNumber) {
      fetchVehicleData();
    }
  }, [vehicleNumber]);

  const handleContinue = () => {
    router.push(`/details?vehicleNumber=${vehicleNumber}`);
  };

  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (!vehicleData) return <p>Loading...</p>;

  return (
    <div className="w-full h-screen">
      <div className="flex w-full">
        <div className="bgimg flex flex-col h-screen w-full">
          <div className="flex flex-row justify-start items-center pt-5  w-[100%] ">
            
            <div className="h-fit sm:w-[30%] w-[50%]   flex  justify-start items-baseline ">
               <Link href="/home">
            <Image
              src="/ballons.png"
              alt="Car with clouds"
              width={350}
              height={400}
                className="sm:pl-10 ml-2 "
               
            />
 </Link>

  </div>

            {/* <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden ml-auto  text-white text-3xl mr-5"
        >
          <IoMdMenu className="pointer text-4xl" />
        </button> */}

        {/* Mobile Menu - Visible only on mobile */}
        {/* <div
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
       */}
          
          </div>

          <div className="sm:h-3/4 h-[70%] flex items-center pr-7 pl-7 sm:pr-0 sm:pl-0">
            <div className="flex w-full justify-center items-center flex-col">
              <div className="flex items-start  flex-col sm:w-2/3 w-full ">
                <span
                  className="font-semibold flex text-white underline cursor-pointer"
                  onClick={() => router.back()}
                >
                  <MdKeyboardArrowLeft className="mt-1 sm:mt-0
                   text-white sm:text-xl text-lg " /> Back
                </span>

                <h1 className="sm:text-5xl text-3xl p-2 sm:p-0  text-white font-bold mt-5">
                  Confirm your car&apos;s current mileage
                </h1>
                <div className="flex  items-center  w-full sm:w-fit relative mt-5  ">
                  <input
                    type="text"
                    value={mileageEstimate}
                    onChange={(e) => setMileageEstimate(e.target.value)}
                    className="w-full inputbox  bg-white/30  text-white  shadow-lg  h-9 rounded-md sm:pl-2  sm:ml-3 "
                  />
                  <FcOk className="text-3xl absolute right-1" />
                </div>
                <span className="text-white text-xs mt-2  font-semibold">
                  We&apos;ve estimated your mileage based on your car&apos;s MOT history
                </span>
              </div>
            </div>
          </div>
          <div className="h-52 flex justify-center items-center  ">
            <div className="flex sm:justify-start justify-center sm:mt-auto sm:w-3/4  w-full sm:items-center relative align-middle h-fit">
              <button
                onClick={handleContinue}
                className="bg-yellow-400 h-12 rounded-xl sm:mb-3 sm:mt-5 text-black font-bold text-xl sm:w-full w-[90%] "
              >
                Continue
                <FaCircleArrowRight className="sm:bottom-6 bottom-3 sm:right-6 right-9 text-2xl absolute" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/3 mileagecar h-screen hidden sm:flex items-center justify-center relative">
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

const CarMileagePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarMileagePageContent />
    </Suspense>
  );
};

export default CarMileagePage;

