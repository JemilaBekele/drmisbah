"use client";

import Link from "next/link";

const AboutHeroSection = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center w-full py-36 lg:py-48 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1643660526741-094639fbe53a?fm=jpg&q=80&w=2000&auto=format&fit=crop')`,
        // Fallback background color if image doesn't load
        backgroundColor: "#0A2463",
      }}
    >
      {/* Subtle overlay - dark blue with opacity */}
      <div className="absolute inset-0 bg-[#0A2463]/80"></div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-[#FFD700] font-light">
          Gentle care for healthy, confident smiles.
        </h1>
        <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-bold capitalize mb-4 text-white">
          Dr Misbah Speciality Dental Clinic
        </h2>
        <p className="text-gray-200 leading-relaxed mb-6 text-base sm:text-lg font-medium max-w-2xl">
          At Dr Misbah Speciality Dental Clinic, we combine modern dental
          technology with a caring, personal approach. From routine check-ups
          and cleanings to specialist treatment, we are here to protect your
          oral health and help you smile with confidence.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="/services"
            className="px-8 py-3 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#0A2463] transition duration-300"
          >
            Our services &rarr;
          </Link>
          <Link
            href="/contact-us"
            className="px-8 py-3 bg-[#FFD700] text-[#0A2463] rounded-lg hover:bg-[#F4C430] transition duration-300"
          >
            Book an appointment
          </Link>
        </div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 text-center z-10">
        <ul className="inline-flex items-center text-white text-sm font-semibold tracking-wide">
          <li className="uppercase text-white/70 hover:text-[#FFD700] transition duration-300">
            <Link href="/">Dr Misbah Speciality Dental Clinic</Link>
          </li>
          <li className="mx-2 text-white/50">
            <i className="uil uil-angle-right-b"></i>
          </li>
          <li className="uppercase text-white"></li>
        </ul>
      </div>
    </section>
  );
};

export default AboutHeroSection;