"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[80vh] ">
      <Image
        src="/images/home/snowboard.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover w-full h-full brightness-75"
      />

      <div className="absolute top-10 lg:top-0 left-0 items-center justify-center text-white text-center flex flex-col h-full w-full px-4 gap-2">
        <div className="relative mx-4">
          <span className="absolute inset-0 -top-4 text-[20px] md:text-[30px] uppercase">
            Discover Your Next
          </span>
          <h1 className="text-white text-[40px] md:text-[120px] lg:text-[160px] font-extrabold uppercase">
            Adventure
          </h1>
        </div>
        <p className="w-full max-w-[600px] md:max-w-[1000px] lg:px-10  text-white md:text-[30px] text-[16px]">
          Escape the ordinary. Explore hidden gems, thrilling adventures, and
          unforgettable journeys waiting just for you.
        </p>
      </div>
    </div>
  );
};

export default Banner;
