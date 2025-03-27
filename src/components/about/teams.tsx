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
            {teamMembers.map((member, index) => {
              // Check if this is one of the horizontal card items
              const isHorizontalCard = [
                "Exports Manager",
                "Imports Manager",
                "Local Market Manager",
                "Senior Finance Officer"
              ].includes(member.name);

              if (isHorizontalCard && index === teamMembers.findIndex(m => m.name === "Imports Manager")) {
                // Render the combined horizontal card
                return (
                  <div key="operations-team" className="relative flex w-full justify-center">
                    {/* Timeline Icon - Centered for the combined card */}
                    

                    {/* Combined Horizontal Card */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md w-full max-w-2xl mt-6 md:mt-0 mx-4">
                    <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          Operations & Finance Team
                        </h4>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.slice(3, 7).map((member, i) => (
                          <div 
                            key={i} 
                            className="group text-center  rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                          >
                            <div className="hidden sm:flex text-primary dark:text-primary-400 text-3xl mb-4 justify-center transition-transform group-hover:scale-110">
                              {member.icon}
                            </div>
                            <h5 className="font-bold text-gray-800 dark:text-gray-100 mb-1">
                              {member.name}
                            </h5>
                            <p className="text-xs uppercase tracking-wider text-primary dark:text-primary-300 mb-2">
                              {member.position}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {member.description} {member.descriptio}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (isHorizontalCard) return null; // Skip these as they're included in the combined card

              // Regular timeline item
              return (
                <div
                  key={index}
                  className={`relative flex w-full ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full shadow-lg z-10 md:flex">
                    {member.icon}
                  </div>

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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Members Data (unchanged)
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
    name: "Internal Auditor",
    position: "Risk & Compliance",
    description: "Ensures financial accuracy and compliance",
    descriptio: " by evaluating internal controls and processes.",
    icon: <FaGlobe />,
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