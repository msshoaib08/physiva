import { NextResponse } from 'next/server';

export async function GET() {
	const robotsContent = `
    User-agent: *
    Disallow: 
    Allow: /

    Sitemap: https://physiva.in/sitemap.xml
    `;

	const response = new NextResponse(robotsContent);
	response.headers.set('Content-Type', 'text/plain');

	return response;
}
