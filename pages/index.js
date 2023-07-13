import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Specialist from "../components/Specialist";
import Contact from "../components/Contact";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Alvarez Derecho</title>
        <meta name="description" content="Álvarez Derecho - Somos un bufete de abogados en Galicia especializado en diversas áreas legales. Ofrecemos asesoramiento jurídico en casos de derecho civil, penal, laboral y más. Con amplia experiencia y profundo conocimiento del sistema legal gallego, brindamos soluciones efectivas y personalizadas a nuestros clientes. Contáctanos hoy mismo para una consulta gratuita." />
      </Head>
      <Navbar />
      <Hero />
      <Cards/>
      <Specialist />
      <Contact />
      <Footer/>
    </div>
  );
}

export default HomePage;
