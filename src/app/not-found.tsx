"use client";
import { FC } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const NotFound: FC = () => {
  return (
    <section className="relative w-full h-screen bg-gray-50 flex px-0 items-center justify-center  text-white">
      <div className="container relative px-0 z-10 ">
        <div className="flex flex-col p-4 md:p-10 max-w-2xl items-center text-center bg-white/90 text-primary backdrop-blur-md rounded-lg  mx-auto">
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-8xl">
            404
          </h1>
          <p className="mt-6 text-2xl font-semibold">
            Page not found.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            The page you are looking for does not exist. Let&apos;s get you back to where you belong.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="/" className={buttonVariants({ variant: "default" })}>
              Back to Home &rarr;
            </Link>
            <Link href="/contact-us" className={buttonVariants()}>
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;