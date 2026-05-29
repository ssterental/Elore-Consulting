import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://eloreconsulting.com';

// Dynamic sitemap — auto-includes every non-draft blog post at build time.
export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const urls = [
    { loc: `${SITE}/`, priority: '1.0' },
    { loc: `${SITE}/blog/`, priority: '0.8' },
    ...posts.map((p) => ({
      loc: `${SITE}/blog/${p.id}/`,
      priority: '0.7',
      lastmod: (p.data.updatedDate ?? p.data.pubDate).toISOString().split('T')[0],
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc>${'lastmod' in u && u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
