import {
  Plane,
  Map,
  Hotel,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  Icon: React.ElementType;
}

export const servicesData: Service[] = [
  {
    title: "Expertly Curated Packages",
    description: "Carefully designed itineraries tailored to your preferences.",
    Icon: Hotel,
  },
  {
    title: "24/7 Customer Support",
    description:
      "We are here to assist you at every step of your journey, anytime and anywhere you need us.",
    Icon: Plane,
  },
  {
    title: "Hassle-Free Booking",
    description: "Easy and secure booking process, giving you peace of mind.",
    Icon: Hotel,
  },
  {
    title: "Trusted Local Partnerships",
    description:
      "We collaborate with reliable local vendors to offer you authentic and safe experiences.",
    Icon: Map,
  },
];
