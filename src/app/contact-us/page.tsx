import ContactForm from "@/components/contact/ContactForm";
import OurMap from "@/components/contact/OurMap";
import WaveDecoration from "@/components/shared/WaveDecoration/WaveDecoration";
import ContactHeroSection from "@/components/contact/ContactHeroSection";

export default function Contact() {
  return (
    <>
      <ContactHeroSection />
      <WaveDecoration />
      <div className="bg-primary text-white">
      <ContactForm />
      </div>
      <OurMap />
    </>
  );
}
