"use client";
import Link from "next/link";
import Head from "next/head";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1643660526741-094639fbe53a?fm=jpg&q=80&w=2000&auto=format&fit=crop";

const AboutHeroSection = () => {
  return (
    <>
      <Head>
        <link rel="preload" href={ABOUT_IMAGE} as="image" />
      </Head>
      <section
        className="relative h-[90vh] w-full flex items-center py-36 lg:py-48 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${ABOUT_IMAGE})`,
          backgroundColor: "#0A2463",
        }}
      >
        {/* Semi-transparent overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2463]/90 via-[#0A2463]/70 to-[#0A2463]/90"></div>

        <div className="container relative z-10 px-6 lg:px-8">
          <div className="flex justify-start">
            <div className="flex flex-col bg-white/90 p-6 md:p-10 w-full max-w-2xl rounded-lg shadow-2xl backdrop-blur-sm mr-auto">
              <p className="text-lg md:text-xl font-semibold text-[#028A0F] mb-2">About Us</p>
              <h2 className="text-3xl md:text-5xl font-bold capitalize mb-4 text-gray-800">
                Care
                <span className="text-[#0A2463] font-bold"> for a Healthier </span>
                <span className="text-[#028A0F] font-bold"> Smile </span>
              </h2>
              {/* <p className="text-gray-700 leading-relaxed mb-6 font-medium text-sm md:text-base">
                Dr Misbah Speciality Dental Clinic is dedicated to providing
                complete, compassionate dental care for every patient. Our
                team of experienced dentists and specialists is committed to
                improving oral health and helping you smile with confidence.
              </p> */}
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-0 right-0 text-center z-10">
          <ul className="inline-block text-white text-sm font-semibold tracking-wide">
            <li className="inline-block uppercase text-white/70 hover:text-[#FFD700] transition duration-300">
              <Link href="/about-us">Dr Misbah Speciality Dental Clinic</Link>
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