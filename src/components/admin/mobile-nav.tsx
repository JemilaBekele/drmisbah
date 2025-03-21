"use client";

import { Home, Library, PanelLeft, SquarePen, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/userSlice";
import { AppDispatch } from "@/store/store";

export default function MobileNav() {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // Grouped navigation items
  const groupedNavItems = [
    {
      section: "Dashboard",
      items: [
        { href: "/admin", label: "Dashboard", icon: Home },
      ],
    },
    {
      section: "Blogs",
      items: [
        { href: "/admin/add-blog", label: "Add Blog", icon: SquarePen },
        { href: "/admin/blog-list", label: "Blogs List", icon: Library },
      ],
    },
    {
      section: "Services",
      items: [
        { href: "/admin/add-service", label: "Add Service", icon: SquarePen },
        { href: "/admin/service-list", label: "Services List", icon: Library },
      ],
    },
    {
      section: "Socials",
      items: [
        { href: "/admin/add-social", label: "Add Social", icon: SquarePen },
        { href: "/admin/social-list", label: "Social List", icon: Library },
      ],
    },
  ];

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      router.push("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="md:hidden flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col justify-between">
          <nav className="grid gap-2 text-lg font-medium">
            <Link href="#" className="flex items-center text-lg font-semibold">
              <span className="text-primary">SKY</span>
              <span>HUB</span>
            </Link>
            {groupedNavItems.map(({ section, items }) => (
              <div key={section} className="mt-4">
                <h4 className="px-3 py-1 text-muted-foreground text-xs font-semibold uppercase">
                  {section}
                </h4>
                {items.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 transition-all ${
                      pathname === href
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="mt-4 px-4 pb-4">
            <Button
              onClick={handleLogout}
              variant={"outline"}
              className="w-full flex items-center gap-3"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
