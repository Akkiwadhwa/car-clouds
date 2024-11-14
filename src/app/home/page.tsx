"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io"; // Importing the menu icon
import { FaArrowRightLong, FaCircleArrowRight } from "react-icons/fa6";
import Imggrid from './components/Imggrid';
import Card from './components/Card';
import Faq from './components/Faq';
import Footer from "./components/Footer";



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
    <div className="bgcar h-fit w-screen  overflow-x-hidden">
      <div className="flex h-[15%] sm:h-[30%] items-start pt-1 sm:pt:0  sm:items-center justify-between px-0  sm:px-10 ">
        <Image
          id="ballons"
          src="/ballons.png"
          alt="Car with clouds"
          width={300}
          height={350}
          className="sm:pl-10 pl-5  h-28 w-52 sm:h-full sm:w-auto"
        />

        {/* Mobile Menu Toggle Button */}

        {/* Desktop layout of menu items - Visible only on desktop */}
        <div className="hidden sm:flex text-white flex-row items-center gap-6 text-xl font-bold p-10">
          <button>How it works</button>
          <button>Tools</button>
          <button>Sell my car</button>
          <button>More</button>
          <button>Dealer</button>
        </div>

        <div className="flex items-center mt-5 sm:mt-0 gap-3">
          {/* <img
            className="sm:w-10 sm:h-10 h-7 w-7 rounded-full"
            src="/blank_img.webp"
            alt="Rounded avatar"
          /> */}
          {/* <button>Login</button> */}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden mt-5 text-white text-3xl mr-5"
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

      {/* Remaining content */}
      <div className="sm:h-full h-fit flex  sm:flex-row">
        <div className="sm:h-[70%] flex w-[65%] h-[60%] sm:w-[60%] mt-10 flex-col ">
          <div className="flex  justify-center items-center sm:items-left   sm:ml-14 font-bold flex-col">
            <span className="text-white text-2xl sm:text-6xl ml-5 sm:ml-0  md:text-7xl lg:text-7xl">
              Get The Most For Your Car with car clouds
            </span>
            <h3 className="font-normal pl-5 pt-1 sm:mt-3 mt-2  sm:pl-0   text-white h-fit sm:pr-0 pr-5 text-xs sm:text-xl">
              Most Car Cloud sellers surveyed got an average £1,000 more vs part
              exchange quotes.
            </h3>
          </div>

          <div className="justify-center  flex sm:h-fit sm:mt-0   ">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-200  shadow-xl sm:h-36 sm:mt-10 mt-10 ml-32 w-fit sm:ml-0 flex sm:items-start flex-col rounded-lg sm:w-[90%] sm:p-4 p-2"
            >
              <span className="text-black text-left text-sm md:text-xl font-semibold">
                Your vehicle registration
              </span>
              <div className="flex gap-4 p-0 sm:p-0 sm:mt-2 md:flex-row flex-col">
                <input
                  type="text"
                  placeholder="ENTER REG"
                  value={vehicleNumber}
                  onChange={handleInputChange}
                  className="w-[20rem] md:w-[25rem] lg:w-[25rem] bg-white text-2xl  font-bold md:text-xl border-2 text-black border-gray-300 placeholder:font-semibold placeholder:text-2xl md:placeholder:text-3xl  placeholder:justify-center lg:placeholder:text-3xl placeholder:text-center  h-8 sm:h-12 rounded-md"
                />
                <div className="bg-yellow-500  flex rounded-lg relative w-fit">
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-cyan-400 h-8 sm:h-12 rounded-lg text-black font-bold text-xl md:text-2xl w-[20rem] md:w-[20rem] lg:w-[20rem]"
                  >
                    Start Now
                    <FaCircleArrowRight className="right-3 bottom-2 sm:bottom-3 text-sm md:text-2xl absolute" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
          className="overflow-hidden flex  justify-end sm:justify-end h-52 w-[100%] sm:h-[70%] sm:w-[40%]"
          id="carimagehome"
        >
          <Image
            src="/car.png"
            alt="Car with clouds"
            width={700}
            height={80}
            className="sm:pl-10 "
          />
        </div>
      </div>

      {/* lower section  */}
      <div className="w-screen over-x-hidden bggray  -mt-20 ">
        <div className="flex flex-col items-center  pt-20 py-8  min-h-screen w-screen overflow-x-hidden">
          <h1 className="sm:text-6xl text-xl font-bold text-center mt-8 text-black">
            How to sell your car with Car Clouds
          </h1>

          <div className="flex flex-col lg:flex-row sm:gap-3  justify-center items-center  sm:mr-20 sm:ml-20 ">
            {/* Instant Valuation */}
            <div className="flex flex-col items-center text-center p-2 mt-10  rounded-lg  w-full lg:w-1/3">
              <div className=" p-3 rounded-full ">
                {/* Icon (example: price tag icon) */}
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/66016d2b60ecbd0de68c4460/8a9346bb-3738-4df1-af88-d2c7b887cd74/1.png"
                  alt="Example Image"
                  width={900}
                  height={900}
                  className="object-cover rounded-lg w-80"
                />
              </div>
              <h2 className="text-xl font-semibold text-blue-800  mb-2">
                Get an Instant Valuation
              </h2>
              <p className="text-gray-600">
                Enter your registration and a few quick details, and we’ll give
                you a transparent, market-based valuation.
              </p>
            </div>

            {/* Advertise to Dealers */}
            <div className="flex flex-col items-center text-center p-2 mt-10  rounded-lg  w-full lg:w-1/3">
              <div className=" p-3 rounded-full ">
                {/* Icon (example: price tag icon) */}
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/66016d2b60ecbd0de68c4460/60b8cb91-0be9-48b5-9e2c-6343a3dd0629/2.png"
                  alt="Example Image"
                  width={600}
                  height={600}
                  className="object-cover rounded-lg w-80"
                />
              </div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                Advertise to Dealers
              </h2>
              <p className="text-gray-600">
                With a few photos and some details, your car is listed on our
                site, showcased to over 500 dealers.
              </p>
            </div>

            {/* Free Collection, Fast Payment */}
            <div className="flex flex-col items-center text-center p-2 mt-10  rounded-lg  w-full lg:w-1/3">
              <div className=" p-3 rounded-full ">
                {/* Icon (example: price tag icon) */}
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/66016d2b60ecbd0de68c4460/9e731a71-45f8-43a1-8ff5-b6acee1842bb/3.png"
                  alt="Example Image"
                  width={900}
                  height={900}
                  className="object-cover rounded-lg w-80"
                />
              </div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                Free Collection, Fast Payment
              </h2>
              <p className="text-gray-600">
                Once the auction closes, you’re notified of the top bid, and the
                winning dealer will arrange pickup.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-80 carfull flex flex-col justify-center w-screen ">
        <div className="sm:text-6xl text-4xl text-center p-5 sm:p-0 flex justify-center items-center font-bold">
          Selling your Car with Car Clouds
        </div>
        <div className="text-sm  flex justify-center mt-5 sm:p-0 pr-5 pl-5 items-center">
          we work on your behalf, ensuring your car is present to thousand of
          dealers while fighting for the best price
        </div>

        <div className="text-lg mt-10 text-black flex justify-center items-center ">
          <button className="rounded-lg bg-yellow-500 sm:px-8 px-5 sm:py-5 py-3 flex justify-center font-semibold ">
            Value My Car
            <FaArrowRightLong className=" mt-2 flex ml-3 text-xs " />
          </button>
        </div>
      </div>

      <div className="flex min-h-fit flex-col  items-center  mt-20 sm:mb-20 ">
        <div className=" flex flex-col justify-center items-center text-black  ">
          <h1 className="sm:text-5xl text-3xl text-center font-bold p-5 sm:p-0 ">
            {" "}
            Selling Your Car Has Never Been this easier{" "}
          </h1>
          <p className="sm:w-[60%] w-[90%] mt-2 text-xs sm:text-sm text-center">
            With Car CLouds You are in a control every step of the way. From
            instant valuations to fast payment, our process is build to make
            selling your car as smooth and rewarding as possible
          </p>
        </div>
        <Imggrid />
      </div>

      <div className="w-screen bggray">
        <Card />
      </div>

      <div className="w-screen">
        <Faq />
      </div>

      <div className="w-screen">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
