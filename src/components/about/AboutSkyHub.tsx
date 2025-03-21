"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { GiStarsStack } from "react-icons/gi";
import "aos/dist/aos.css";

const AboutHope = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Initialize AOS with smoother animations
  }, []);

  return (
    <section className="relative min-h-screen w-full py-12 lg:py-24 bg-no-repeat bg-center bg-cover overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-90"></div>
      <div className="container relative z-10 px-4 lg:px-0 mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <GiStarsStack className="w-8 h-8 lg:w-10 lg:h-10 text-primary mb-2 lg:mb-4" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold title-font text-neutral-900">
              OUR STORY AND VALUES
            </h1>
            <div className="flex my-4 lg:my-6 justify-center">
              <div className="w-12 lg:w-16 h-[2px] rounded-full bg-primary inline-flex"></div>
            </div>
            <p className="text-sm lg:text-base leading-relaxed lg:xl:w-2/4 lg:w-3/4 mx-auto text-neutral-600">
              At Hope Pharmaceuticals and Medical Equipment PLC, we are driven by a commitment to excellence, innovation, and sustainability. Our journey began with a vision to transform the healthcare and construction industries, and we have since expanded our impact to include eco-friendly transportation and premium agricultural exports.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 lg:px-5 pb-8 lg:pb-12 mx-auto flex flex-wrap">
        <div
          className="flex flex-col h-fit flex-wrap w-full lg:w-1/3 lg:text-right text-center lg:pr-5 mb-8 lg:mb-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-xl sm:text-2xl font-bold title-font text-neutral-900">
            Our Journey
          </h2>
          <div className="flex mb-4 lg:mb-5 justify-center lg:justify-end">
            <div className="w-12 lg:w-16 h-[1px] mt-2 lg:mt-3 rounded-full bg-primary inline-flex"></div>
          </div>
          <p className="text-sm lg:text-base flex flex-col mb-8 lg:mb-10 lg:items-start items-center text-neutral-600">
            Founded in 2019, Hope Pharmaceuticals and Medical Equipment PLC was established to address critical gaps in the pharmaceutical and medical equipment markets. Over the years, we have grown into a diversified company with a focus on sustainability and innovation.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold title-font text-neutral-900">
            Our Mission
          </h2>
          <div className="flex mb-4 lg:mb-5 justify-center lg:justify-end">
            <div className="w-12 lg:w-16 h-[1px] mt-2 lg:mt-3 rounded-full bg-primary inline-flex"></div>
          </div>
          <p className="text-sm lg:text-base flex flex-col mb-8 lg:mb-10 lg:items-start items-center text-neutral-600">
          To advance health, sustainability, and economic development through cutting-edge pharmaceuticals, construction materials, and agricultural exports, creating value for customers and partners worldwide.          </p>
        </div>

        <div
          className="lg:w-1/3 w-full mb-8 lg:mb-0 rounded-lg overflow-hidden"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Image
            alt="Hope Pharmaceuticals"
            className="object-cover object-center h-auto w-full rounded-lg"
            src="/mm.png"
            width={800}
            height={450}
            quality={100}
            layout="responsive"
          />
        </div>

        <div
          className="flex flex-col h-fit flex-wrap w-full lg:w-1/3 lg:text-left text-center lg:pl-5"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-xl sm:text-2xl font-bold title-font text-neutral-900">
            Our Vision
          </h2>
          <div className="flex mb-4 lg:mb-5 justify-center lg:justify-start">
            <div className="w-12 lg:w-16 h-[1px] mt-2 lg:mt-3 rounded-full bg-primary inline-flex"></div>
          </div>
          <p className="text-sm lg:text-base flex flex-col mb-8 lg:mb-10 lg:items-start items-center text-neutral-600">
          A world where health, sustainability, and progress converge to create brighter futures for all          </p>

          <h2 className="text-xl sm:text-2xl font-bold title-font text-neutral-900">
            Our Core Values
          </h2>
          <div className="flex mb-4 lg:mb-5 justify-center lg:justify-start">
            <div className="w-12 lg:w-16 h-[1px] mt-2 lg:mt-3 rounded-full bg-primary inline-flex"></div>
          </div>
          <ul className="text-sm lg:text-base flex flex-col mb-8 lg:mb-10 lg:items-start items-center text-neutral-600 list-none">
            <li>Excellence</li>
            <li>Ethics and Integrity</li>
            <li>Innovation and Problem-Solving</li>
            <li>Trust and Efficiency</li>
            <li>Commitment to Quality and Sustainability</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutHope;