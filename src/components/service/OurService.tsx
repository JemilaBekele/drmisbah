"use client";
import { FaShippingFast, FaCoffee, FaAppleAlt, FaSeedling, FaBicycle, FaIndustry, FaBuilding } from "react-icons/fa";

const services = [
  {
    title: "Import of Medicines & Supplies",
    description:
      "We import and distribute high-quality medicines and medical supplies from India, Turkey, and China to wholesalers, hospitals, clinics, and NGOs.",
    icon: <FaShippingFast className="text-5xl text-primary mb-4" />,
  },
  {
    title: "Future Manufacturing Unit",
    description:
      "Our goal is to establish a state-of-the-art manufacturing unit within the next five years to enhance local production capabilities.",
    icon: <FaIndustry className="text-5xl text-primary mb-4" />,
  },
  {
    title: "Export of Coffee Arabica",
    description:
      "We export premium Ethiopian Coffee Arabica to Middle Eastern, Asian, American, and European markets.",
    icon: <FaCoffee className="text-5xl text-primary mb-4" />,
  },
  {
    title: "Export of Fresh Produce",
    description:
      "We export fresh fruits, vegetables, oil seeds, and pulses to global markets, ensuring the highest quality standards.",
    icon: <FaAppleAlt className="text-5xl text-primary mb-4" />,
  },
  {
    title: "Eco-Friendly Transportation",
    description:
      "We pioneer electric-powered cycles and shared cycle services to promote sustainable urban mobility.",
    icon: <FaBicycle className="text-5xl text-primary mb-4" />,
  },
  {
    title: "Construction Materials",
    description:
      "We supply high-quality wholesale construction materials to support infrastructure development.",
    icon: <FaBuilding className="text-5xl text-primary mb-4" />,
  },
];

const LegacyIntroductionSection = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto py-12 px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mt-8">
            Our Core Activities
          </h2>
          <p className="text-lg text-gray-600 mb-6 mt-4">
            We are committed to delivering excellence across diverse sectors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center items-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="mb-4 text-gray-700 line-clamp-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyIntroductionSection;