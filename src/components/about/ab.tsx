"use client";

import { FaUsers, FaTrophy, FaWarehouse, FaHandshake } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Competitive Advantages Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">Our Competitive Advantages</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <FaWarehouse className="text-white w-6 h-6" />,
            title: "Strategic Warehouse Location",
            description: "Proximity to airports and dry ports ensures efficient distribution.",
            bgColor: "bg-black",
          },
          {
            icon: <FaUsers className="text-white w-6 h-6" />,
            title: "Expert Team",
            description: "Young, energetic, and knowledgeable professionals driving success.",
            bgColor: "bg-red-500",
          },
          {
            icon: <FaTrophy className="text-white w-6 h-6" />,
            title: "Strong Financial Background",
            description: "Backed by robust financial support and stakeholder trust.",
            bgColor: "bg-black",
          },
          {
            icon: <FaHandshake className="text-white w-6 h-6" />,
            title: "Regulatory Relationships",
            description: "Excellent relationships with regulatory bodies for seamless operations.",
            bgColor: "bg-red-500",
          },
        ].map((advantage, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between hover:shadow-lg transition-shadow duration-300"
          >
            {/* Text Content with Floating Animation */}
            <div className="animate-float">
              <h3 className="text-lg font-semibold mb-1">{advantage.title}</h3>
              <p className="text-gray-500 text-sm">{advantage.description}</p>
            </div>

            {/* Icon Badge */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${advantage.bgColor}`}>
              {advantage.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind CSS Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AboutUs;
