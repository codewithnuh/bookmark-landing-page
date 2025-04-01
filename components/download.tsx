import Image from "next/image";
import { Button } from "@/components/ui/button";

const browsers = [
  {
    name: "Chrome",
    logo: "/images/logo-chrome.svg?height=100&width=100",
    version: "Minimum version 62",
  },
  {
    name: "Firefox",
    logo: "/images/logo-firefox.svg?height=100&width=100",
    version: "Minimum version 55",
  },
  {
    name: "Opera",
    logo: "/images/logo-opera.svg?height=100&width=100",
    version: "Minimum version 46",
  },
];

export default function Download() {
  return (
    <section className="py-16 md:py-24" id="download">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Download the extension</h2>
          <p className="text-gray-600">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {browsers.map((browser, index) => (
            <div
              key={browser.name}
              className="flex flex-col items-center p-8 rounded-lg shadow-lg border border-gray-100"
              style={{ marginTop: `${index * 2}rem` }}
            >
              <Image
                src={browser.logo || "/placeholder.svg"}
                alt={`${browser.name} logo`}
                width={100}
                height={100}
                className="mb-6"
              />
              <h3 className="text-xl font-bold mb-1">Add to {browser.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{browser.version}</p>
              <div className="border-t border-dotted border-gray-200 w-full pt-6 mt-auto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Add & Install Extension
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
