import React from "react";

const DigitalProject = () => {
  return (
    <section className="relative">
      <div
        className="relative mx-auto px-6 py-6 lg:px-8"
        style={{
          backgroundImage: `url(c.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-50 rounded-xl"></div>

        <div className="relative text-center z-10 py-16">
          <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-white">
            Ready to Partner with Us?
          </h3>
          <p className="text-white max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Whether you're looking for high-quality pharmaceuticals, premium
            agricultural products, or innovative solutions, we're here to help.
            Let's collaborate to achieve mutual success.
          </p>
          <a
            href="/contact-us"
            className="inline-block py-3 px-6 font-semibold text-base text-primary bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <i className="uil uil-phone-alt text-lg mr-2"></i> Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalProject;