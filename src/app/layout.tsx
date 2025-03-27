
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
  
}
export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Head>
            <title>Hope Business Group </title>
            <NextSeo
  title="HOPE Business Group PLC - Advancing Health, Sustainability & Economic Development in Ethiopia"
  description="HOPE Business Group PLC is a dynamic and diversified company founded by elite health practitioners, pharmacists, and business professionals. Specializing in pharmaceuticals, medical equipment, agricultural exports, eco-friendly transportation, and construction materials, we are committed to innovation, sustainability, and economic growth in Ethiopia and beyond."
  canonical="https://www.hopebusiness.org"
  openGraph={{
    url: 'https://www.hopebusiness.org',
    title: 'HOPE Business Group PLC - Advancing Health, Sustainability & Economic Development in Ethiopia',
    description: 'HOPE Business Group PLC is a leader in pharmaceuticals, medical supplies, eco-friendly transport, and agricultural exports. We are dedicated to excellence, innovation, and sustainability, driving progress across multiple industries in Ethiopia and internationally.',
    type: 'business.business',
    locale: 'en_US',
    site_name: 'HOPE Business Group PLC'
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
