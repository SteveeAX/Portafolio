import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://steveenquiroz.vercel.app';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

function absoluteUrl(inputPath = '/') {
  return `${SITE_URL}${inputPath.startsWith('/') ? inputPath : `/${inputPath}`}`;
}

function xmlEscape(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function generateSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = [
    {
      loc: absoluteUrl('/'),
      lastmod,
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      loc: absoluteUrl('/?lang=es'),
      lastmod,
      changefreq: 'weekly',
      priority: '0.9',
    },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((entry) => `  <url>
    <loc>${xmlEscape(entry.loc)}</loc>
    <lastmod>${xmlEscape(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`)
  .join('\n')}
</urlset>
`;
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateSitemap(), 'utf8');
