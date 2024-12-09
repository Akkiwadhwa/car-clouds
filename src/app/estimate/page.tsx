"use client";

import React, { useState, useEffect ,Suspense} from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

const EstimatePage = () => {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");
  const vehicleData = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [valuationData, setValuationData] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  

  useEffect(() => {
    const fetchValuationData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_value?vehicle_number=${vehicleData.vehicleNumber}`
        );
        if (!response.ok) throw new Error("Failed to fetch valuation data");

        const data = await response.json();
        setValuationData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    if (vehicleData) {
      fetchValuationData();
    }
  }, [vehicleData]);

  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (!valuationData) return <p>Loading...</p>;

  // Format the price with commas
  const formattedPrice = new Intl.NumberFormat('en-GB').format(
    valuationData.ValuationList.PartExchange
  );

  return (
    <div className="bgcar2 h-screen w-screen overflow-hidden">
      <div className="flex h-[30%]">
        {/* Header Section */}
        <div className="h-full sm:w-[30%] w-[100%] flex  justify-start items-baseline mt-10">
          <Image
            src="/ballons.png"
            alt="Car with clouds"
            width={350}
            height={400}
            className="sm:pl-10 ml-2 "
          />
        </div>

        {/* Desktop layout of menu items - Visible only on desktop */}
        <div className="hidden sm:flex text-white flex-row items-center gap-6 text-xl font-bold p-10">
          <button>How it works</button>
          <button>Tools</button>
          <button>Sell my car</button>
          <button>More</button>
          <button>Dealer</button>
        </div>

        <div className="flex items-center ml-10 sm:mt-0 gap-2">
          {/* <img
            className="w-10 h-10 rounded-full"
            src="/blank_img.webp"
            alt="Rounded avatar"
          />
          <button>Login</button> */}
        </div>

      <div className=" sm:hidden flex item-center justify-end w-full  ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden mt-1 text-white text-2xl mr-10 "
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
      </div>

      <div className="h-[60%]  sm:justify-center flex">
        <div className="bg-white max-w-3xl h-full p-4 mx-auto sm:m-5 sm:mr-0 sm:ml-0  mr-5 ml-5  justify-center flex flex-col items-center rounded-xl shadow-lg space-y-4 text-center">
          {/* Top Section */}
          <div className="bg-cyan-100 text-gray-600 sm:py-4 sm:mt-0  sm:p-0 p-4  w-[80%] rounded-md">
            <p className="font-bold sm:text-2xl">
              Verified dealers want your car!
            </p>
            <p className="sm:text-sm text-xs">
              Agree your sale in as little as 12 hours**
            </p>
          </div>

          {/* Price Section */}
          <div className="w-full">
            <p className="text-gray-600 mt-2 sm:mt-0 font-semibold">
              Your estimated sale price:
            </p>
            <p className="sm:text-7xl text-4xl text-black font-extrabold">
              £ {formattedPrice}<span className="text-lg">*</span>
            </p>
          </div>

          {/* Slider Section */}
          <div className="w-full sm:pr-6 sm:pl-6 pl-3 pr-3">
            <div className="flex justify-between text-sm font-semibold text-gray-600">
              <span>Well-loved</span>
              <span>Showroom ready</span>
            </div>
            <div className="relative h-2 mt-2 bg-gradient-to-r from-yellow-400 to-green-500 mb-1 rounded-full">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 -mt-2 bg-green-600 rounded-full border border-white"></div>
            </div>
          </div>

          {/* Value Section */}
          <div className="space-y-1">
            <p className="font-extrabold text-gray-800 sm:text-xl">
              Think your car’s worth more?
            </p>
            <p className="text-gray-600 font-semibold sm:text-lg text-sm">
              We get it. Your car’s special - share its specs with us and let’s
              talk price.
            </p>
          </div>

          {/* Button Section */}
          <button
            className="bg-yellow-500 hover:bg-yellow-500 mt-10 sm:mt-0 text-black py-2 sm:py-3 px-4 rounded-lg text-xl font-bold flex items-center justify-center gap-2 sm:w-[28rem]"
            onClick={() => router.push(`/home`)}
          >
            Tell us more
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};


const CarMileagePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EstimatePage />
    </Suspense>
  );
};

export default CarMileagePage;

