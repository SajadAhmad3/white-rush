"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface DestinationProps {
  image: string;
  destinationName: string;
  description: string;
  activities: string[];
  slug: string;
}

const DestinationCard: React.FC<DestinationProps> = ({
  image,
  destinationName,
  description,
  activities,
}) => {
  const router = useRouter();

  const handleBook = () => {
    router.push("/contact-us");
  };
  return (
    <div className=" bg-white-400 md:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 p-4 md:p-8">
        <div className="relative transform duration-700 hover:scale-105 h-[300px]">
          <Image
            src={image}
            alt={destinationName}
            fill
            priority
            className="object-cover w-full h-full  rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1 text-white justify-between">
          <div>
            <h3 className="text-[16px] text-center md:text-start md:text-[20px] font-bold">
              {destinationName}
            </h3>
            <p className="text-[14px] font-light mb-6 ">{description}</p>
            <div className="mb-6 ">
              <h5 className="text-[16px] font-semibold mb-2 ">
                Activity Highlights:
              </h5>
              <ul className="list-disc list-inside text-[14px]">
                {activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center ">
            <button
              className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
              onClick={handleBook}
            >
              Quick Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
