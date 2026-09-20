import AboutUs from "@/components/about/ab";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutHope from "@/components/about/AboutSkyHub";
import KeyAttributes from "@/components/about/KeyAttributes";
import TeamSpotlight from "@/components/about/teams";
import OurTiktokPage from "@/components/home/tiktok";
import WaveDecoration from "@/components/shared/WaveDecoration/WaveDecoration";
import Head from "next/head";


export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Dr Misbah Speciality Dental Clinic.</title>
      </Head>
  
      <WaveDecoration />
      <AboutHope/>
      
      <WaveDecoration />

<OurTiktokPage/>
    </>
  );                 
};
