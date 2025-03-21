import MobileNav from "@/components/admin/mobile-nav";
import Sidebar from "@/components/admin/sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] mt-16">
      <Sidebar />
      <div className="flex flex-col">
        <MobileNav />
        {children}
        <Toaster />
      </div>
    </div>
  );
}
