import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar.component';
import Footer from '@/components/footer.component';
import FixedCTAButtons from '@/components/fixed-cta-btn.component';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'Physiva - Trusted Physiotherapy at Home',
	description:
		'Physiva, your trusted partner in physiotherapy and rehabilitation, starts at just ₹799, offering expert care to help you heal, restore mobility, and thrive.',
	keywords:
		'Physiva, physiotherapy, rehabilitation, wellness, expert care, mobility restoration',
	openGraph: {
		type: 'website',
		url: 'https://physiva.in',
		title: 'Physiva - Trusted Physiotherapy at Home',
		description:
			'Physiva, your trusted partner in physiotherapy and rehabilitation, starts at just ₹799, offering expert care to help you heal, restore mobility, and thrive.',
		images: [
			{
				url: 'https://physiva.in/assets/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Physiva Open Graph Image',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Physiva - Trusted Physiotherapy at Home',
		description:
			'Physiva, your trusted partner in physiotherapy and rehabilitation, starts at just ₹799, offering expert care to help you heal, restore mobility, and thrive.',
		images: ['https://physiva.in/assets/og-image.png'],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="alternate" hrefLang="en-IN" href="https://physiva.in" />
				<link rel="alternate" hrefLang="en-US" href="https://physiva.com" />
				<link rel="alternate" hrefLang="x-default" href="https://physiva.in" />
				{/* Canonical Link */}
				<link rel="canonical" href="https://physiva.in" />

				{/* Google Console Verification */}
				<meta
					name="google-site-verification"
					content="q6JlAdAHDVzHWgwgyDDz0r4185XxykdhVYuvAYdhHTM"
				/>

				<meta name="theme-color" content="#ffffff" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />

				<script type="application/ld+json">
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'Physiva',
						url: 'https://physiva.in',
						logo: 'https://physiva.in/assets/logo.png',
					})}
				</script>

				{/* Google tag (gtag.js) */}
				<Script
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=AW-16849802062"
				/>
				<Script
					id="google-analytics"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16849802062');
        `,
					}}
				/>
			</head>
			<body className="font-body bg-white text-body antialiased">
				<Navbar />
				<main className="relative flex justify-center items-center flex-col mx-auto">
					{children}
				</main>
				<Footer />
				<FixedCTAButtons />

				{/* Google tag (gtag.js) */}
				<Script
					id="conversion-checker"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
        var x = 0;
        var myVar = setInterval(function(){
            if(x == 0){
                try{
                    if(document.querySelector('[class*="text-green-600 text-center text-xs font-medium bg-light shadow-2xl rounded-2xl py-2 px-3"]')!=null 
                        && document.querySelector('[class*="text-green-600 text-center text-xs font-medium bg-light shadow-2xl rounded-2xl py-2 px-3"]').innerText.indexOf("Thank you!")!=-1){
                        gtag('event', 'conversion', {'send_to': 'AW-16849802062/i30-CILZ650aEM6mzuI-'});
                        clearInterval(myVar);
                        x = 1;
                    }
                }catch(e){}
            }
        }, 1000);
    `,
					}}
				/>

				<Script
					id="click-tracker"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
        window.addEventListener('load', function() {
            document.addEventListener('click', function(e) {
                if (e.target.closest('[class="flex justify-center items-center p-3 bg-black/80 rounded-full shadow-2xl"]')) {
                    gtag('event', 'conversion', {'send_to': 'AW-16849802062/wMmICIXZ650aEM6mzuI-'});
                }
            }, {
                capture: true
            });
        });
    `,
					}}
				/>

				<Script
					id="page-conversion"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
        gtag('event', 'conversion', {'send_to': 'AW-16849802062/M89BCIvZ650aEM6mzuI-'});
    `,
					}}
				/>
			</body>
		</html>
	);
}
