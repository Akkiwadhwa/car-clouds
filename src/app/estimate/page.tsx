import Image from "next/image";
import React from "react";
import { FaArrowRight, FaCircleArrowRight } from "react-icons/fa6";

interface Props {}

const page = (props: Props) => {
  return (
    <div className="bgcar2  h-screen w-screen overflow-hidden">
      <div className="flex h-[30%]">
        <div className="h-full w-[30%] flex justify-start items-baseline mt-8">
          <Image
            src="/ballons.png"
            alt="Car with clouds"
            width={350}
            height={400}
            className="pl-10"
          />
        </div>
        <div className="text-white justify-center flex sm:flex-row flex-col items-center w-[55%] gap-6 p-10 text-lg md:text-xl font-bold">
          <button>How it works</button>
          <button>Tools</button>
          <button>Sell my car</button>
          <button>More</button>
          <button>Dealer</button>
        </div>
        <div className="text-white justify-center flex items-center w-[30%] text-lg md:text-xl font-bold gap-3 p-5">
          <img
            className="w-10 h-10 rounded-full"
            src="/docs/images/people/profile-picture-5.jpg"
            alt="Rounded avatar"
          />
          <button>Login</button>
        </div>
      </div>

      <div className="h-[60%]  ">
        <div className="bg-white max-w-3xl h-full p-4  mx-auto  m-5 justify-center flex flex-col items-center rounded-xl shadow-lg space-y-4 text-center">
          {/* Top Section */}
          <div className="bg-cyan-100 text-gray-600 py-4 w-[80%]  rounded-md">
            <p className="font-bold text-2xl">
              Verified dealers want your car!
            </p>
            <p className="text-sm">
              Agree your sale in as little as 12 hours**
            </p>
          </div>

          {/* Price Section */}
          <div className=" w-full">
            <p className="text-gray-600 font-semibold">
              Your estimated sale price:
            </p>
            <p className="text-7xl text-black font-extrabold">
              £14,615 <span className="text-lg">*</span>
            </p>
          </div>

          {/* Slider Section */}
          <div className=" w-full pr-6 pl-6">
            <div className="flex justify-between text-sm font-semibold text-gray-600">
              <span>Well-loved</span>
              <span>Showroom ready</span>
            </div>
            <div className="relative h-2 mt-2  bg-gradient-to-r from-yellow-400 to-green-500 mb-1 rounded-full">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 -mt-2  bg-gradient-to-r from-yellow-400 to-green-500  bg-green-600 rounded-full border border-white"></div>
            </div>
          </div>

          {/* Value Section */}
          <div className="space-y-1">
            <p className="font-extrabold text-gray-800 text-xl">
              Think your car’s worth more?
            </p>
            <p className="text-gray-600  font-semibold text-lg">
              We get it. Your car’s special - share its specs with us and let’s
              talk price.
            </p>
          </div>

          {/* Button Section */}
          <button className="bg-yellow-500 hover:bg-yellow-500 text-black py-3 px-4 rounded-lg text-xl font-bold flex items-center justify-center gap-2 w-[28rem]">
            Tell us more
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
