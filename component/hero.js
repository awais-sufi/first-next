import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-center py-11 mt-12 bg-[#F7FAFC]">
        <h1 className="text-3xl font-bold">The Modern Landing page for</h1>
        <h1 className="text-3xl font-bold text-sky-400 py-5">
          React developers
        </h1>
        <p className="text-1xl">
          The easiest way to build a React landing page in seconds.
        </p>
        <div className="flex justify-center py-5">
          <button className="bg-sky-400 text-white px-8 py-3 rounded-sm">
            Download Your Free Theme
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
