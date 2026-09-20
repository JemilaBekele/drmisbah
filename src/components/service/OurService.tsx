"use client";
import type { ReactNode } from "react";
import {
  FaClipboardCheck,
  FaShieldAlt,
  FaTools,
  FaTooth,
  FaTeeth,
  FaUserMd,
  FaSyringe,
  FaSmile,
  FaCrown,
  FaSmileBeam,
  FaLeaf,
  FaRibbon,
} from "react-icons/fa";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconClass = "text-5xl text-primary mb-4";

const generalDentistry: Service[] = [
  {
    title: "Routine Checkups",
    description:
      "A thorough exam of your teeth, gums, and mouth to spot problems early and keep your treatment plan on track.",
    icon: <FaClipboardCheck className={iconClass} />,
  },
  {
    title: "Cleanings & Preventive Care",
    description:
      "Professional cleaning and preventive advice to remove plaque and tartar and protect against decay and gum disease.",
    icon: <FaShieldAlt className={iconClass} />,
  },
  {
    title: "Fillings",
    description:
      "Tooth-coloured fillings that repair cavities and restore the strength, shape, and look of the tooth.",
    icon: <FaTools className={iconClass} />,
  },
  {
    title: "Extractions",
    description:
      "Careful, comfortable removal of teeth that are badly damaged, infected, or cannot be saved.",
    icon: <FaTooth className={iconClass} />,
  },
];

const specialtyServices: Service[] = [
  {
    title: "Dental Implant Treatment",
    description:
      "Replace missing teeth with implants that act as artificial roots in the jawbone, giving a stable, natural-looking result.",
    icon: <FaTeeth className={iconClass} />,
  },
  {
    title: "Oral & Maxillofacial Surgery",
    description:
      "Surgical care for the mouth, jaws, and face, including impacted wisdom teeth and other complex procedures.",
    icon: <FaUserMd className={iconClass} />,
  },
  {
    title: "Endodontics",
    description:
      "Root canal treatment to clear infection, relieve pain, and save a tooth that would otherwise be lost.",
    icon: <FaSyringe className={iconClass} />,
  },
  {
    title: "Orthodontics",
    description:
      "Braces and aligners that straighten teeth and correct bite problems for children, teens, and adults.",
    icon: <FaSmile className={iconClass} />,
  },
  {
    title: "Prosthodontics",
    description:
      "Crowns, bridges, and dentures that rebuild damaged or missing teeth so you can chew and speak comfortably.",
    icon: <FaCrown className={iconClass} />,
  },
  {
    title: "Cosmetic Dental Services",
    description:
      "Whitening, veneers, and smile makeovers planned around your face and your goals.",
    icon: <FaSmileBeam className={iconClass} />,
  },
];



const tips = [
  "Brush twice a day for better dental hygiene.",
  "Visit your dentist every six months.",
  "Floss regularly to help prevent gum disease.",
];

const ServiceGrid = ({
  title,
  services,
  gridClass,
}: {
  title: string;
  services: Service[];
  gridClass: string;
}) => (
  <div className="mb-16 last:mb-0">
    <h3 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h3>
    <div className={`grid grid-cols-1 gap-6 ${gridClass}`}>
      {services.map((service) => (
        <div
          key={service.title}
          className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="flex justify-center items-center">{service.icon}</div>
          <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
          <p className="mb-4 text-gray-700">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const DentalServicesSection = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto py-12 px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mt-8">
            Our Dental Services
          </h2>
          <p className="text-lg text-gray-600 mb-6 mt-4">
            Dr Misbah Speciality Dental Clinic offers complete care for every
            smile, from everyday dentistry to specialist treatment.
          </p>
        </div>

        <div className="text-center">
          <ServiceGrid
            title="General Dentistry"
            services={generalDentistry}
            gridClass="md:grid-cols-2 lg:grid-cols-4"
          />
          <ServiceGrid
            title="Specialty Services"
            services={specialtyServices}
            gridClass="md:grid-cols-2 lg:grid-cols-3"
          />
         
        </div>

        <div className="mt-16 mb-8 rounded-lg bg-white p-6 shadow-md">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Everyday dental tips
          </h3>
          <ul className="space-y-2 text-gray-700">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DentalServicesSection;