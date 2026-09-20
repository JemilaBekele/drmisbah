"use client";

import Image from "next/image";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui/button";
import {
  FaClock,
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaPhone,
  FaTag,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

const workingHours = [
  { day: "Sunday", hours: "Closed" },
  { day: "Monday", hours: "3 AM–12 PM" },
  { day: "Tuesday", hours: "3 AM–12 PM" },
  { day: "Wednesday", hours: "3 AM–12 PM" },
  { day: "Thursday", hours: "3 AM–12 PM" },
  { day: "Friday", hours: "3 AM–12 PM" },
  { day: "Saturday", hours: "3 AM–12 PM" },
];

const getTodayName = () =>
  new Date().toLocaleDateString("en-US", { weekday: "long" });

type FieldConfig = {
  name: keyof typeof initialFormData;
  placeholder: string;
  icon: React.ReactNode;
  type: string;
  required?: boolean;
};

const initialFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  subject: "",
  message: "",
};

const fields: FieldConfig[] = [
  { name: "name", placeholder: "Your Name", icon: <FaUser />, type: "text", required: true },
  { name: "email", placeholder: "Email Address", icon: <FaEnvelope />, type: "email", required: true },
  { name: "company", placeholder: "Company", icon: <FaBuilding />, type: "text" },
  { name: "phone", placeholder: "Phone", icon: <FaPhone />, type: "tel" },
  { name: "subject", placeholder: "Subject", icon: <FaTag />, type: "text", required: true },
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = getTodayName();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData(initialFormData);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* decorative accents */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#028A0F]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
            Contact Us
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Get in Touch with Us
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Have a question or want to book a visit? Send us a message and
            our team will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 lg:gap-10 items-start">
          {/* Left column: image + working hours */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/cm.jpg"
                alt="Dr Misbah Speciality Dental Clinic"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Working Hours card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-7">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <FaClock className="text-base sm:text-lg" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Working Hours
                </h3>
              </div>

              <ul className="divide-y divide-gray-100">
                {workingHours.map((item) => {
                  const isToday = item.day === today;
                  return (
                    <li
                      key={item.day}
                      className={`flex items-center justify-between py-2.5 sm:py-3 px-2 sm:px-3 rounded-lg transition-colors ${
                        isToday ? "bg-primary/5" : ""
                      }`}
                    >
                      <span
                        className={`text-sm sm:text-base flex items-center gap-2 ${
                          isToday ? "font-semibold text-primary" : "text-gray-700"
                        }`}
                      >
                        {item.day}
                        {isToday && (
                          <span className="text-[10px] sm:text-xs uppercase tracking-wide bg-primary text-white px-2 py-0.5 rounded-full">
                            Today
                          </span>
                        )}
                      </span>
                      <span
                        className={`text-sm sm:text-base ${
                          item.hours === "Closed"
                            ? "text-red-500 font-medium"
                            : isToday
                            ? "font-semibold text-primary"
                            : "text-gray-600"
                        }`}
                      >
                        {item.hours}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right column: form */}
          <div className="lg:col-span-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {fields.slice(0, 2).map((field) => (
                  <FormField
                    key={field.name}
                    field={field}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {fields.slice(2, 4).map((field) => (
                  <FormField
                    key={field.name}
                    field={field}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>

              <FormField
                field={fields[4]}
                value={formData.subject}
                onChange={handleChange}
              />

              <div className="relative">
                <span className="absolute left-4 top-4 text-gray-400">
                  <FaCommentDots />
                </span>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white
                    focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                    text-gray-800 placeholder:text-gray-400 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="secondary"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold
                  px-8 py-3.5 rounded-xl transition-all duration-300
                  hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5
                  focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                  disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <FaPaperPlane className="text-sm" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

// Reusable icon input field
const FormField: React.FC<{
  field: FieldConfig;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ field, value, onChange }) => (
  <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      {field.icon}
    </span>
    <input
      type={field.type}
      name={field.name}
      placeholder={`${field.placeholder}${field.required ? " *" : ""}`}
      value={value}
      onChange={onChange}
      required={field.required}
      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white
        focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
        text-gray-800 placeholder:text-gray-400 transition-all duration-300"
    />
  </div>
);

export default ContactForm;