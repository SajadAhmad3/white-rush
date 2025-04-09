"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PackageProps {
  title: string;
  image: string;
  location?: string;
  highlights?: string[];
  price?: string;
  description?: string;
}

const PackageCard: React.FC<PackageProps> = ({
  title,
  image,
  highlights,
  description,
  price,
}) => {
  const router = useRouter();

  const handleBook = () => {
    router.push(`/contact-us`);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-[300px] overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
        />
      </div>

      {/* Package Details */}
      <div className="py-4">
        {/* Price and Title */}
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="text-[14px]">{description}</p>
        <ul className="list-disc pl-4 flex flex-col gap-2 pt-2">
          {highlights?.map((highlight, index) => (
            <li key={index} className="text-[12px] text-black font-semibold">
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between py-4">
          <div>
            <span className="text-md font-medium text-gray-600">
              per person
            </span>
            <p className="text-xl font-bold text-black mt-1">{price}</p>
          </div>

          <button
            className="ml-auto px-4 py-2 bg-black text-white font-medium rounded-full"
            onClick={handleBook}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
