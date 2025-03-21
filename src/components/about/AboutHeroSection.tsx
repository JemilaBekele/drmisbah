"use client";
import Link from "next/link";

const AboutHeroSection = () => {
  return (
    <>
     <Head>
        <link rel="preload" href="/bggg.jpg" as="image" />
      </Head>
    <section
      className="relative h-[90vh] table w-full py-36 lg:py-48 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(bggg.jpg)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-black opacity-70"></div>
      <div className="container relative z-10 px-6 lg:px-0">
        <div className="flex flex-col bg-white/60 p-4 md:p-10 w-full max-w-2xl rounded-lg shadow-2xl backdrop-blur-md">
          <p className="text-lg md:text-xl font-semibold text-primary mb-2">About Us</p>
          <h2 className="text-3xl md:text-5xl font-bold capitalize mb-4">
            Innovation
            <span className="text-primary font-bold"> for a Healthier </span>
            <span className="text-primary font-bold"> Future </span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 font-semibold text-sm md:text-base">
            Hope Pharmaceuticals and Medical Equipment PLC is a dynamic and diversified company established in 2019 in Addis Ababa, Ethiopia. Founded by a group of elite health practitioners, pharmacists, and businessmen based in the USA and Ethiopia, the company is committed to improving lives and fostering sustainable growth.
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 text-center z-10">
        <ul className="inline-block text-white text-sm font-semibold tracking-wide">
          <li className="inline-block uppercase text-white/70 hover:text-white transition duration-300">
            <Link href="/about-us">Hope Business Group</Link>
          </li>
          <li className="inline-block mx-2 text-white/50">
            <i className="uil uil-angle-right-b"></i>
          </li>
          <li className="inline-block uppercase text-white">About Us</li>
        </ul>
      </div>
    </section></>
  );
};

export default AboutHeroSection;
