import React from "react";

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1684607633251-8a4a8d94ddd2?fm=jpg&q=80&w=2000&auto=format&fit=crop";

const DigitalProject = () => {
  return (
    <section className="relative">
      <div
        className="relative mx-auto px-6 py-6 lg:px-8"
        style={{
          backgroundImage: `url(${CTA_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-50 rounded-xl"></div>

        <div className="relative text-center z-10 py-16">
          <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-white">
            Ready to Book Your Visit?
          </h3>
          <p className="text-white max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Whether you need a routine checkup, a specialist procedure, or a
            complete smile makeover, our team at Dr Misbah Speciality Dental
            Clinic is here to help. Let&apos;s get your smile back on track.
          </p>

          <a
            href="/contact-us"
            className="inline-block py-3 px-6 font-semibold text-base text-primary bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <i className="uil uil-phone-alt text-lg mr-2"></i> Book an
            Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalProject;