import ContactForm from "@/components/contact/ContactForm";
import OurMap from "@/components/contact/OurMap";
import WaveDecoration from "@/components/shared/WaveDecoration/WaveDecoration";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import Head from "next/head";

export default function Contact() {
  return (
    <>
    <Head>
        <title>Contact Us </title>
        <meta
          name="description"
          content="Dr Misbah Speciality Dental Clinic."
        />

      
      </Head>

      <WaveDecoration />
      <div className="bg-primary text-white">
      <ContactForm />
      </div>
      <OurMap />
    </>
  );
}
