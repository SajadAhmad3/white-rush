import Image from "next/image";
import React from "react";

type TeamCardProps = {
  designation: string;
  name: string;
  imageUrl: string;
  twitterUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
};

const TeamCard = ({ designation, name, imageUrl }: TeamCardProps) => {
  return (
    <div className="shadow-lg rounded-md overflow-hidden h-full w-[350px] group">
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          priority
          className="object-cover w-full h-full rounded-md transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col items-center p-6">
        <h3 className="text-[20px] md:text-[24px] font-semibold">{name}</h3>
        <span className="text-[14px] md:text-[16px] ">{designation}</span>
      </div>
    </div>
  );
};

export default TeamCard;
