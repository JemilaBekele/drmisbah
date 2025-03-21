
import Head from "next/head";
import "./globals.css";
import "../../public/assets/css/tailwind.min.css";
import "../../public/assets/libs/@iconscout/unicons/css/line.css";
import "../../public/assets/libs/@mdi/font/css/materialdesignicons.min.css";
import { NextSeo } from 'next-seo';
import { Metadata } from "next";
import Navbar from "@/components/shared/nav/navigation";
import Footer from "@/components/shared/footer/footer";
import StoreProvider from "@/store/StoreProvder";
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
  title: {
    default: "HOPE Pharmaceuticals and Medical Equipment PLC",
    template: "%s - HOPE Pharmaceuticals and Medical Equipment PLC"
  },
  description: "HOPE Pharmaceuticals and Medical Equipment PLC is a leading provider of innovative technology solutions tailored to meet the diverse needs of businesses in Addis Ababa, Ethiopia, and worldwide. With a focus on cutting-edge software development, cloud computing services, and digital transformation strategies, we empower organizations to thrive in the digital age. Our team of skilled professionals is dedicated to delivering exceptional results, driving efficiency, and fostering growth for our clients. Partner with Skyhub Technology Solutions today and unlock the full potential of your business.",
  twitter: {
    card: "summary_large_image"
  }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Head>
            <title>HOPE Pharmaceuticals and Medical Equipment PLC  </title>
            <NextSeo
              title="HOPE Pharmaceuticals and Medical Equipment PLC        - Innovative Technology Solutions Provider in Addis Ababa, Ethiopia"
              description="HOPE Pharmaceuticals and Medical Equipment PLC  is a leading provider of innovative technology solutions tailored to meet the diverse needs of businesses in Addis Ababa, Ethiopia, and worldwide. With a focus on cutting-edge software development, cloud computing services, and digital transformation strategies, we empower organizations to thrive in the digital age. Our team of skilled professionals is dedicated to delivering exceptional results, driving efficiency, and fostering growth for our clients. Partner with Skyhub Technology Solutions today and unlock the full potential of your business."
              canonical="https://www.skyhubtechnologies.com/"
              openGraph={{
                url: 'https://www.skyhubtechnologies.com/',
                title: 'HOPE Pharmaceuticals and Medical Equipment PLC                 - Innovative Technology Solutions Provider in Addis Ababa, Ethiopia',
                description: 'HOPE Pharmaceuticals and Medical Equipment PLC  is a leading provider of innovative technology solutions tailored to meet the diverse needs of businesses in Addis Ababa, Ethiopia, and worldwide. With a focus on cutting-edge software development, cloud computing services, and digital transformation strategies, we empower organizations to thrive in the digital age. Our team of skilled professionals is dedicated to delivering exceptional results, driving efficiency, and fostering growth for our clients. Partner with Skyhub Technology Solutions today and unlock the full potential of your business.',
                images: [
                  {
                    url: 'https://www.skyhubtechnologies.com/og-image.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Skyhub Technology Solutions',
                    type: 'image/jpeg',
                  },
                ],
                site_name: 'Skyhub Technology Solutions',
              }}
              twitter={{
                handle: '@SkyhubTech',
                site: '@SkyhubTech',
                cardType: 'summary_large_image',
              }}
            />

          </Head>
          <Navbar />
          <main className="min-h-screen">
          {children}
          </main>

          <Toaster />
          <Footer />
        </body> 
      </html>
    </StoreProvider>
  );
}
