"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Admission from "@/components/Admission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Program />
      <Team />
      <Testimonials />
      <Admission />
      <Contact />
      <Footer />
    </main>
  );
}
 