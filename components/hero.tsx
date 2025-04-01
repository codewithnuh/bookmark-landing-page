import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16">
          <div className="md:w-1/2 space-y-6 md:space-y-8 order-2 md:order-1 mt-10 md:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              A Simple Bookmark Manager
            </h1>
            <p className="text-gray-600 md:text-lg max-w-md">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex space-x-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link href="#">Get it on Chrome</Link>
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700"
                asChild
              >
                <Link href="#">Get it on Firefox</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative order-1 md:order-2">
            <div className="relative z-10">
              <Image
                src="/images/illustration-hero.svg?height=400&width=600"
                alt="Bookmark Manager Interface"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute right-0 bottom-0 w-full h-4/5 bg-primary-dark rounded-l-full -z-10 translate-x-1/4 translate-y-1/4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
