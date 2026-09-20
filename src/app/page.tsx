import { NextSeo } from "next-seo";
import { Metadata } from "next";
import Head from "next/head";

import HeroSection from "@/components/home/Hero-section/HeroSection";
import DigitalTransformation from "@/components/home/DigitalTransformation";
import WaveDecoration from "@/components/shared/WaveDecoration/WaveDecoration";
import OurTeamPage from "@/components/home/ourteam";
import OurTiktokPage from "@/components/home/tiktok";
import OurMap from "@/components/contact/OurMap";
import DigitalProject from "@/components/service/DigitalProject";

export const metadata: Metadata = {
  title: "DrMisbah - Speciality Dental Clinic",
  description:
    "Dr Misbah Speciality Dental Clinic — advanced dental care, experienced specialists, and modern treatment.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>DrMisbah - Speciality Dental Clinic</title>
        <meta
          name="description"
          content="Dr Misbah Speciality Dental Clinic — advanced dental care, experienced specialists, and modern treatment."
        />

        <NextSeo
          title="DrMisbah - Speciality Dental Clinic"
          description="Dr Misbah Speciality Dental Clinic — advanced dental care, experienced specialists, and modern treatment."
        />
      </Head>

      <HeroSection />

      <WaveDecoration />

      <DigitalTransformation />

      <WaveDecoration />

      <OurTeamPage />

      <WaveDecoration />

      <OurTiktokPage />

      <WaveDecoration />

      <OurMap />

      <DigitalProject />
    </>
  );
}