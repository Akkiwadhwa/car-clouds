import React from 'react'
import  Image  from 'next/image';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import { FaCircleArrowRight } from 'react-icons/fa6';

interface Props {}

const page = (props: Props) => {
  return (
    <div className="w-full h-screen">
      <div className="flex w-full">
        <div className="bg-white w-full flex flex-col  h-screen">
          <div className=" h-3/4 flex items-center ">
            <div className="flex w-full  justify-center items-center flex-col ">
              <div className=" flex items-start flex-col  w-2/3">
                <span className="font-semibold flex   text-black underline">
                  <MdKeyboardArrowLeft className='mt-0 text-black text-xl' /> Back
                </span>

                <h1 className="text-4xl text-black font-bold mt-5">
                  Confirm your car's current mileage
                </h1>
                <div className='flex items-center relative mt-5'>
                <input
                  type="text"
                  className="w-96 bg-white text-black   border shadow-lg  shadow-cyan-200 h-10 rounded-md"
                  />
                  
                  <FcOk className='text-3xl  absolute right-1' />
                </div>
                <span className='text-black text-xs  mt-2 font-semibold'>We've estimated your mileage based on your car's 
                  MOT history
                </span>
              </div>
            </div>
          </div>
          <div className='  h-52  flex  justify-center items-end  '>
            <div className='flex justify-center  mt-auto w-3/4 items-center relative align-middle  h-12'>
              <button className="bg-yellow-500 h-12 rounded-xl mb-3 text-black font-bold text-xl  w-full">continue
              <FaCircleArrowRight className='  bottom-4   right-6 text-2xl absolute' />
              </button>
</div>
          </div>
        </div>
        <div className="w-2/3 bgimg  h-screen flex items-center justify-center  relative">
          <div className="bg-transparent flex  items-start justify-start mr-auto   h-fit w-full  ">
            <Image
              src="/ballons.png" // Path to your image in the 'public' folder
              alt="Car with clouds"
              width={500} // Specify width
              height={500} // Specify height
              className="object-cover " // Negative left margin to overflow slightly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page