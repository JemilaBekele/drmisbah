"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

const ServiceHero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <Head>
        <link rel="preload" href="/serr.jpg" as="image" />
      </Head>

      <section
        className="relative min-h-[80vh] sm:h-[90vh] w-full flex items-center py-16 lg:py-36 bg-no-repeat bg-center bg-cover"
        style={{ 
          backgroundImage: `url(/serr.jpg)`, 
          backgroundColor: "#0A2463",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2463]/90 via-[#0A2463]/70 to-[#0A2463]/90"></div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start">
            <div className="flex flex-col bg-white/90 p-6 md:p-8 w-full max-w-2xl rounded-lg shadow-2xl backdrop-blur-sm">
              <p className="text-base md:text-lg font-semibold text-[#028A0F] mb-2">Our Services</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-800">
                Empowering
                <span className="text-[#028A0F] font-bold"> Health</span>, 
                <span className="inline-block sm:inline"> Sustainability</span>,
                <br className="hidden sm:block"/>
                <span className="text-[#D4AF37]"> and Economic Growth</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 font-medium text-sm md:text-base">
                At Hope Pharmaceuticals and Medical Equipment PLC, we are dedicated to advancing health, sustainability, and economic development.
              </p>
            
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center z-10">
          <div className="inline-flex items-center text-xs sm:text-sm font-medium tracking-wider bg-black/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full backdrop-blur-sm">
            <Link 
              href="/" 
              className="text-gray-200 hover:text-white transition-colors duration-300 uppercase"
            >
              Hope Business Group
            </Link>
            <span className="mx-2 sm:mx-3 text-gray-300">/</span>
            <span className="text-[#D4AF37] uppercase">Services</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHero;