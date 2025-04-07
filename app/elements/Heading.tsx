import React from "react";

type headingProps = {
  title?: string;
  description?: string;
};

export const Heading = ({ title, description }: headingProps) => {
  return (
    <div className="relative flex items-center justify-center text-center py-5 mx-4">
      {/* Big background title */}
      <h2 className="text-[40px] md:text-[70px] lg:text-[130px] font-extrabold text-black/5 uppercase absolute z-0">
        {title}
      </h2>

      {/* Centered subtitle */}
      <h3 className="relative z-10 text-2xl md:text-4xl font-medium text-black">
        {description}
      </h3>
    </div>
  );
};
