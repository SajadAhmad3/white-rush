import { useState } from "react";
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
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    toast.success("Thank you! We'll get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      request: "",
    });
  };

  return (
    <div
      className="relative w-full mb-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home/plane.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-10 py-16 text-white">
        <div className="">
          <h2 className="text-[35px] md:text-[50px] font-extrabold text-center md:text-start">
            PLAN YOUR DREAM TRIP WITH US
          </h2>
          <p className="text-[16px] md:text-[18px] mt-4 leading-relaxed text-center md:text-start">
            Discover personalized travel plans, handpicked destinations, and
            exclusive packages tailored just for you.
          </p>
        </div>

        <div className="flex flex-col gap-6 bg-white text-black p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="text-[18px] space-y-6">
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
                className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
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
              className="w-full bg-primary hover:bg-opacity-80 transition duration-300 text-white px-6 py-4 font-bold rounded-lg shadow-md"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default ContactUs;
