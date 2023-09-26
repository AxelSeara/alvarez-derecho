import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import { html } from 'remark-html';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';

function Post({ title, date, description, content, image, slug }) {
  const postURL = `https://despachoalvarez.es/blog/${slug}`; // Ahora estamos usando tu dominio real
  const imageURL = `https://despachoalvarez.es${image}`; // Asegúrate que la ruta de la imagen es correcta

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageURL} />
        <meta property="og:url" content={postURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="despachoalvarez.es" />
        <meta property="twitter:url" content={postURL} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageURL} />
      </Head>
      <Navbar />
      <div className=" w-screen overflow-hidden mt-24">
        <img className="w-full max-h-[400px] object-cover" src={imageURL} alt={title} />
      </div>
      <div className="max-w-[1240px] mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <h2 className="text-2xl font-bold mb-4">{description}</h2>
        <p className="text-gray-500 mb-8">{date}</p>
        <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <Footer />

      <style jsx>{`
        .content {
          margin-top: 1rem; // Ajusta el valor según tus necesidades
        }
      `}</style>
    </div>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: data.title,
      date: data.date,
      content: contentHtml,
      image: data.image,
      description: data.description,
      slug: params.slug,
    },
  };
}

export default Post;
