import "./globals.css";
import "../../public/assets/css/tailwind.min.css";
import "../../public/assets/libs/@iconscout/unicons/css/line.css";
import "../../public/assets/libs/@mdi/font/css/materialdesignicons.min.css";

import { Metadata } from "next";

import Navbar from "@/components/shared/nav/navigation";
import Footer from "@/components/shared/footer/footer";
import StoreProvider from "@/store/StoreProvder";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: "DrMisbah - Speciality Dental Clinic",
    template: "%s | DrMisbah Speciality Dental Clinic",
  },

  description:
    "Dr Misbah Speciality Dental Clinic provides advanced dental care, specialist treatments, and modern dental services in Ethiopia.",

  keywords: [
    "Dr Misbah",
    "DrMisbah",
    "Dr Misbah Dental Clinic",
    "Speciality Dental Clinic",
    "Dental Clinic Ethiopia",
    "Dentist Ethiopia",
    "Dental Care Ethiopia",
  ],

  openGraph: {
    title: "DrMisbah - Speciality Dental Clinic",
    description:
      "Advanced dental care, specialist treatments, and modern dental services from Dr Misbah Speciality Dental Clinic.",
    type: "website",
    locale: "en_US",
    siteName: "DrMisbah Speciality Dental Clinic",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Navbar />

          <main className="min-h-screen">{children}</main>

          <Toaster />

          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}