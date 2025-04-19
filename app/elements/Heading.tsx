import React from "react";

type headingProps = {
  title?: string;
  description?: string;
  titleClasses?: string;
  descriptionClasses?: string;
};

export const Heading = ({
  title,
  description,
  titleClasses,
  descriptionClasses,
}: headingProps) => {
  return (
    <div className="relative flex items-center justify-center text-center py-5 mx-4">
      {/* Big background title */}
      <h2
        className={`text-[70px] md:text-[100px] lg:text-[130px] font-extrabold text-black/5 uppercase absolute z-0 ${titleClasses}`}
      >
        {title}
      </h2>

      {/* Centered subtitle */}
      <h3
        className={`relative z-10 text-2xl md:text-4xl font-medium text-black ${descriptionClasses}`}
      >
        {description}
      </h3>
    </div>
  );
};
