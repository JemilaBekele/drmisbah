import { NextSeo } from "next-seo";
import { Metadata } from "next";
import Head from "next/head";
import HeroSection from "@/components/home/Hero-section/HeroSection";
import DigitalTransformation from "@/components/home/DigitalTransformation";
import WaveDecoration from "@/components/shared/WaveDecoration/WaveDecoration";



export const metadata: Metadata = {
  title: "Home - HOPE Business Group PLC",
};
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Hope Business Group</title>
        <meta
          name="description"
          content="Learn more about Our Company, our mission, values, and team."
        />
        <NextSeo
          title="About Us - Our Company"
          description="Learn more about Our Company, our mission, values, and team."
        />
      </Head>
      <HeroSection />
      <WaveDecoration />
     
      <DigitalTransformation />

    </>
  );
}
