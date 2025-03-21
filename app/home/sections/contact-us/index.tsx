import { useState } from "react";
import Container from "@/app/components/Container";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    request: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Data Submitted:", formData); // Log data
    toast.success("Thank you! We'll get back to you shortly.");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      request: "",
    });
  };

  return (
    <Container className="mb-16">
      <div className="relative w-full ">
        {/* Content Section */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 p-4 text-white">
          <div className="w-full h-full">
            <Image
              src="/images/home/snowboard.jpg"
              alt="Banner"
              fill
              priority
              className="object-cover w-full h-full brightness-50"
            />
          </div>

          {/* Right Section - Form */}

          <div className="absolute  max-w-[500px] hidden lg:block px-4">
            <h2 className="text-[26px] md:text-[34px] font-extrabold text-white ">
              Explore Kashmir Like Never Before
            </h2>
            <p className="text-[16px] md:text-[18px] text-gray-300 mt-4 leading-relaxed">
              Experience the breathtaking beauty of Kashmir with our expertly
              curated tours. Whether you seek adventure, serenity, or cultural
              immersion, we guarantee an unforgettable journey.
            </p>
            <ul className="mt-6 space-y-3 text-gray-200">
              <li className="flex items-center gap-3">
                ✅{" "}
                <span className="text-lg">
                  Personalized itineraries tailored for you.
                </span>
              </li>
              <li className="flex items-center gap-3">
                ✅{" "}
                <span className="text-lg">
                  Seamless travel with transport, stays & meals included.
                </span>
              </li>
              <li className="flex items-center gap-3">
                ✅{" "}
                <span className="text-lg">
                  24/7 expert support for a smooth journey.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg">
            <h2 className="text-[24px] md:text-[32px] font-extrabold text-white text-center">
              Book A Tour
            </h2>
            <form
              onSubmit={handleSubmit}
              className="text-white text-[18px] space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition "
                  required
                />
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Destination"
                  className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                  required
                />
              </div>
              <div>
                <textarea
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  placeholder="Special Request"
                  rows={4}
                  className="border bg-transparent p-4 w-full rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-secondary transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary hover:bg-opacity-80 transition duration-300 text-white px-6 py-4 font-bold rounded-lg shadow-md"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
        <ToastContainer position="bottom-left" />
      </div>
    </Container>
  );
};

export default ContactUs;
