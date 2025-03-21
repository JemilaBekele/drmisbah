"use client";

import Image from "next/image";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui/button";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          subject,
          message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send your message. Please try again.");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-10">
          <div className="lg:col-span-7 md:col-span-6">
            <Image
              src="/cm.jpg"
              alt="Contact Illustration"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="lg:col-span-5 md:col-span-6 bg-gray-50 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Get in Touch with Us
              
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
                  />
                </div>
              
              
                
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
                  />
                </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Subject *"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Message *"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
                  rows={5}
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                variant="default"
                className="w-42  !bg-primary font-semibold py-3 rounded-lg  transition duration-300"
              >
                Send Message
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

export default ContactForm;
