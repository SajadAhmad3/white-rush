import React from "react";

type Props = {
  text: string;
};

const Badge = ({ text }: Props) => {
  return (
    <div className=" bg-white hover:bg-primary hover:text-white text-primary px-2 py-1 text-sm font-bold rounded transition-all duration-300">
      {text}
    </div>
  );
};

export default Badge;
