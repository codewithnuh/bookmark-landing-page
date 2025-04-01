"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Whoops, make sure it's an email");
      return;
    }

    // Submit form
    setError("");
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-12 md:py-16 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="uppercase tracking-widest text-sm mb-6">
            35,000+ already joined
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Stay up-to-date with what we're doing
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full h-12 px-4 rounded-md text-gray-900 bg-white ${
                  error ? "border-2 border-red-500" : ""
                }`}
              />
              {error && (
                <div className="absolute inset-x-0 -bottom-8 text-xs text-left bg-primary-red p-1 rounded-b-md italic">
                  {error}
                </div>
              )}
            </div>
            <Button
              type="submit"
              className="h-12 bg-primary-red hover:bg-primary-red/80 text-white md:w-auto w-full"
            >
              Contact Us
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
