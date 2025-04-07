"use client";
import Container from "@/app/components/Container";
import PackageCard from "@/app/components/packages/packageCard";
import { Heading } from "@/app/elements/Heading";
import { homePackagesData } from "@/app/utils/packages/homePackagesData";
import { useRouter } from "next/navigation";
import React from "react";

const Packages = () => {
  const router = useRouter();
  const handleAllPackageClick = () => {
    router.push("/packages");
  };
  return (
    <Container className="mb-10 ">
      <Heading title="PACKAGES" description="Find Your Perfect Trip" />
      <div className="flex items-center justify-center my-5">
        <button
          className="bg-primary hover:bg-primary transition duration-300 text-white px-4 py-2 text-sm font-bold"
          onClick={handleAllPackageClick}
        >
          View all Packages
        </button>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {homePackagesData.slice(0, 6).map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </Container>
  );
};

export default Packages;
