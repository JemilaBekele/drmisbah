import AboutUs from "@/components/about/ab";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutHope from "@/components/about/AboutSkyHub";
import KeyAttributes from "@/components/about/KeyAttributes";
import DistributionNetwork from "@/components/about/network";
import TeamSpotlight from "@/components/about/teams";
import WaveDecoration from "@/components/shared/WaveDecoration/WaveDecoration";
import Head from "next/head";


export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Hope Business Group.</title>
      </Head>
      <AboutHeroSection />
      <WaveDecoration />
      <AboutHope/>
      
      <KeyAttributes />
      <DistributionNetwork/>
      <AboutUs/>
      <TeamSpotlight/>
    </>
  );                 
};
