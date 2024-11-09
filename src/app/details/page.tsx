import React from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import { FaCircleArrowRight } from "react-icons/fa6";

interface Props {}

const page = (props: Props) => {
  return (
    <div className="w-full h-screen">
      <div className="flex w-full">
        <div className="bg-white w-full flex flex-col  h-screen">
          <div className=" h-screen flex items-center ">
            <div className="flex w-full  justify-center items-center flex-col ">
              <div className=" flex items-start flex-col  w-[80%]">
                <h1 className="text-3xl text-black font-bold mt-0">
                  Complete your deatils to get <u>FREE</u> no-obligation offers
                  and advice on selling yout BMW
                </h1>
                <div className="flex flex-col items-center relative mt-10">
                  <input
                    type="text"
                    placeholder="dom@fabspot.co.uk"
                    className="w-96 bg-gray-100 text-black      h-10 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-96 bg-white mt-7 border-2 text-black      h-10 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-96 bg-white mt-7 border-2 text-black    h-10 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Id"
                    className="w-96 bg-white mt-7 border-2 text-black     h-10 rounded-md"
                  />
                </div>
                <span className="text-black underline text-sm  mt-7 font-bold">
                  Been referred by a friend?
                </span>
                <div className="flex justify-center mt-6   w-[45%] items-center relative align-middle  h-12">
                  <button className="bg-yellow-500 h-10 rounded-xl  text-black font-bold text-xl  w-full">
                    continue
                    <FaCircleArrowRight className="  bottom-3  right-6 text-2xl absolute" />
                  </button>
                </div>
                <div className="mt-5 text-black w-[50%] font-medium text-xs">
                  By proceeding you confirm you have read our{" "}
                  <u> Privacy policy </u> and agree to our <u> T&C </u> . You
                  agree to sign up to our free service and understand you will
                  be contacted about selling your vehicle . More information
                  about how you will be contacted is <u> here</u> . You can opt
                  out of these emails and stop this service at any time.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 bgimg bg-white h-screen flex items-center justify-center  relative">
          <div className="bg-transparent flex  items-start justify-start mr-auto   h-fit w-full  ">
            <Image
              src="/ballons.png" // Path to your image in the 'public' folder
              alt="Car with clouds"
              width={500} // Specify width
              height={500} // Specify height
              className=" " // Negative left margin to overflow slightly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
