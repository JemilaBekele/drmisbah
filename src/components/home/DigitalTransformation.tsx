"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

// Free-to-use photos from Unsplash (no attribution required).
// Requires images.unsplash.com to be allowed in next.config (see note).
const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const IMAGES = {
  clinic: unsplash("1629909613654-28e377c37b09"), // modern dental office with chair and equipment
  technology: unsplash("1643660527098-559f89e45a92"), // dental room with a chair and a monitor
  cosmetic: unsplash("1660732205495-f65510d8180e"), // a person's mouth with teeth
  family: [
    { src: unsplash("1662837625421-5fd8ed6131a0"), alt: "Dentist examining a patient" },
    { src: unsplash("1657470179447-0f5aa16daa91"), alt: "Dentist working on a patient" },
    { src: unsplash("1606811842243-af7e16970c1f"), alt: "Dentist at the clinic" },
    { src: unsplash("1629909614456-6b1c5c94cecc"), alt: "Comfortable clinic waiting area" },
  ],
  orthodonticsImplants: [
    { src: unsplash("1663182234283-28941e7612da"), alt: "Close-up of teeth and smile" },
    { src: unsplash("1606811856475-5e6fcdc6e509"), alt: "Dental mirror and explorer" },
    { src: unsplash("1598256989800-fe5f95da9787"), alt: "Dental chair with medical equipment" },
    { src: unsplash("1704455306251-b4634215d98f"), alt: "Dental treatment room" },
    { src: unsplash("1629909615184-74f495363b67"), alt: "Dental treatment chair" },
  ],
  restorative: unsplash("1643660526741-094639fbe53a"), // dentist chair in a bright room
};

const DigitalTransformation = () => {
  return (
    <>
      <ClinicIntroductionSection />
      <ModernTechnologySection />
      <CosmeticDentistrySection />
      <FamilyDentistrySection />
      <OrthodonticsImplantsSection />
      <RestorativeCareSection />
    </>
  );
};
export default DigitalTransformation;

const BookButton = () => (
  <Button
    className="text-white hover:bg-primary/90 transition-colors duration-300"
    variant="default"
    asChild
  >
    <Link href="/contact-us">
      <i className="uil uil-calendar-alt mr-2" /> Book an appointment
    </Link>
  </Button>
);

const ModernTechnologySection = () => {
  return (
    <section className="">
      <div className="container mx-auto py-12 md:py-28 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 md:gap-16">
          <div className="md:col-span-7 md:order-2">
            <div>
              <h6 className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
                Modern Dental Technology
              </h6>
              <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                Precise, Comfortable Treatment
              </h3>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
                Dr Misbah Speciality Dental Clinic uses modern diagnostic and
                treatment equipment to plan your care accurately and keep every
                visit as comfortable as possible.
              </p>

              <BookButton />
            </div>
          </div>

          <div className="md:col-span-5 md:order-1">
            <div className="relative w-full h-64 md:h-96 group">
              <Image
                src={IMAGES.technology}
                alt="Modern dental technology"
                className="rounded-lg shadow-lg object-cover object-center group-hover:scale-105 transition-transform duration-500"
                layout="fill"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClinicIntroductionSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 md:gap-16">
          <div className="md:col-span-6 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg group">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={IMAGES.clinic}
                  alt="Dr Misbah Speciality Dental Clinic"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:order-1">
            <div>
              <h6 className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
                Complete Dental Care Under One Roof
              </h6>
              <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                Dr Misbah Speciality Dental Clinic
              </h3>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
                We provide general and specialist dental care for patients of
                all ages. From routine check-ups and cleanings to advanced
                treatment, our team focuses on clear explanations, gentle care,
                and results that last. Book a visit and let us help you keep
                your smile healthy.
              </p>

              <BookButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CosmeticDentistrySection = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 md:gap-16">
          <div className="md:col-span-6 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg group">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={IMAGES.cosmetic}
                  alt="Cosmetic dentistry"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:order-1">
            <div>
              <h6 className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
                Cosmetic Dentistry
              </h6>
              <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                A Brighter, More Confident Smile
              </h3>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
                Teeth whitening, veneers, and smile makeovers designed around
                your face and your goals, with natural-looking results.
              </p>

              <BookButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FamilyDentistrySection = () => {
  const images = IMAGES.family;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 md:gap-16">
          <div className="md:col-span-6">
            <div className="rounded-lg overflow-hidden shadow-lg group">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              {/* <div className="flex justify-between mt-4">
                <button
                  onClick={goToPrevious}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors duration-300"
                >
                  Prev
                </button>
                <button
                  onClick={goToNext}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors duration-300"
                >
                  Next
                </button>
              </div> */}
            </div>
          </div>

          <div className="md:col-span-6">
            <h6 className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
              Dental Care for the Whole Family
            </h6>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              Gentle Care for Children and Adults
            </h3>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
              Regular check-ups, professional cleanings, fillings, and
              preventive care that help every member of your family keep
              healthy teeth and gums.
            </p>
            <BookButton />
          </div>
        </div>
      </div>
    </section>
  );
};

const OrthodonticsImplantsSection = () => {
  const images = IMAGES.orthodonticsImplants;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 md:gap-16">
          <div className="md:col-span-6">
            <h6 className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
              Orthodontics &amp; Dental Implants
            </h6>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              Straighter Teeth and Lasting Replacements
            </h3>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
              Braces and aligners to correct crooked teeth and bite problems,
              and dental implants to replace missing teeth so you can eat,
              speak, and smile with confidence.
            </p>
            <BookButton />
          </div>

          <div className="md:col-span-6">
            <div className="rounded-lg overflow-hidden shadow-lg group">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              {/* <div className="flex justify-between mt-4">
                <button
                  onClick={goToPrevious}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors duration-300"
                >
                  Prev
                </button>
                <button
                  onClick={goToNext}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors duration-300"
                >
                  Next
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RestorativeCareSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 md:gap-16">
          <div className="md:col-span-6">
            <div className="rounded-lg overflow-hidden shadow-lg group">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={IMAGES.restorative}
                  alt="Restorative dental care"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:order-2">
            <h6 className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wide mb-2">
              Restorative &amp; Emergency Care
            </h6>

            <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              Relief for Pain, Repair for Damaged Teeth
            </h3>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
              Root canal treatment, crowns, bridges, and extractions to ease
              toothache and restore the strength and look of damaged teeth.
            </p>

            <BookButton />
          </div>
        </div>
      </div>
    </section>
  );
};

// Old export names are kept as aliases so existing imports keep working.
export {
  CosmeticDentistrySection,
  FamilyDentistrySection,
  OrthodonticsImplantsSection,
  CosmeticDentistrySection as CoffeeExportSection,
  FamilyDentistrySection as FruitExportSection,
  OrthodonticsImplantsSection as OilSeedsPulsesSection,
};