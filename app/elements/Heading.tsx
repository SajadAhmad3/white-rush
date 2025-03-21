import React from "react";
type headingProps = {
  title?: string;
  description?: string;
  showLeft?: boolean;
  showRight?: boolean;
};
export const Heading = ({
  title,
  description,
  showLeft = true,
  showRight = true,
}: headingProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center gap-4">
        {showLeft && (
          <div className="flex flex-col items-end">
            <div className="w-12 h-0.5 bg-primary mb-1"></div>
            <div className="w-16 h-0.5 bg-primary"></div>
          </div>
        )}
        <h2 className="text-primary font-bold text-lg uppercase">{title}</h2>
        {showRight && (
          <div className="flex flex-col items-start">
            <div className="w-12 h-0.5 bg-primary mb-1"></div>
            <div className="w-16 h-0.5 bg-primary"></div>
          </div>
        )}
      </div>
      <h3 className="text-black/90 font-bold text-[30px] md:text-[40px]">{description}</h3>
    </div>
  );
};
