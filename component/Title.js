import React from "react";

const Title = () => {
  return (
    <>
      <h1 className="text-2xl mt-8 font-bold text-center">Your title here</h1>
      <p className="text-sm text-[#718096] text-center mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        malesuada nisi tellus, non <br /> imperdiet nisi tempor at.
      </p>
      <div className="grid md:grid-cols-2 gap-8 items-center mb-24 mt-24">
        <div className="order-2 md:order-1 md:text-center">
          <p className="font-bold text-sm mb-4 text-center">Your title here</p>
          <p className="text-[#718096] text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Suspendisse bibendum, nunc non posuere <br /> consectetur, justo
            erat semper enim, non hendrerit <br /> dui odio id enim.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img src="/Feature1.svg" alt="" height={250} width={250} />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
        <div className="flex justify-center">
          <img src="/Feature2.svg" alt="" height={250} width={250} />
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-bold text-sm mb-4 text-center">
            Your title here
          </h3>
          <p className="text-[#718096] text-sm text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Suspendisse bibendum, nunc non posuere <br /> consectetur, justo
            erat semper enim, non hendrerit <br /> dui odio id enim.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
        <div className="order-2 md:order-1 md:text-center">
          <p className="font-bold text-sm mb-4 text-center">Your title here</p>
          <p className="text-[#718096] text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Suspendisse bibendum, nunc non posuere <br /> consectetur, justo
            erat semper enim, non hendrerit <br /> dui odio id enim.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img src="/Feature3.svg" alt="" height={250} width={250} />
        </div>
      </div>
    </>
  );
};

export default Title;
