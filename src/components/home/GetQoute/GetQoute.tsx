'use client';
import ContactForm from "@/components/contact/ContactForm";
import React from "react";

export const GetQoute:React.FC = () => {
    return (
        <section className="md:py-8 py-2  mx-auto  bg-white shadow-md rounded-md">
        <ContactForm/>
        </section>
    );
};

export default GetQoute;