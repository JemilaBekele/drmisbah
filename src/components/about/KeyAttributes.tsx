"use client";
import { FaSmile, FaShippingFast, FaAward, FaMedkit, FaCheckCircle, FaTruck, FaHandshake } from "react-icons/fa"; // Importing React Icons

const KeyAttributes = () => {
  // Static data for key attributes
  const attributes = [
    {
      icon: <FaMedkit className="text-5xl" />, // React Icon for pharmaceuticals
      title: "Cutting-Edge Pharmaceuticals",
      description: "We supply innovative and high-quality pharmaceuticals to meet the evolving needs of the healthcare industry.",
    },
    {
      icon: <FaSmile className="text-5xl" />, // React Icon for customer satisfaction
      title: "Exceeding Expectations",
      description: "We are committed to meeting and exceeding customer expectations through exceptional service and quality.",
    },
    {
      icon: <FaShippingFast className="text-5xl" />, // React Icon for logistics
      title: "Efficient Distribution",
      description: "Our proximity to airports and dry ports ensures fast and efficient distribution of products.",
    },
    {
      icon: <FaAward className="text-5xl" />, // React Icon for quality standards
      title: "Quality Standards",
      description: "We adhere to national and international quality standards to ensure the highest level of product integrity.",
    },
    {
      icon: <FaTruck className="text-5xl" />, // React Icon for eco-friendly transportation
      title: "Eco-Friendly Solutions",
      description: "We introduce eco-friendly transportation solutions to reduce environmental impact and promote sustainability.",
    },
    {
      icon: <FaHandshake className="text-5xl" />, // React Icon for partnerships
      title: "Win-Win Partnerships",
      description: "We build strong partnerships with suppliers and regulatory bodies to ensure mutual success and growth.",
    },
  ];

  return (
    <section className="relative py-12">
      <div className="container relative px-4 mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Key Features</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our company is distinguished by unique attributes and services that add significant value for our customers.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attributes.map((attribute, index) => (
              <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Icon Section */}
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex justify-center items-center">
                  {attribute.icon} {/* Render the React Icon */}
                </div>
              </div>

              {/* Title and Description */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{attribute.title}</h3>
                <p className="text-gray-600 leading-relaxed">{attribute.description}</p>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAttributes;