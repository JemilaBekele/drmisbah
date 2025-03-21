"use client";
import { FaTruck, FaHospital, FaGlobe, FaStore, FaHandsHelping, FaUserMd } from "react-icons/fa";

const DistributionNetwork = () => {
  return (
    <div className="mb-12 px-4">
      {/* Section Heading */}
      <div className="text-center mb-8">
      <h3 className="text-3xl md:text-4xl font-semibold mb-4">        Distribution Channels and Key Customers
      </h3></div>

      {/* Grid Layout for Distribution Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">
        {/* Imported Pharmaceuticals Card */}
        <div className="relative bg-gradient-to-br from-[--card] to-[--muted] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 animate-slide-in-left">
          {/* Icon Badge */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-[--primary] text-primary rounded-full flex items-center justify-center">
            <FaTruck className="w-8 h-8 text-[--primary-foreground]" />
          </div>
          {/* Card Content */}
          <h3 className="text-2xl font-bold text-primary mb-6">For Imported Pharmaceuticals</h3>
          <div className="space-y-4">
            {[
              { icon: <FaStore className="w-6 h-6 text-primary mr-3" />, text: "Pharmaceutical Wholesalers" },
              { icon: <FaHospital className="w-6 h-6 text-primary mr-3" />, text: "Retail Pharmacies and Pharmacy Chains" },
              { icon: <FaUserMd className="w-6 h-6 text-primary mr-3" />, text: "Hospitals, Clinics, and Health Centers" },
              { icon: <FaHandsHelping className="w-6 h-6 text-primary mr-3" />, text: "NGOs and Aid Organizations" },
              { icon: <FaTruck className="w-6 h-6 text-primary mr-3" />, text: "Rural Drug Vendors" },
            ].map((item, index) => (
              <div key={index} className="flex items-center text-[--foreground] animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {item.icon}
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Export Items Card */}
        <div className="relative bg-gradient-to-br from-[--card] to-[--muted] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 animate-slide-in-right">
          {/* Icon Badge */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-[--primary] rounded-full flex items-center justify-center">
            <FaGlobe className="w-8 h-8 text-primary" />
          </div>
          {/* Card Content */}
          <h3 className="text-2xl font-bold text-primary mb-6">For Export Items</h3>
          <div className="space-y-4">
            <div className="flex items-center text-[--foreground] animate-fade-in-up">
              <FaGlobe className="w-6 h-6 text-primary mr-3" />
              <p>International Markets: Middle East, Asia, Europe, America</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributionNetwork;