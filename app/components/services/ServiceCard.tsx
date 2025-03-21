import React, { ElementType } from "react";

type cardPrps = {
  title: string;
  description: string;
  Icon: ElementType;
};

const ServiceCard = ({ title, description, Icon }: cardPrps) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-4 shadow-md rounded-md hover:bg-secondary hover:text-white transition-all duration-300 group">
      <Icon className="w-12 h-12 text-primary group-hover:text-white transition-all duration-300" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
