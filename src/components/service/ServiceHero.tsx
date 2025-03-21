"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ServiceHero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section
      className="relative h-[90vh] table w-full py-36 lg:py-48 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(blue.jpg)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-black opacity-70"></div>
      <div className="container relative z-10 px-6 lg:px-0">
        <div className="flex flex-col bg-white/80 p-10 max-w-2xl rounded-lg shadow-2xl backdrop-blur-md">
          <p className="text-4xl font-bold text-primary mb-4">Our Services</p>
          <h2 className="text-xl font-bold capitalize mb-4">
            Empowering Health, Sustainability, and Economic Growth
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
            At Hope Pharmaceuticals and Medical Equipment PLC, we are dedicated to advancing health, sustainability, and economic development. 
          </p>
         
      
        </div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 text-center z-10">
        <ul className="inline-block text-white text-sm font-semibold tracking-wide">
          <li className="inline-block uppercase text-white/70 hover:text-white transition duration-300">
            <Link href="/services">Hope Business Group.</Link>
          </li>
          <li className="inline-block mx-2 text-white/50">
            <i className="uil uil-angle-right-b"></i>
          </li>
          <li className="inline-block uppercase text-white">Services</li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceHero;