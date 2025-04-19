import Container from "@/app/components/Container";
import { DestinationGrid } from "@/app/components/destinations/DestCard";
import { Heading } from "@/app/elements/Heading";
import { destinationsData } from "@/app/utils/destinations/destData";
import React from "react";

const Destinations = () => {
  return (
    <Container className="my-5 md:my-20">
      <Heading
        title="DESTINATION"
        description="Featured Destinations"
        titleClasses="!text-[35px] md:!text-[100px] lg:!text-[130px] "
      />
      <p className="my-4 md:my-10 max-w-3xl mx-auto text-center text-base md:text-lg text-muted">
        Explore our handpicked destinations that promise unforgettable
        experiences. Whether you are craving mountains, beaches, or cities —
        we’ve got the perfect getaway for you.
      </p>
      <div className="mt-20">
        <DestinationGrid destinationsData={destinationsData} />
      </div>
    </Container>
  );
};

export default Destinations;
