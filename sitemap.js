const fs = require('fs');
const globby = require('globby');

const DOMAIN = 'https://despachoalvarez.es/';

async function generateSitemap() {
  const pages = await globby([
    'pages/**/*.js', // All routes inside your page folder
    '!pages/_*.js', // Exclude Next.js special pages (like _app.js, _document.js)
    '!pages/api', // Exclude API routes
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
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
