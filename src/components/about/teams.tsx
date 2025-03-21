"use client";
import { FaBuilding, FaUserTie, FaGlobe, FaShippingFast, FaChartBar, FaMoneyCheckAlt } from "react-icons/fa";

const CorporateStructure = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Corporate Structure
          </h3>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-slate-600 h-full"></div>

          {/* Timeline Items */}
          <div className="space-y-10 w-full max-w-4xl">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`relative flex w-full ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Icon */}
              {/* Timeline Icon */}
<div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full shadow-lg z-10 md:flex ">
  {member.icon}
</div>


                {/* Timeline Card */}
            {/* Timeline Card */}
<div
  className={`bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md max-w-md w-full mt-6 md:mt-0 ${
    index % 2 === 0 ? "mr-4 md:mr-20 text-left" : "ml-4 md:ml-20 text-right"
  }`}
>
  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
    {member.name}
  </h4>
  <span className="text-sm text-gray-500 dark:text-slate-400 block mb-2">
    {member.position}
  </span>
  <p className="text-gray-600 dark:text-slate-400 text-sm">
    {member.description}
  </p>
  <p className="text-gray-600 dark:text-slate-400 text-sm">
    {member.descriptio}
  </p>
</div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Members Data
const teamMembers = [
  {
    name: "Board of Shareholders",
    position: "Leadership",
    description: "Oversees the strategic direction and ",
    descriptio: "governance of the company.",
    icon: <FaBuilding />,
  },
  {
    name: "General Manager",
    position: "Executive Leadership",
    description: "Responsible for the overall management",
    descriptio: " and operations of the company.",
    icon: <FaUserTie />,
  },
  {
    name: "Exports Manager",
    position: "Operations",
    description: "Manages international trade and ",
    descriptio: "export operations",
    icon: <FaGlobe />,
  },
  {
    name: "Imports Manager",
    position: "Operations",
    description: "Oversees the procurement and ",
    descriptio: "import of goods and materials.",
    icon: <FaShippingFast />,
  },
  {
    name: "Local Market Manager",
    position: "Operations",
    description: "Leads domestic sales and market ",
    descriptio: "expansion strategies.",
    icon: <FaChartBar />,
  },
  {
    name: "Senior Finance Officer",
    position: "Finance",
    description: "Manages financial planning, ",
    descriptio: "reporting, and compliance.",
    icon: <FaMoneyCheckAlt />,
  },
];

export default CorporateStructure;