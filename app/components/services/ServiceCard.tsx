import React, { ElementType } from "react";

type cardPrps = {
  title: string;
  description: string;
  Icon: ElementType;
};

const ServiceCard = ({ title, description, Icon }: cardPrps) => {
  return (
    <div className="h-[180px] flex flex-col gap-2 bg-secondary-50 p-4 shadow rounded-3xl  transition-all duration-300 group">
      <Icon className="w-12 h-12 text-primary transition-all duration-300" />
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
