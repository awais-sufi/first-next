import React from "react";

const CTA = () => {
  return (
    <div>
      <section className="bg-[#e6f6fe] py-9 rounded-lg my-16">
        <div className="container mx-auto px-10 ">
          <div className="flex flex-col md:flex-row  items-center justify-between max-w-4xl mx-auto">
            <div className="mb-2 md:mb-0">
              <p className="font-semibold text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-[#03a9f4] font-bold mt-3">Start your Free Trial.</p>
            </div>
            <button className="bg-[#03a9f4] hover:bg-[#03a9f4]/90 font-medium text-sm text-white px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
