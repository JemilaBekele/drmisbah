"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="fixed w-full z-50 top-0 left-0">
      {/* Top info bar */}
      <div className="bg-[#0A2463] text-white text-xs sm:text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center py-2 gap-1 sm:gap-0">
          <span className="font-semibold tracking-wide">
            Dr Misbah Speciality Dental Clinic
          </span>
        
        </div>
      </div>

      {/* Main nav */}
      <nav className="w-full border-b-2 bg-white transition-all duration-300">
        <div className="container mx-auto px-2 flex justify-between items-center py-3 sm:py-2">
          <Link href="/">
            <Image src="/logo.png" alt="dr Logo" width={100} height={60} priority className="w-34 sm:w-[50px]" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {["Home", "Services", "About Us", "Contact Us"].map((item, index) => (
              <Link
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm sm:text-base font-medium text-gray-700 hover:text-primary focus:text-primary focus:outline-none"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? (
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="fixed top-0 right-0 h-full w-64 max-w-[80vw] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden">
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <span className="text-xl font-bold text-gray-900">Dr Misbah Dental Clinic</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <svg className="h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <ul className="space-y-4">
                {["Home", "Services", "About Us", "Contact Us"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-base font-medium text-gray-900 hover:text-primary transition-all duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact Section */}
              <div className="mt-6 pt-4 border-t text-gray-700">
                <h3 className="text-base font-semibold mb-2">Contact Us</h3>
                <p className="text-xs leading-relaxed">
                  📞 Phone:
                  <a href="tel:+251-911422116" className="font-medium text-primary hover:underline ml-1">
                    +251-911422116
                  </a>
                </p>
                <p className="text-xs mt-1">
                  📍 Address: <span className="font-medium">Addis Ababa, Ethiopia</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          ></div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;