"use client";
import React, { useState, useEffect,Suspense} from "react";
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

  // useEffect(() => {
  //   const fetchVehicleData = async () => {
  //     try {
  //       // Fetch vehicle data including mileage
  //       const response = await fetch(
  //         `https://carcloudstest.fabspot.co.uk:5000/api/get_mileage?vehicle_number=${vehicleNumber}`
  //       );
  //       if (!response.ok) throw new Error("Failed to fetch vehicle data");

  //       const data = await response.json();
  //       setVehicleData(data);

  //       // Get the last recorded mileage from the response
  //       const lastMileage = data.summary?.lastRecordedMileage || "";
  //       setMileageEstimate(lastMileage);

  //       setError(null);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   if (vehicleNumber) {
  //     fetchVehicleData();
  //   }
  // }, [vehicleNumber]);

  // const handleContinue = () => {
  //   router.push(`/details?vehicleNumber=${vehicleNumber}`);
  // };

  // if (error) return <p className="text-red-500 mt-4">{error}</p>;
  // if (!vehicleData) return <p>Loading...</p>;

  return (
    <div className="w-full h-screen">
      <div className="flex w-full">
        <div className="bg-white w-full flex flex-col h-screen">
          <div className="sm:h-3/4 h-[70%] flex items-center">
            <div className="flex w-full justify-center items-center flex-col">
              <div className="flex items-start flex-col sm:w-2/3 w-full">
                <span
                  className="font-semibold flex text-black underline cursor-pointer"
                  // onClick={() => router.back()}
                >
                  <MdKeyboardArrowLeft className="mt-1 sm:mt-0
                   text-black sm:text-xl text-lg " /> Back
                </span>

                <h1 className="sm:text-4xl text-2xl p-2 sm:p-0 text-black font-bold mt-5">
                  Confirm your car&apos;s current mileage
                </h1>
                <div className="flex w-fit items-center relative mt-5">
                  <input
                    type="text"
                    value={mileageEstimate}
                    // onChange={(e) => setMileageEstimate(e.target.value)}
                    className="sm:w-96 w-96 bg-white text-black border shadow-lg shadow-cyan-200 h-10 rounded-md sm:pl-2 ml-3 sm:ml-0"
                  />
                  <FcOk className="text-3xl absolute right-1" />
                </div>
                <span className="text-black text-xs mt-2 ml-3 sm:ml-0 font-semibold">
                  We&apos;ve estimated your mileage based on your car&apos;s MOT history
                </span>
              </div>
            </div>
          </div>
          <div className="h-52 flex justify-center items-end">
            <div className="flex justify-center mt-auto sm:w-3/4 w-full items-center relative align-middle h-12">
              <button
                // onClick={handleContinue}
                className="bg-yellow-500 h-12 rounded-xl mb-3 text-black font-bold text-xl sm:w-full w-96 "
              >
                Continue
                <FaCircleArrowRight className="bottom-4 sm:right-6 right-9 text-2xl absolute" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/3 bgimg h-screen hidden sm:flex items-center justify-center relative">
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
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarMileagePageContent />
    </Suspense>
  );
};

export default CarMileagePage;

