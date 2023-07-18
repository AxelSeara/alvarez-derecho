import React from "react";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Specialist from "../components/Specialist";
import Contact from "../components/Contact";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import LatestBlogPosts from "../components/LatestBlogPosts";

function HomePage({ posts }) {
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
      <LatestBlogPosts posts={posts} />
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data } = matter(fileContents);

    return {
      title: data.title,
      description: data.description,
      slug: filename.replace(/\.md$/, ''),
      image: data.image, // Ruta de la imagen en tu archivo Markdown
      date: data.date, // Asegúrate de tener un campo de fecha en tus archivos Markdown
    };
  });

  const latestPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return {
    props: {
      posts: latestPosts,
    },
  };
}

export default HomePage;
