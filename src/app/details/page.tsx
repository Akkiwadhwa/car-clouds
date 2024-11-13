"use client";

import React, { useState,Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FaCircleArrowRight } from "react-icons/fa6";

const DetailsPage = () => {
  const searchParams = useSearchParams();
  const vehicleNumber = searchParams.get("vehicleNumber");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  const router = useRouter();

  const handleContinue = () => {
    // Include vehicleData and user inputs in the data to pass to the next page
    const updatedData = {
      vehicleNumber:vehicleNumber,
      email:email,
      name:name,
      phone:phone,
      id:id,
    };
    const dataString = encodeURIComponent(JSON.stringify(updatedData));
    router.push(`/estimate?data=${dataString}`);
  };

  if (!vehicleNumber) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div className="flex w-full">
        <div className="bg-white w-full flex flex-col h-screen">
          <div className="h-screen flex sm:items-center">
            <div className="flex w-full sm:justify-center sm:items-center flex-col">
              <div className="flex items-start flex-col sm:w-[80%] ">
                <h1 className="sm:text-3xl text-sm text-black sm:font-bold p-3 sm:p-0 font-semibold sm:mt-0 mt-20">
                  Complete your details to get <u>FREE</u> no-obligation offers
                  and advice on selling your Car
                </h1>
                <div className="flex flex-col sm:items-center relative mt-10 sm:p-0 p-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="sm:w-96 w-72 bg-gray-100 text-black h-10 rounded-md pl-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    className="sm:w-96 w-72 bg-white mt-7 border-2 text-black h-10 rounded-md pl-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="sm:w-96 w-72 bg-white mt-7 border-2 text-black h-10 rounded-md pl-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="ID"
                    className="sm:w-96 w-72 bg-white mt-7 border-2 text-black h-10 rounded-md pl-2"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <span className="text-black underline text-sm mt-7 font-bold sm:ml-0 ml-3">
                  Been referred by a friend?
                </span>
                <div className="flex justify-center mt-6 w-full p-4 sm:p-0 sm:w-[45%] items-center relative align-middle h-12">
                  <button
                    className="bg-yellow-500 sm:h-10 h-8 rounded-lg sm:ml-0 ml-3  text-black font-semibold sm:font-bold sm:text-xl w-full"
                    onClick={handleContinue}
                  >
                    Continue
                    <FaCircleArrowRight className=" sm:bottom-3 bottom-4  right-6 text-lg sm:text-2xl absolute" />
                  </button>
                </div>
                <div className="mt-5 text-black sm:w-[50%] p-4 sm:p-0  font-medium text-xs">
                  By proceeding you confirm you have read our{" "}
                  <u>Privacy Policy</u> and agree to our <u>Terms & Conditions</u>. You
                  agree to sign up to our free service and understand you will
                  be contacted about selling your vehicle. More information
                  about how you will be contacted is <u>here</u>. You can opt
                  out of these emails and stop this service at any time.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 bgimg bg-white h-screen hidden sm:flex items-center justify-center relative">
          <div className="bg-transparent flex items-start justify-start mr-auto h-fit w-full">
            <Image
              src="/ballons.png"
              alt="Car with clouds"
              width={500}
              height={500}
              className=""
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
      <DetailsPage />
    </Suspense>
  );
};

export default CarMileagePage;

