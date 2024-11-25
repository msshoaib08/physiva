import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';
import Navbar from '@/components/navbar.component';
import Footer from '@/components/footer.component';

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
			</Head>
			<body className="font-body bg-white text-body antialiased">
				<Navbar />
				<main className="relative flex justify-center items-center flex-col mx-auto">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
