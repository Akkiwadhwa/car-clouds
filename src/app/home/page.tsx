"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io"; // Importing the menu icon
import { FaCircleArrowRight } from "react-icons/fa6";

const Page = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility
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
      <div className="flex h-[15%] sm:h-[30%] items-start pt-6 sm:pt:0  sm:items-center justify-between px-0  sm:px-10">
        <Image
          src="/ballons.png"
          alt="Car with clouds"
          width={300}
          height={350}
          className="sm:pl-10 pl-5  h-28 w-52 sm:h-full sm:w-auto"
        />

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white text-3xl mr-5"
        >
          <IoMdMenu className="pointer text-4xl" />
        </button>

        {/* Mobile Menu - Visible only on mobile */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-10 right-24 bg-gray-300 text-sm rounded-lg border-4 border-blue-200 text-center items-center text-black flex-col gap-2 p-4 w-[35%] sm:hidden`}
        >
          <div className="flex items-center gap-3 mt-0 border-b-2 font-semibold">
            <img
              className="w-10 h-10 rounded-full"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="avatar"
            />
            <button className="hover:cursor-pointer hover:font-semibold p-1 rounded-full hover:bg-gray-200">
              Login
            </button>
          </div>
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

        {/* Desktop layout of menu items - Visible only on desktop */}
        <div className="hidden sm:flex text-white flex-row items-center gap-6 text-xl font-bold p-10">
          <button>How it works</button>
          <button>Tools</button>
          <button>Sell my car</button>
          <button>More</button>
          <button>Dealer</button>
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="Rounded avatar"
            />
            <button>Login</button>
          </div>
        </div>
      </div>

      {/* Remaining content */}
      <div className="smh-full h-fit flex flex-col sm:flex-row">
        <div className="sm:h-[70%] flex w-[100%] h-[100%] sm:w-[60%] mt-10 flex-col ">
          <div className="flex justify-center ml-14 font-bold flex-col">
            <span className="text-white text-3xl mr-1 sm:text-4xl font-sans md:text-5xl lg:text-7xl">
              Get The Most For Your Car with Car Clouds
            </span>
            <h3 className="font-thin pt-1 sm:mt-0 mt-5 text-white text-lg sm:text-xl">
              Most Car Cloud sellers surveyed got an average £1,000 more vs part
              exchange quotes.
            </h3>
          </div>

          <div className="justify-center flex sm:h-fit sm:mt-0 mt-10  " >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-200 shadow-xl sm:h-40 mt-10 flex flex-col rounded-lg w-[90%] p-6"
            >
              <span className="text-black text-center sm:text-left text-xl md:text-xl font-semibold">
                Your vehicle registration
              </span>
              <div className="flex gap-4 p-0 sm:p-0 mt-5 md:flex-row flex-col">
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
          <div className="text-black text-lg sm:text-2xl flex justify-center h-full mt-7">
            <div className="h-fit flex items-center sm:mt-0 mt-10 p-4 flex-col sm:flex-row sm:w-[90%] font-sans">
              <span>
                Rated <strong>4.5/5</strong> from <strong>61,506</strong>{" "}
                reviews
              </span>
              <Image
                src="/TrustPilot-4.5-1.png"
                alt="Trustpilot logo"
                width={300}
                height={50}
                className="sm:ml-2 mt-1"
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden sm:flex justify-end hidden sm:h-[70%] sm:w-[40%]">
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
