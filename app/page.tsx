"use client";

import About from "@/components/About";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}
