
"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[80vh] ">
      <Image
        src="/images/home/peaks_banner.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover w-full h-full brightness-50"
      />

      <div className="absolute top-10 lg:top-0 left-0 items-center justify-center text-white text-center flex flex-col h-full w-full px-4 gap-2">
        <h1 className="text-white font-modicaSemibold text-xl md:text-xxxl lg:text-5xl font-extrabold lg:leading-17 uppercase max-w-[600px]">
          {`Let's journey and discover a place.`}
        </h1>
        <p className="w-full max-w-[1000px] lg:px-10 lg:text-[24px] md:text-[20px] text-[16px] font-sfproLight text-white">
          Life is unpredictable, and we understand that plans might change.
          Enjoy flexible booking options, so you can reschedule or modify your
          trip with ease.
        </p>
        {/* <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 lg:mt-4 rounded-full lg:text-md md:text-sm text-xs transition duration-300 font-bold"
          onClick={handleContactUsClick}
        >
          Book A Trip
        </button> */}
      </div>
    </div>
  );
}

export default Banner