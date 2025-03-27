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
        <link rel="preload" href="/services-bg-overlay.svg" as="image" />
      </Head>
      <section
        className="relative h-[80vh] min-h-[80vh] md:min-h-[90vh]  w-full flex items-center py-16 md:py-24 lg:py-32 bg-no-repeat bg-center bg-cover"
        style={{ 
          backgroundImage: `url(serr.jpg)`,
          backgroundColor: '#0A2463'
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2463]/90 via-[#0A2463]/70 to-[#0A2463]/90"></div>

        {/* Card container aligned to the left */}
        <div className="container relative z-10 px-6 lg:px-0 flex justify-start">
          <div 
            className="flex flex-col p-5 sm:p-8 md:p-10 max-w-2xl w-full lg:w-3/5 rounded-xl shadow-2xl border border-gray-200/30"
            style={{
              background: "linear-gradient(135deg, rgba(240, 245, 255, 0.95) 0%, rgba(230, 238, 255, 0.95) 100%)",
              backdropFilter: "blur(8px)"
            }}
          >
            <div className="mb-3 flex items-center ">
              <div className="w-8 sm:w-12 h-1 bg-[#028A0F] mr-3 sm:mr-4"></div>
              <p className="text-sm sm:text-base font-semibold text-[#028A0F] tracking-widest">OUR SERVICES</p>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2463] mb-4 sm:mb-6 leading-tight">
              <span>Empowering</span>{' '}
              <span className="text-[#028A0F]">Health</span>,{' '}
              <span className="inline-block sm:inline">Sustainability</span>,
              <br className="hidden sm:block"/>
              <span className="text-[#D4AF37]">and Economic Growth</span>
            </h1>

            {/* Highlighted paragraph */}
            <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-lg" style={{
              background: "rgba(255, 255, 255, 0.7)",
              borderLeft: "4px solid #0A2463"
            }}>
              <p className="text-[#0A2463] leading-relaxed text-base sm:text-lg md:text-xl font-medium">
                At Hope Pharmaceuticals and Medical Equipment PLC, we are dedicated to advancing health, sustainability, and economic development.
              </p>
            </div>

           
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center z-10">
          <div className="inline-flex items-center text-sm sm:text-base font-medium tracking-wider bg-black/20 px-4 sm:px-5 py-2 rounded-full backdrop-blur-sm">
            <Link 
              href="/" 
              className="text-gray-200 hover:text-white transition-colors duration-300 uppercase text-sm sm:text-base"
            >
              Hope Business Group
            </Link>
            <span className="mx-3 text-gray-300">/</span>
            <span className="text-[#D4AF37] uppercase text-sm sm:text-base">Services</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHero;
