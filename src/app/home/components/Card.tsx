import Image from 'next/image';
import React from 'react';

const ValuationSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  };
  return (
    <section className="py-10 w-full mb-10">
      <div className="container mx-auto mt-0 px-4 sm:h-96  flex flex-col md:flex-row items-center sm:mt-10 sm:w-[70%] w-[90%] ">
        {/* Left Column */}
        <div className="bg-yellow-500 sm:items-start items-center md:text-left p-8 h-full w-full flex flex-col justify-center md:w-1/2">
          <h2 className="sm:text-6xl text-3xl font-bold text-black">Get a Valuation!</h2>
          <p className="sm:text-xl text-sm font-bold ml-5 text-black mt-2">Get a free, instant part-ex quote.</p>
          <button onClick={scrollToTop} className="mt-6 bg-black text-white px-5 py-0 rounded-lg text-lg hover:bg-gray-800 transition w-48">
            Start your free valuation →
          </button>
        </div>

        {/* Right Column */}
        <div className="h-[200px] sm:h-full w-full md:w-1/2 relative overflow-hidden">
          <Image
            src="/girlincar.jpg" // Replace with the path to your image
            alt="Woman in car taking selfie"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ValuationSection;
