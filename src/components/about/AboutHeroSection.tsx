"use client";
import Link from "next/link";
import Head from "next/head";

const AboutHeroSection = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/blueee.jpg" as="image" />
      </Head>
      <section
        className="relative h-[90vh] w-full flex items-center py-36 lg:py-48 bg-no-repeat bg-center bg-cover"
        style={{ 
          backgroundImage: `url(/blueee.jpg)`,
          backgroundColor: '#0A2463' 
        }}
      >
        {/* Semi-transparent overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2463]/90 via-[#0A2463]/70 to-[#0A2463]/90"></div>
        
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="flex justify-end">
            <div className="flex flex-col bg-white/90 p-6 md:p-10 w-full max-w-2xl rounded-lg shadow-2xl backdrop-blur-sm ml-auto">
              <p className="text-lg md:text-xl font-semibold text-[#028A0F] mb-2">About Us</p>
              <h2 className="text-3xl md:text-5xl font-bold capitalize mb-4 text-gray-800">
                Innovation
                <span className="text-[#0A2463] font-bold"> for a Healthier </span>
                <span className="text-[#028A0F] font-bold"> Future </span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 font-medium text-sm md:text-base">
                Hope Pharmaceuticals and Medical Equipment PLC is a dynamic and diversified company established in 2019 in Addis Ababa, Ethiopia. Founded by a group of elite health practitioners, pharmacists, and businessmen based in the USA and Ethiopia, the company is committed to improving lives and fostering sustainable growth.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-0 right-0 text-center z-10">
          <ul className="inline-block text-white text-sm font-semibold tracking-wide">
            <li className="inline-block uppercase text-white/70 hover:text-[#FFD700] transition duration-300">
              <Link href="/about-us">Hope Business Group</Link>
            </li>
            <li className="inline-block mx-2 text-white/50">
              <i className="uil uil-angle-right-b"></i>
            </li>
            <li className="inline-block uppercase text-[#FFD700]">About Us</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;