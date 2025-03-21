"use client";

import Link from "next/link";

const AboutHeroSection = () => {
  return (
    <section
     className="relative h-[90vh] table w-full py-36 lg:py-48 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url('/bbb.jpg')` }} // Replace with your chosen image
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-black opacity-70"></div>
      <div className="container relative z-10 px-6 lg:px-0">
       
        <h1 className="text-2xl md:text-3xl text-white font-light">
        Where Care Meets Innovation, and Growth Knows No Limits.
        </h1>
        <h2 className="text-[2rem] md:text-[3rem] font-bold capitalize mb-4 text-white">
         Hope Business Group
        </h2>
        <p className="text-gray-200 leading-relaxed mb-6 text-lg font-medium max-w-2xl">
        Hope Business Group drives innovation, sustainability, and excellence, enhancing lives through 
        top-tier pharmaceuticals, eco-friendly transport, and quality construction materials. Globally,
         we connect Ethiopian products Coffee Arabica, fresh produce, 
        and oil seeds to international markets. At HOPE, we create lasting value for communities, partners, and the future.
        </p>

        <div className="flex gap-4 mt-8">
          <Link href="/services" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-primary transition duration-300">
            Learn more &rarr;
          </Link>
          <Link href="/contact-us" className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition duration-300">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 text-center z-10">
        <ul className="inline-flex items-center text-white text-sm font-semibold tracking-wide">
          <li className="uppercase text-white/70 hover:text-white transition duration-300">
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