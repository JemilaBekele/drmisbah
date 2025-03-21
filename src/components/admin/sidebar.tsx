"use client";

import { usePathname } from "next/navigation";
import { SquarePen, House, Library, LogOut } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/userSlice";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/store/store";

export default function Sidebar() {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // Grouped navigation items for both Blogs and Services
  const groupedNavItems = [
    {
      section: "Dashboard",
      items: [
        { href: "/admin", label: "Dashboard", icon: House },
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
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <aside className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col justify-between">
        {/* Sidebar Navigation */}
        <div className="flex-1">
          <div className="flex h-16 items-center border-t px-4 lg:h-[60px] lg:px-6"></div>

          {/* Loop through grouped navigation items */}
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {groupedNavItems.map(({ section, items }) => (
              <div key={section} className="mt-6">
                <h4 className="px-3 py-1 text-muted-foreground text-xs font-semibold uppercase">
                  {section}
                </h4>
                {items.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                      pathname === href
                        ? "bg-muted text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="mt-4 px-4 pb-10">
          <Button
            onClick={handleLogout}
            variant={"outline"}
            className="w-full flex items-center gap-3"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}
