"use client";
import Link from "next/link";
import Head from "next/head";

const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1643660527098-559f89e45a92?fm=jpg&q=80&w=2000&auto=format&fit=crop";

const ContactHeroSection = () => {
  return (
    <>
      <Head>
        <link rel="preload" href={CONTACT_IMAGE} as="image" />
      </Head>
      <section
        className="relative h-[45vh] sm:h-[55vh] min-h-[380px] w-full flex items-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${CONTACT_IMAGE})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/90 via-[#0A2463]/70 to-[#0A2463]/40"></div>

        <div className="container relative z-10 px-6 lg:px-8">
          <div className="flex flex-col bg-white/90 backdrop-blur-md p-6 sm:p-8 max-w-xl rounded-xl shadow-2xl">
            <p className="text-sm sm:text-base font-semibold text-[#028A0F] uppercase tracking-wide mb-2">
              Contact Us
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 capitalize mb-3 leading-tight">
              Get in Touch with
              <span className="text-[#0A2463]"> Our Clinic</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Have a question or want to book a visit? Dr Misbah Speciality
              Dental Clinic is here to help — reach out and our team will
              respond promptly.
            </p>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="absolute bottom-4 left-0 right-0 text-center z-10">
          <ul className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-semibold tracking-wide bg-black/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <li className="uppercase text-white/70 hover:text-white transition duration-300">
              <Link href="/contact-us">Dr Misbah Speciality Dental Clinic</Link>
            </li>
            <li className="text-white/50">
              <i className="uil uil-angle-right-b"></i>
            </li>
            <li className="uppercase text-[#FFD700]">Contact Us</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ContactHeroSection;