import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';
import Navbar from '@/components/navbar.component';
import Footer from '@/components/footer.component';
import FixedCTAButtons from '@/components/fixed-cta-btn.component';

export const metadata: Metadata = {
	title: 'Physiva - Heal, Restore, Thrive',
	description:
		'Physiva is your trusted partner in physiotherapy and rehabilitation, offering expert care to help you heal, restore mobility, and thrive.',
	keywords:
		'Physiva, physiotherapy, rehabilitation, wellness, expert care, mobility restoration',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const canonicalUrl = 'https://physiva.in';

	return (
		<html lang="en">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="UTF-8" />

				<meta
					name="description"
					content="Physiva is your trusted partner in physiotherapy and rehabilitation, offering expert care to help you heal, restore mobility, and thrive."
				/>
				<meta
					name="keywords"
					content="Physiva, physiotherapy, rehabilitation, wellness, expert care, mobility restoration"
				/>

				<meta property="og:title" content="Physiva - Heal, Restore, Thrive" />
				<meta
					property="og:description"
					content="Physiva is your trusted partner in physiotherapy and rehabilitation, offering expert care to help you heal, restore mobility, and thrive."
				/>
				<meta property="og:image" content="https://physiva.in/og-image.png" />
				<meta property="og:url" content={canonicalUrl} />
				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Physiva - Heal, Restore, Thrive" />
				<meta
					name="twitter:description"
					content="Physiva is your trusted partner in physiotherapy and rehabilitation, offering expert care to help you heal, restore mobility, and thrive."
				/>
				<meta name="twitter:image" content="https://physiva.in/og-image.png" />

				<link rel="canonical" href={canonicalUrl} />

				<meta name="hreflang" content="en-IN" />
				<link rel="alternate" hrefLang="en-IN" href="https://physiva.in" />
				<meta name="hreflang" content="en-US" />
				<link rel="alternate" hrefLang="en-US" href="https://physiva.com" />
			</Head>
			<body className="font-body bg-white text-body antialiased">
				<Navbar />
				<main className="relative flex justify-center items-center flex-col mx-auto">
					{children}
				</main>
				<Footer />

				{/* Fixed CTA Buttons */}
				<FixedCTAButtons />
			</body>
		</html>
	);
}
