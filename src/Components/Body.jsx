import React from "react";

const Body = () => {
  return (
    <div className="lg:flex lg:gap-28 lg:px-20 lg:py-20 lg:pb-5">
      <div className="flex justify-center items-center md:pb-10 lg:order-2">
        <img
          src="./assets/Blue-Shape.svg"
          alt="1"
          className="-rotate-[45deg] h-64 md:h-72 lg:h-80"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="2"
          className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-80"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="3"
          className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-80"
        />
        <img
          src="./assets/Hero-Model.png"
          alt="hero"
          className="absolute h-64 md:h-72 lg:h-80"
        />
      </div>

      <div className="lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight ">
          Host your website in less than 5 minutes.
        </h1>
        <p className="pt-4 font-lato pb-4">
          With Hoster, get your website up and running in no less than 5 minutes
          with the most competitive pricing packages available online.
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            className="font-lato pt-3 pb-3 px-5 rounded-md placeholder:text-gray-400"
            type="email"
            placeholder="Enter e-mail address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 font-semibold text-white hover:bg-blue-600 ">
            Join Waitlist
          </button>
        </form>

        <div className="flex pt-3 gap-2">
          <img src="../assets/Checkmark.svg" alt="check" />
          <p className="font-lato text-gray-700">
            No Spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
