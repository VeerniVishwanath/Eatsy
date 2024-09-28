import React, { useContext } from "react";
import ShowcaseCard from "../components/ShowcaseCard/ShowcaseCard";
import { CartContext } from "../lib/Contexts";

export default function Section1() {
  return (
    <section className="flex flex-col lg:flex-row gap-20 lg:gap-4 pt-32 ">
      {/* Left Container */}
      <div className="flex flex-col gap-5 w-full lg:w-[50%]">
        <div className="flex items-center gap-2 font-bold rounded-full w-fit p-4 pt-2 pb-2 bg-[#f7efa5] text-[var(--highlights)]">
          10 Minute Delivery
          <img
            src="/bikeGif.gif"
            alt=""
            width={50}
            className="rounded-full bg-[#FBF9FB]"
          />
        </div>
        {/* Heading */}
        <h1 className="font-extrabold leading-[7rem] text-7xl">
          The Fastest Delivery in{" "}
          <span className="text-[var(--highlights)]">Your City</span>
        </h1>
        <p className="max-w-screen-sm text-[var(--text)] ml-2 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea quiut.
        </p>
        {/* Button */}
        <button
          type="button"
          className="bg-[var(--buttons)] p-3 pl-4 pr-4 ml-2 rounded-xl w-fit text-gray-200 font-semibold"
        >
          Order Now
        </button>
      </div>
      {/* Right Container */}
      <div className="w-full lg:w-[50%] relative flex items-center z-[-1]">
        {/* Background Image */}
        <img
          src="/bg.png"
          alt=""
          className="h-auto w-[100%] lg:w-auto lg:ml-auto rounded-2xl opacity-50 shadow-xl"
        />
        <ShowcaseCard />
      </div>
    </section>
  );
}
