"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCircleArrowRight } from "react-icons/fa6";

const Page = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    setVehicleNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vehicleNumber) {
      router.push(`/found?vehicle_number=${vehicleNumber}`);
    }
  };

  return (
    <div className="bgcar h-screen w-screen sm:overflow-hidden">
      <div className="flex h-[30%]">
        <div className="sm:h-full h-44 w-[40%]  sm:w-[30%] flex justify-start">
          <Image
            src="/ballons.png"
            alt="Car with clouds"
            width={350}
            height={350}
            className="pl-10"
          />
        </div>
        <div className="text-white justify-center flex sm:flex-row flex-col items-center w-32 sm:w-[55%] gap-2 sm:gap-6 p-2 sm:p-10 text-sm sm:text-xl font-bold">
          <button>How it works</button>
          <button>Tools</button>
          <button>Sell my car</button>
          <button>More</button>
          <button>Dealer</button>
        </div>
        <div className="text-white justify-center  flex flex-col  sm:flex-row items-center w-[20%] text-sm sm:text-xl font-bold gap-3 p-2 sm:p-5">
          <img
            className="w-10 h-10 rounded-full"
            src="/docs/images/people/profile-picture-5.jpg"
            alt="Rounded avatar"
          />
          <button>Login</button>
        </div>
      </div>
      <div
        className="h-full flex flex-col sm:flex-row
      "
      >
        <div className="sm:h-[70%] flex w-[100%] h-[100%] sm:w-[60%] mt-10 flex-col ">
          <div className="flex justify-center ml-14 font-bold flex-col">
            <span className="text-white text-lg sm:text-4xl font-sans md:text-5xl lg:text-7xl">
              Get The Most For Your Car with Car Clouds
            </span>
            <h3 className="font-thin text-white text-sm md:text-xl">
              Most Car Cloud sellers surveyed got an average £1,000 more vs part
              exchange quotes.
            </h3>
          </div>

          <div className="justify-center flex h-fit  ">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-200 shadow-xl  sm:h-40 mt-10 flex flex-col rounded-lg w-[90%] p-6"
            >
              <span className="text-black text-2xl md:text-xl font-semibold">
                Your vehicle registration
              </span>
              <div className="flex gap-4 p-2 sm:p-0 mt-5 md:flex-row flex-col">
                <input
                  type="text"
                  placeholder="ENTER REG"
                  value={vehicleNumber}
                  onChange={handleInputChange}
                  className="w-[18rem] md:w-[18rem] lg:w-[22rem] bg-white text-lg md:text-xl border-1 text-black border-slate-400 placeholder:font-bold placeholder:text-2xl md:placeholder:text-3xl lg:placeholder:text-4xl placeholder:text-center placeholder:font-serif h-14 rounded-md"
                />
                <div className="bg-yellow-500 flex rounded-lg relative w-fit">
                  <button
                    type="submit"
                    className="bg-yellow-500 h-14 rounded-xl text-black font-bold text-lg md:text-2xl w-[10rem] md:w-[18rem] lg:w-[22rem]"
                  >
                    Start Now
                    <FaCircleArrowRight className="right-3 bottom-4 text-xl md:text-2xl absolute" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="text-black text-lg sm:text-2xl flex  justify-center h-full mt-5">
            <div className="h-fit flex  items-center p-4 flex-col sm:flex-row sm:w-[90%] font-sans">
              <span>
                Rated <strong>4.5/5</strong> from <strong>61,506</strong>{" "}
                reviews
              </span>
              <Image
                src="/TrustPilot-4.5-1.png"
                alt="Trustpilot logo"
                width={300}
                height={50}
                className=" sm:ml-2 mt-1" // Adds spacing between the text and image
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden  flex justify-end h-[90%] sm:h-[70%] sm:w-[40%]">
          <Image
            src="/car.png"
            alt="Car with clouds"
            width={700}
            height={80}
            className="pl-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
