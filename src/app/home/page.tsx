"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [vehicleNumber, setVehicleNumber] = useState("");

  const router = useRouter();

  const handleInputChange = (e) => {
    setVehicleNumber(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vehicleNumber) {
      router.push(`/found?vehicle_number=${vehicleNumber}`);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white relative overflow-hidden">
      {/* Background clouds */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat background-image" />

      {/* Balloons positioned at the top left */}
      <img
        src="/ballons.png"
        alt="Balloons"
        className="absolute top-4 left-4 z-20 w-32 sm:w-48 md:w-56 lg:w-64"
        style={{ height: "auto" }}
      />

      {/* Content */}
      <header className="z-10 flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <h3 className="text-2xl sm:text-3xl font-bold opacity-30">
            Welcome to Car Clouds
          </h3>
        </div>
      </header>

      <main className="z-10 text-center px-4">
        <h1
          className="font-bold mt-5 mb-6 text-5xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
          style={{ lineHeight: ".9" }}
        >
          Get Your <span className="text-yellow-400">FREE</span>
          <br />
          Instant Valuation
        </h1>

        <div className="flex items-center justify-center space-x-4 mt-10">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="ENTER YOUR REG"
              value={vehicleNumber}
              onChange={handleInputChange}
              className="w-64 sm:w-80 px-4 py-3 rounded-md bg-white/20 text-gray-300 font-bold focus:outline-none placeholder-gray-300 placeholder:font-bold"
            />

            <button className="flex items-center justify-center w-16 h-12 bg-green-500 hover:bg-green-600 rounded-md shadow-md">
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                <span className="text-green-500 text-lg">→</span>
              </div>
            </button>
          </form>
        </div>

        <div className="max-w-md mx-auto mt-10">
          <p
            className="text-base"
            style={{
              color: "#A0B6E0",
              fontWeight: 300,
              lineHeight: 1.2,
              opacity: 0.8,
            }}
          >
            Most Car Cloud sellers surveyed got an average £1,000 more vs part
            exchange quotes.
          </p>
        </div>
      </main>

      <style jsx>{`
        .background-image {
          background-image: url("/new_bg.jpg");
        }

        @media (min-width: 640px) {
          /* sm and above */
          .background-image {
            background-image: url("/car_clouds_new.png");
          }
        }

        .background-image {
          background-size: cover;
          background-repeat: no-repeat;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }
      `}</style>
    </div>
  );
}
