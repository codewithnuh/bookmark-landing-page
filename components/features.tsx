"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tab = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

const tabs: Tab[] = [
  {
    id: "bookmarking",
    label: "Simple Bookmarking",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "/images/illustration-features-tab-1.svg?height=400&width=500",
  },
  {
    id: "searching",
    label: "Speedy Searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "/images/illustration-features-tab-2.svg?height=400&width=500",
  },
  {
    id: "sharing",
    label: "Easy Sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "/images/illustration-features-tab-3.svg?height=400&width=500",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState<string>("bookmarking");

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="text-gray-600">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-center border-b">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "py-4 md:px-8 text-secondary-foreground bg-transparent border-b-2 md:w-auto w-full",
                  activeTab === tab.id
                    ? "border-red-500  text-secondary-foreground hover:bg-transparent"
                    : "border-transparent hover:text-secondary-foreground/90 hover:bg-transparent"
                )}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-16 lg:space-x-24">
          <div className="md:w-1/2 relative mb-12 md:mb-0">
            <div className="relative z-10">
              <Image
                src={currentTab.image || "/placeholder.svg"}
                alt={currentTab.title}
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute left-0 bottom-0 w-full h-4/5 bg-blue-600 rounded-r-full -z-10 -translate-x-1/4 translate-y-1/4"></div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              {currentTab.title}
            </h3>
            <p className="text-gray-600">{currentTab.description}</p>
            <Button className="bg-blue-600 hover:cursor-pointer hover:bg-primary-700">
              More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
