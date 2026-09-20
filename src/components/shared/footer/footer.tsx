"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const socialIcons: Record<string, React.ElementType> = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  tiktok: FaTiktok,
};

export default function Footer() {
  const [socials, setSocials] = useState<{ id: string; link: string; icon: string }[]>([]);
  const { toast } = useToast();

  return (
    <footer className="bg-black text-white py-10 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h5 className="text-lg font-semibold mb-4">About Us</h5>
          <p className="text-gray-300 text-sm leading-relaxed">
            Dr Misbah Speciality Dental Clinic is dedicated to providing
            complete, compassionate dental care. Together with our team, we
            build brighter, healthier smiles for our community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-3">
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-gray-400 hover:text-white text-sm transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Home
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media Section */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
          <div className="space-y-3">
            <a href="tel:+251910135358" className="text-gray-300 flex items-center">
              <FaPhone className="inline-block mr-2 text-white" /> 0910135358
            </a>
            <a href="tel:+251944105795" className="text-gray-300 flex items-center">
              <FaPhone className="inline-block mr-2 text-white" /> 0944105795
            </a>

            <a
              href="https://wa.me/251910135358"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 mb-2 flex items-center"
            >
              <FaWhatsapp className="inline-block mr-2 text-white" /> WhatsApp
            </a>

            <p className="text-gray-300 mb-2 flex items-center">
              <FaMapMarkerAlt className="inline-block mr-2 text-white" />
              Torhayloch Dream Tower, 5th Floor, Addis Ababa, Ethiopia
            </p>

            <p className="flex items-center text-gray-300">
              <FaMapMarkerAlt className="mr-2 text-white" />
              <Link href="/contact-us" className="hover:text-white transition-colors">
                Follow Us on Map
              </Link>
            </p>

            <a
              href="https://www.tiktok.com/@dr.misbah.dental.clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 mb-2 flex items-center"
            >
              <FaTiktok className="inline-block mr-2 text-white" /> TikTok
            </a>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              {socials.map(({ id, link, icon }) => {
                const IconComponent = socialIcons[icon.toLowerCase()];
                return (
                  IconComponent && (
                    <a key={id} href={link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </a>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Dr Misbah Speciality Dental Clinic. All Rights Reserved.
      </div>
    </footer>
  );
}