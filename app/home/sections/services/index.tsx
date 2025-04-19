import Container from "@/app/components/Container";
import ServiceCard from "@/app/components/services/ServiceCard";
import { Heading } from "@/app/elements/Heading";
import { servicesData } from "@/app/utils/services/servicesData";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <Container className="my-10">
      <Heading
        title="CHOOSE US"
        description="Your Trusted Travel Partner"
        titleClasses="!text-[45px] md:!text-[100px] lg:!text-[130px] "
      />
      <p className="my-4 md:my-10 max-w-3xl mx-auto text-center text-base md:text-lg text-muted">
        Trusted by thousands, we make every journey seamless and memorable —
        with personalized service, top destinations, and unbeatable value.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <ServiceCard
            title={servicesData[0].title}
            description={servicesData[0].description}
            Icon={servicesData[0].Icon}
          />
          <ServiceCard
            title={servicesData[1].title}
            description={servicesData[1].description}
            Icon={servicesData[1].Icon}
          />
          <div className="relative w-full h-[180px] rounded-xl overflow-hidden hidden md:block">
            <Image
              src="/images/home/banner.jpg"
              alt="Banner"
              fill
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Middle Column - Image spanning 3 rows */}
        <div className="row-span-3 relative w-full h-full">
          <div className="relative w-full h-[590px] rounded-xl overflow-hidden">
            <Image
              src="/images/home/banner.jpg"
              alt="Banner"
              fill
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full h-[180px] rounded-xl overflow-hidden hidden md:block">
            <Image
              src="/images/home/banner.jpg"
              alt="Banner"
              fill
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <ServiceCard
            title={servicesData[2].title}
            description={servicesData[2].description}
            Icon={servicesData[2].Icon}
          />
          <ServiceCard
            title={servicesData[3]?.title}
            description={servicesData[3]?.description}
            Icon={servicesData[3]?.Icon}
          />
        </div>
      </div>
    </Container>
  );
};

export default Services;
