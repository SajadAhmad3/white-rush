import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // or use any arrow icon

type Destination = {
  name: string;
  description: string;
  image: string;
};

const DestinationCard = ({ destination }: { destination: Destination }) => {
  return (
    <div className="relative overflow-hidden w-full h-[500px] rounded-2xl group">
      <Image
        src={destination.image}
        alt={destination.name}
        fill
        className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300 rounded-2xl"
      />

      {/* Bottom Gradient Behind Text Only */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-20 rounded-b-2xl">
        <h3 className="text-white font-semibold text-lg md:text-xxl">
          {destination.name}
        </h3>
        <p className="text-white/90 text-sm mt-1">{destination.description}</p>
      </div>

      {/* Arrow Icon */}
      <div className="absolute top-2 right-2 bg-white/90 p-2 rounded-full">
        <ArrowUpRight className="w-4 h-4 text-black" />
      </div>
    </div>
  );
};

export const DestinationGrid = ({
  destinationsData,
}: {
  destinationsData: Destination[];
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {destinationsData.map((destination, index) => {
        const isHiddenOnMobile = index > 2; // Show only first 3 on mobile
        return (
          <Link
            href={`/destinations`}
            key={index}
            className={`${isHiddenOnMobile ? "hidden sm:block" : ""}`}
          >
            <DestinationCard destination={destination} />
          </Link>
        );
      })}
    </div>
  );
};

