"use client";

import React, { useState } from "react";
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
    <div className="w-full h-screen">
      <div className="flex w-full">
        <div className="bg-white w-full flex flex-col h-screen">
          <div className="h-screen flex items-center">
            <div className="flex w-full justify-center items-center flex-col">
              <div className="flex items-start flex-col w-[80%]">
                <h1 className="text-3xl text-black font-bold mt-0">
                  Complete your details to get <u>FREE</u> no-obligation offers
                  and advice on selling your Car
                </h1>
                <div className="flex flex-col items-center relative mt-10">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-96 bg-gray-100 text-black h-10 rounded-md pl-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-96 bg-white mt-7 border-2 text-black h-10 rounded-md pl-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-96 bg-white mt-7 border-2 text-black h-10 rounded-md pl-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="ID"
                    className="w-96 bg-white mt-7 border-2 text-black h-10 rounded-md pl-2"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <span className="text-black underline text-sm mt-7 font-bold">
                  Been referred by a friend?
                </span>
                <div className="flex justify-center mt-6 w-[45%] items-center relative align-middle h-12">
                  <button
                    className="bg-yellow-500 h-10 rounded-xl text-black font-bold text-xl w-full"
                    onClick={handleContinue}
                  >
                    Continue
                    <FaCircleArrowRight className="bottom-3 right-6 text-2xl absolute" />
                  </button>
                </div>
                <div className="mt-5 text-black w-[50%] font-medium text-xs">
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
        <div className="w-2/3 bgimg bg-white h-screen flex items-center justify-center relative">
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

export default DetailsPage;
