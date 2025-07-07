"use client";

import Footer from "@/components/Footer";
import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import Team from "@/components/Team";
import Facilities from "@/components/Facilities";
import Admission from "@/components/Admission";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Program />
        <Team />
        <Facilities />
        <Admission />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
 