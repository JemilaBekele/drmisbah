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
        <title>Our Services - Innovative Solutions</title>
        <meta
          name="description"
          content="Explore our wide range of innovative services tailored to meet your unique business needs."
        />

        <NextSeo
          title="Our Services - Innovative Solutions | Skyhub Technologies"
          description="Explore our wide range of innovative services tailored to meet your unique business needs at Skyhub Technologies."
          openGraph={{
            title: "Our Services - Innovative Solutions | Skyhub Technologies",
            description:
              "Explore our wide range of innovative services tailored to meet your unique business needs at Skyhub Technologies.",
            url: "https://www.skyhubtechnologies.com/services",
            type: "website",
            images: [
              {
                url: "https://www.skyhubtechnologies.com/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Skyhub Technologies",
              },
            ],
          }}
          twitter={{
            handle: "@SkyhubTech",
            site: "@SkyhubTech",
            cardType: "summary_large_image",
          }}
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
