import fs from "fs";
import { globby } from "globby";

async function generateSitemap() {
  const pages = await globby([
    "src/app/**/*.js", // Adjusted to the correct path and extension
    "!src/app/_*.js", // Exclude Next.js specific files like _app.js and _document.js
    "!src/app/api/**", // Exclude API routes
  ]);

  console.log("pages", pages); // This will show which pages are being detected

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const path = page
      .replace("src/app", "") // Adjusted to the correct root path
      .replace(".js", "")
      .replace("/page", "") // Ensure '/page' at the end of a path is trimmed
      .replace("/index", ""); // Ensure '/index' at the end of a path is trimmed
    const route = path === "/index" ? "" : path; // Handle the root path correctly

    return `<url>
    <loc>${`https://streetfoodconsulting.co.uk${route}`}</loc>
    </url>`;
  })
  .join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();