"use client";

import React from "react";
import Banner from "./sections/banner";
import Services from "./sections/services";
import Destinations from "./sections/destinations";
import Packages from "./sections/packages";
import ContactUs from "./sections/contact-us";
import WhatsAppRedirect from "../components/whatsapp/whatsapp";
import Gallery from "./sections/gallery/page";

function Home() {
  return (
    <div className="">
      <Banner />
      <Destinations />
      <Services />
      <Packages />
      <ContactUs />
      <div className="fixed bottom-8 right-8">
        <WhatsAppRedirect />
      </div>
      <Gallery />
    </div>
  );
}

export default Home;
