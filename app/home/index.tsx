"use client";

import React from "react";
import Banner from "./sections/banner";
import Services from "./sections/services";
import Destinations from "./sections/destinations";
import Packages from "./sections/packages";
import Team from "./sections/team";
import ContactUs from "./sections/contact-us";
import WhatsAppRedirect from "../components/whatsapp/whatsapp";

function Home() {
  return (
    <div className="">
      <Banner />
      <Destinations />
      <Services />
      <Packages />
      <Team />
      <ContactUs />
      <div className="fixed bottom-8 right-8">
        <WhatsAppRedirect />
      </div>
    </div>
  );
}

export default Home;
