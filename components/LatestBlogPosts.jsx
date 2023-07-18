import React from 'react';
import Link from 'next/link';

const LatestBlogPosts = ({ posts }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-10">Nuestras últimas publicaciones</h1>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {posts && posts.map((post) => (  // Asegúrate de que posts exista antes de intentar mapearlo
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
                <h2 className="text-xl text-center py-4">{post.description}</h2>
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

export default LatestBlogPosts;
