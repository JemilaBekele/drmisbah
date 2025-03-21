import Link from "next/link";

import {buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <Card className="flex flex-1 flex-col gap-6 p-6 bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-none rounded-none">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, Admin</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-gray-300  bg-white"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-2 text-center p-6">
          <div className="mb-4">
            <Image
              src="/Admin-amico.svg"
              alt="Welcome"
              width={128}
              height={128}
              className="h-32 w-32"
            />
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome to the Admin Dashboard
          </h3>
          <p className="text-lg text-gray-600">
            Manage your website&apos;s content and blogs.
          </p>
          <Link className={buttonVariants({variant:"outline", className:"mt-6" })} href={""}>
            Get Started
          </Link>
        </div>
      </div>
    </Card>
  );
}
