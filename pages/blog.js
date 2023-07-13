import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const Blog = ({ posts }) => {
  return (
    <div className="w-full py-10 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
          >
            <img
              className="w-full h-[250px] object-cover rounded-t-lg"
              src={post.image}
              alt={post.title}
            />
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-2xl font-bold text-center py-8">{post.title}</h2>
                <p className="text-center text-4xl font-bold">algo mas</p>
              </div>
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a className="text-center text-lg font-bold mt-4 hover:text-blue-500">Leer más</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data } = matter(fileContents);

    return {
      title: data.title,
      slug: filename.replace(/\.md$/, ''),
      image: data.image, // Ruta de la imagen en tu archivo Markdown
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
