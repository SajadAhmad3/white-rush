import React from "react";
import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/app/utils/constants";

const WhatsAppRedirect = () => {
  const handleWhatsAppRedirect = () => {
    
    const message =
      "Hello! I'm interested in knowing more about your services.";
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappURL;
  };

  return (
    <div className="z-50 ">
      <button
        type="button"
        onClick={handleWhatsAppRedirect}
        className="text-green-500 hover:text-green-600 "
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
      >
        <Image
          src={"/images/whatsapp.png"}
          alt="WhatsApp Icon"
          width={60}
          height={60}
        />
      </button>
    </div>
  );
};

export default WhatsAppRedirect;
