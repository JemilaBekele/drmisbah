import Head from "next/head";
import { NextSeo } from "next-seo";
import { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import WaveDecoration from "@/components/shared/WaveDecoration/WaveDecoration";
import OurService from "@/components/service/OurService";
import DigitalProject from "@/components/service/DigitalProject";

export const metadata: Metadata = {
  title: "Services",
};
const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Our Services </title>
        <meta
          name="description"
          content="Hope Business Group."
        />

      
      </Head>
      <ServiceHero />
      <WaveDecoration />
      <OurService />
      <DigitalProject />
    </>
  );
};
export default ServicesPage;
