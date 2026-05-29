// @ts-check
import { defineConfig } from 'astro/config';

// Canonical site = eloreconsulting.com (theeloregroup.com is the holding co only).
// NOTE: @astrojs/sitemap was removed — it hangs on import in this environment.
// We ship a hand-maintained public/sitemap.xml instead (referenced in robots.txt).
export default defineConfig({
  site: 'https://eloreconsulting.com',
  build: { inlineStylesheets: 'auto' },
});
