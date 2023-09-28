const fs = require('fs');
const path = require('path');
const globby = require('globby');

const DOMAIN = 'https://despachoalvarez.es';

async function generateSitemap() {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/api/**/*',
    '!pages/blog/[slug].js',
  ]);

  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const blogSlugs = filenames.map(filename => filename.replace(/\.md$/, ''));
  const blogPages = blogSlugs.map(slug => `pages/blog/${slug}.js`);

  const allPages = pages.concat(blogPages);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages
          .map(page => {
            const path = page
              .replace('pages', '')
              .replace('.js', '')
              .replace('/index', '');
            const route = path === '/index' ? '' : path;

            return `
                <url>
                    <loc>${DOMAIN}${route}</loc>
                    <changefreq>hourly</changefreq>
                    <priority>1.0</priority>
                </url>
            `;
          })
          .join('')}
    </urlset>
    `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
