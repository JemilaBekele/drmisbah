import Link from "next/link";

const ContactHeroSection = () => {
    return(
          <>
     <Head>
        <link rel="preload" href="/c.jpg" as="image" />
      </Head>
      <section
      className="h-[90vh] relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(c.jpg)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-black opacity-70"></div>
      <div className="container px-0 relative z-10">
      <div className="flex flex-col bg-white/60 p-10 max-w-2xl rounded-lg shadow-2xl backdrop-blur-md">
          <p className="text-xl font-semibold text-primary mb-2">Contact Us</p>
          <h2 className="text-5xl font-bold capitalize mb-4">
            Get in Touch with
            <span className="text-primary font-bold"> Us</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We&apos;re here to help you with any questions, inquiries, or support you need. 
            Reach out to us and experience our commitment to providing top-notch 
            customer service and innovative solutions tailored to your needs.
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 text-center z-10">
        <ul className="inline-block text-white text-sm font-semibold tracking-wide">
          <li className="inline-block uppercase text-white/70 hover:text-white transition duration-300">
            <Link href="/contact-us">Hope Business Group</Link>
          </li>
          <li className="inline-block mx-2 text-white/50">
            <i className="uil uil-angle-right-b"></i>
          </li>
          <li className="inline-block uppercase text-white">
            Contact Us
          </li>
        </ul>
      </div>
    </section></>
      );
};
export default ContactHeroSection;










