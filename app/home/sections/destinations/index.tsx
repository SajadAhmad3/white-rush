import Container from "@/app/components/Container";
import Badge from "@/app/elements/Badge";
import { Heading } from "@/app/elements/Heading";
import { destinationsData } from "@/app/utils/destinations/destData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Destinations = () => {
  return (
    <Container className="mb-10">
      <Link href={`/destinations`} className="relative px-6 py-12">
        <Heading title="DESTINATIONS" description="Popular Destinations" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* First Image (Takes 2 cols) */}
          <div className="md:col-span-2 relative overflow-hidden">
            <Image
              src={destinationsData[0].image}
              alt={destinationsData[0].name}
              width={600}
              height={400}
              priority
              className="rounded-lg object-cover w-full h-full hover:scale-105 transition-all duration-300"
            />
            <div className="absolute top-2 left-2">
              <Badge text={destinationsData[0].discount} />
            </div>
            <div className="absolute bottom-2 right-2 ">
              <Badge text={destinationsData[0].name} />
            </div>
          </div>

          {/* Two Smaller Images (1 col each) */}
          {destinationsData.slice(1, 3).map((place, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={place.image}
                alt={place.name}
                width={300}
                height={200}
                priority
                className="rounded-lg object-cover w-full h-full hover:scale-105 transition-all duration-300"
              />
              <div className="absolute top-2 left-2">
                <Badge text={place.discount} />
              </div>
              <div className="absolute bottom-2 right-2">
                <Badge text={place.name} />
              </div>
            </div>
          ))}

          {/* Three Images in the Bottom Row */}
          {destinationsData.slice(3, 6).map((place, index) => (
            <div key={index} className="col-span-1 relative overflow-hidden">
              <Image
                src={place.image}
                alt={place.name}
                width={300}
                height={200}
                priority
                className="rounded-lg object-cover w-full h-full hover:scale-105 transition-all duration-300"
              />
              <div className="absolute top-2 left-2">
                <Badge text={place.discount} />
              </div>
              <div className="absolute bottom-2 right-2">
                <Badge text={place.name} />
              </div>
            </div>
          ))}
        </div>
      </Link>
    </Container>
  );
};

export default Destinations;
