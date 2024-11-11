"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import { FaCircleArrowRight } from "react-icons/fa6";

const CarMileagePageContent = () => {
  const searchParams = useSearchParams();
  const vehicleNumber = searchParams.get("vehicleNumber");
  const router = useRouter();

  const [vehicleData, setVehicleData] = useState(null);
  const [mileageEstimate, setMileageEstimate] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        // Fetch vehicle data including mileage
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_mileage?vehicle_number=${vehicleNumber}`
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
    // Update vehicleData with the mileageEstimate
    const updatedVehicleData = {
      ...vehicleData,
      mileageEstimate, // Use mileageEstimate instead of mileageEst
    };
    router.push(`/details?vehicleNumber=${vehicleNumber}`);
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
                  <MdKeyboardArrowLeft className="mt-0 text-black text-xl" /> Back
                </span>

                <h1 className="text-4xl text-black font-bold mt-5">
                  Confirm your car&apos;s current mileage
                </h1>
                <div className="flex items-center relative mt-5">
                  <input
                    type="text"
                    value={mileageEstimate}
                    onChange={(e) => setMileageEstimate(e.target.value)}
                    className="w-96 bg-white text-black border shadow-lg shadow-cyan-200 h-10 rounded-md pl-2"
                  />
                  <FcOk className="text-3xl absolute right-1" />
                </div>
                <span className="text-black text-xs mt-2 font-semibold">
                  We&apos;ve estimated your mileage based on your car&apos;s MOT history
                </span>
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

const CarMileagePage = () => {
  return <CarMileagePageContent />;
};

export default CarMileagePage;
