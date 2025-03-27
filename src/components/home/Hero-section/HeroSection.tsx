"use client";

import Link from "next/link";

const AboutHeroSection = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center w-full py-36 lg:py-48 bg-no-repeat bg-center bg-cover"
      style={{ 
        backgroundImage: `url('/bbb.jpg')`,
        // Fallback gradient background if image doesn't load
        backgroundColor: '#0A2463' 
      }}
    >
      {/* Subtle overlay - dark blue with opacity */}
      <div className="absolute inset-0 bg-[#0A2463]/80"></div>
      
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-[#FFD700] font-light">
          Where Care Meets Innovation, and Growth Knows No Limits.
        </h1>
        <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-bold capitalize mb-4 text-white">
          Hope Business Group
        </h2>
        <p className="text-gray-200 leading-relaxed mb-6 text-base sm:text-lg font-medium max-w-2xl">
          Hope Business Group drives innovation, sustainability, and excellence, enhancing lives through 
          top-tier pharmaceuticals, eco-friendly transport, and quality construction materials. Globally,
          we connect Ethiopian products Coffee Arabica, fresh produce, 
          and oil seeds to international markets. At HOPE, we create lasting value for communities, partners, and the future.
        </p>

        <div className="flex gap-4 mt-8">
          <Link 
            href="/services" 
            className="px-8 py-3 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#0A2463] transition duration-300"
          >
            Learn more &rarr;
          </Link>
          <Link 
            href="/contact-us" 
            className="px-8 py-3 bg-[#FFD700] text-[#0A2463] rounded-lg hover:bg-[#F4C430] transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 text-center z-10">
        <ul className="inline-flex items-center text-white text-sm font-semibold tracking-wide">
          <li className="uppercase text-white/70 hover:text-[#FFD700] transition duration-300">
            <Link href="/">Hope Business Group</Link>
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