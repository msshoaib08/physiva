import { NextResponse } from 'next/server';

export async function GET() {
	const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://physiva.in/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
         <url>
            <loc>https://physiva.in/about</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
    </urlset>`;

	const response = new NextResponse(sitemapXML);
	response.headers.set('Content-Type', 'application/xml');

	return response;
}
