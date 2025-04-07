"use client";

import { useRouter, usePathname } from "next/navigation";
import navigationData from "./Nav.json";
import Link from "next/link";
import Menu from "../Header/Menu/index";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleContactUsClick = () => {
    router.push("/contact-us");
  };

  return (
    <div className="absolute w-full top-0 left-0 right-0 bg-black">
      <nav
        className={`relative z-10 mx-auto px-5 md:px-10 py-4 transition-all duration-300`}
      >
        <div className="flex items-center justify-between w-full mx-auto">
          <Link href="/" className="relative w-[80px] h-[50px] rotate-3">
            <Image
              src="/images/peak-2.png"
              alt="logo"
              fill
              priority
              className="w-full h-full object-cover"
            />
          </Link>

          <div className="flex items-center justify-between gap-6">
            <ul className="lg:flex space-x-4 hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-inner rounded-full p-0.5">
              {navigationData.map((item, index) => {
                const isActive = pathname === item.path;

                return (
                  <Link
                    href={item.path}
                    key={index}
                    className={`cursor-pointer rounded-full px-4 py-2 ${
                      isActive
                        ? "bg-white text-black shadow-md"
                        : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                    }`}
                  >
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                );
              })}
            </ul>
          </div>

          <div
            className="hidden lg:flex items-center gap-2 bg-white hover:bg-secondary rounded-full px-1 transition duration-300"
            onClick={handleContactUsClick}
          >
            <button className="text-black pl-4 py-2 text-sm font-semibold ">
              Plan Your Trip{" "}
            </button>
            <MoveUpRight
              className="bg-primary rounded-full text-white p-1"
              size={26}
            />
          </div>
          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default Header;
