import Container from "@/app/components/Container";
import ServiceCard from "@/app/components/services/ServiceCard";
import { Heading } from "@/app/elements/Heading";
import { servicesData } from "@/app/utils/services/servicesData";
import React from "react";

const Services = () => {
  return (
    <Container className="my-10">
      <Heading title="SERVICES" description="Our Services"/> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            Icon={service.Icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Services;
