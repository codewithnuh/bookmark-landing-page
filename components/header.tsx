"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-40 h-40 rounded-full  flex items-center justify-center">
              <Image
                src={"/images/logo-bookmark.svg"}
                width={250}
                height={250}
                alt="Bookmark"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-sm uppercase tracking-wide text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm uppercase tracking-wide text-gray-600 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm uppercase tracking-wide text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
            <Button
              variant="destructive"
              className="bg-red-500 hover:bg-red-600 text-white uppercase tracking-wide px-8"
            >
              Login
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full bg-[#1E2A47] text-white p-0"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#1E2A47]"></div>
                    </div>
                    <span className="font-bold text-lg uppercase tracking-wider text-white">
                      Bookmark
                    </span>
                  </div>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col divide-y divide-gray-700 text-center">
                  <Link
                    href="/features"
                    className="py-4 text-lg uppercase tracking-widest"
                    onClick={() => setIsOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className="py-4 text-lg uppercase tracking-widest"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/contact"
                    className="py-4 text-lg uppercase tracking-widest"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
                <div className="mt-auto p-6">
                  <Button
                    className="w-full border-2 border-white bg-transparent hover:bg-white hover:text-[#1E2A47] text-white uppercase tracking-widest py-6"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Button>
                </div>
                <div className="flex justify-center space-x-10 p-6">
                  <Link href="#" className="text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
