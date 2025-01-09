import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar.component';
import Footer from '@/components/footer.component';
import FixedCTAButtons from '@/components/fixed-cta-btn.component';

export const metadata: Metadata = {
	title: 'Physiva - Heal, Restore, Thrive',
	description:
		'Physiva is your trusted partner in physiotherapy and rehabilitation, offering expert care to help you heal, restore mobility, and thrive.',
	keywords:
		'Physiva, physiotherapy, rehabilitation, wellness, expert care, mobility restoration',
	openGraph: {
		type: 'website',
		url: 'https://physiva.in',
		title: 'Physiva - Heal, Restore, Thrive',
		description:
			'Physiva is your trusted partner in physiotherapy and rehabilitation, offering expert care to help you heal, restore mobility, and thrive.',
		images: [
			{
				url: 'https://physiva.in/assets/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Physiva Logo',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Physiva - Heal, Restore, Thrive',
		description:
			'Physiva is your trusted partner in physiotherapy and rehabilitation, offering expert care to help you heal, restore mobility, and thrive.',
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

				<script type="application/ld+json">
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'Physiva',
						url: 'https://physiva.in',
						logo: 'https://physiva.in/assets/logo.png',
					})}
				</script>
			</head>
			<body className="font-body bg-white text-body antialiased">
				<Navbar />
				<main className="relative flex justify-center items-center flex-col mx-auto">
					{children}
				</main>
				<Footer />
				<FixedCTAButtons />
			</body>
		</html>
	);
}
