"use client";

import Footer from "@/components/Footer";
import React from "react";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section id="presentation" className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 py-16">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Garderie Aimée Inc. – Une garderie de qualité</h1>
            <p className="text-lg md:text-xl text-gray-600">Présentation de la garderie et informations principales.</p>
          </div>
        </section>
        <section id="programme" className="min-h-[40vh] py-16 bg-white flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Programme éducatif</h2>
            <p className="text-lg text-gray-600">Description du programme, environnement bilingue, équipe éducative, activités.</p>
          </div>
        </section>
        <section id="admission" className="min-h-[40vh] py-16 bg-blue-50 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Admission et inscription</h2>
            <p className="text-lg text-gray-600">Procédure d&apos;inscription, contribution réduite, informations importantes.</p>
          </div>
        </section>
        <section id="contact" className="min-h-[30vh] py-16 bg-white flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-lg text-gray-600">Adresse, téléphone, courriel, horaires d&apos;ouverture.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
