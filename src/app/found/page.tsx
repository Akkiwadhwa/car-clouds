"use client";
import React, { useEffect, useState,Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";

const CarMileagePageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const vehicleNumber = searchParams.get("vehicle_number");
  const [vehicleData, setVehicleData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_data?vehicle_number=${vehicleNumber}`
        );
        if (!response.ok) throw new Error("Failed to fetch vehicle data");

        const data = await response.json();
        setVehicleData(data.vehicle);
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
    const data = encodeURIComponent(JSON.stringify(vehicleData));
    router.push(`/car-mileage?data=${data}`);
  };
  

  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (!vehicleData) return <p>Loading...</p>;

  return (
    <div className="w-full h-screen">
      <div className="flex w-full">
        <div className="bg-white w-full flex flex-col h-screen">
          <div className="h-3/4 flex items-center">
            <div className="flex w-full justify-center items-center flex-col">
              <div className="flex items-start flex-col w-2/3">
                <span
                  className="font-semibold flex text-black underline cursor-pointer"
                  onClick={() => router.back()}
                >
                  <MdKeyboardArrowLeft className="mt-1 text-black text-lg font-semibold" /> Back
                </span>

                <h1 className="text-4xl text-black font-bold mt-5">
                  Have we found your car?
                </h1>
                <div className="flex items-center relative gap-4 mt-5 flex-col">
                  <span className="bg-yellow-400 pl-3 text-xl pr-3 font-bold font-sans text-black rounded-lg">
                    {vehicleData.vrm_pretty}
                  </span>
                </div>
                <span className="text-black text-lg mt-4 font-semibold flex items-center">
                  <img src="/bmw-logo (2).svg" alt="BMW logo" className="w-8 h-8 mr-2" />
                  {vehicleData.make.display_name} {vehicleData.genericModel.name} ({vehicleData.manufactureYear}) {vehicleData.model}
                </span>
                <p className="text-gray-600 ml-10 text-sm -mt-1">
                  {vehicleData.transmission} &#8226; {vehicleData.fuel} &#8226; {vehicleData.colour}
                </p>
              </div>
            </div>
          </div>
          <div className="h-52 flex justify-center items-end">
            <div className="flex justify-center mt-auto w-3/4 items-center relative align-middle h-12">
              <button
                onClick={handleContinue}
                className="bg-yellow-500 h-12 rounded-xl mb-3 text-black font-bold text-xl w-full"
              >
                Continue
                <FaCircleArrowRight className="bottom-4 right-6 text-2xl absolute" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/3 bgimg h-screen flex items-center justify-center relative">
          <div className="bg-transparent flex items-start justify-start mr-auto h-fit w-full">
            <Image
              src="/ballons.png"
              alt="Car with clouds"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


const FoundPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarMileagePageContent />
    </Suspense>
  );
};

export default FoundPage;

