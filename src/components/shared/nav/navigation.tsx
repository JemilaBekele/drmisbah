"use client";


import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <nav className="fixed w-full border-b-2 z-50 top-0 left-0 transition-all duration-300 bg-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/">
          <Image src="/logo.png" alt="SkyHub Logo" width={120} height={40} priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Services", "About Us", "Contact Us"].map((item, index) => (
            <Link key={index} href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-base font-medium text-gray-700 hover:text-primary focus:text-primary focus:outline-none">
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
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full max-w-xs w-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-40 md:hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <span className="text-2xl font-bold text-gray-900">Hope</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <svg className="h-6 w-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            <ul className="space-y-6">
              {["Home", "Services", "About Us",  "Contact Us"].map((item, index) => (
                <li key={index}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-900 hover:text-primary transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Section */}
            <div className="mt-8 pt-6 border-t text-gray-700">
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <p className="text-sm leading-relaxed">
                📞 Phone:
                <a href="tel:+251-911422116" className="font-medium text-primary hover:underline">
                  Call us
                </a>
              </p>
              <div className="flex flex-wrap items-center">
             
              </div>
              📍 Address: <span className="font-medium"> Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={() => setIsOpen(false)} aria-hidden="true"></div>
      )}
    </nav>
  );
};

export default Navbar;
