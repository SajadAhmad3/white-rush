import Container from "@/app/components/Container";
import { Heading } from "@/app/elements/Heading";
import { galleryData } from "@/app/utils/gallery/data";
import Image from "next/image";

export default function Gallery() {
  return (
    <Container className="my-5 md:my-20">
      <div className="my-4 md:my-10 md:hidden">
        <Heading
          title="GALLERY"
          description="Our Travel Memories"
          titleClasses="!text-[50px] md:!text-[100px] lg:!text-[130px] "
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
        {/* Full-width banner - takes full cols across all screen sizes */}
        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-4 relative w-full h-[600px] rounded-3xl overflow-hidden hidden md:block">
          <Image
            src="/images/home/snowboard.jpg"
            alt="Banner"
            fill
            priority
            className="object-cover w-full h-full"
          />
          <div className="absolute top-10 inset-x-0 flex  justify-center px-5 hidden md:block">
            <div className="flex flex-col items-center text-center">
              <span className="text-[25px] font-semibold ">Gallery</span>
              <h2 className="text-[80px] font-bold mb-4 text-white px-5">
                Our Travel Memories
              </h2>
            </div>
          </div>
        </div>

        {/* Responsive gallery images */}
        {galleryData.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="col-span-1 relative w-full h-[300px] rounded-3xl overflow-hidden"
          >
            <Image
              src={item.image}
              alt={"Gallery Image"}
              fill
              priority
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
