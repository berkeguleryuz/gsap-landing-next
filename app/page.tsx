"use client"

import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
      <section className="z-0 min-h-screen bg-blue-500" />
    </main>
  );
}
