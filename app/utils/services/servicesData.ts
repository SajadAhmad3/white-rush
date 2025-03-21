import {
  Mountain,
  Compass,
  Plane,
  Map,
  Tent,
  Snowflake,
  Bike,
  Hotel,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  Icon: React.ElementType;
}

export const servicesData: Service[] = [
  {
    title: "Hotel Booking",
    description: "Stay in the best hotels in Kashmir & Ladakh at great prices.",
    Icon: Hotel,
  },
  {
    title: "Flight Booking",
    description: "Hassle-free flight arrangements to Srinagar & Leh.",
    Icon: Plane,
  },
  {
    title: "Winter Sports",
    description:
      "Skiing, snowboarding, and snow trekking in Gulmarg’s powdery slopes.",
    Icon: Snowflake,
  },
  {
    title: "Mountain Treks",
    description:
      "Trek through Kashmir’s breathtaking landscapes, including Gulmarg and Pahalgam.",
    Icon: Mountain,
  },
  {
    title: "Guided Tours",
    description:
      "Discover Kashmir with local expert guides who know every hidden gem.",
    Icon: Compass,
  },
  {
    title: "Custom Itineraries",
    description:
      "Plan your perfect Kashmir trip with personalized route recommendations.",
    Icon: Map,
  },
  {
    title: "Camping & Bonfires",
    description:
      "Experience overnight camping under the stars in Aru Valley or Sonmarg.",
    Icon: Tent,
  },
  {
    title: "Ladakh Bike Trips",
    description:
      "Ride through Ladakh’s rugged landscapes and high-altitude passes.",
    Icon: Bike,
  },
];
