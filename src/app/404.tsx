import Link from 'next/link';

export default function Custom404() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-white">
			<h1 className="text-5xl font-bold text-gray-700">404 - Page Not Found</h1>
			<p className="text-xl mt-4 text-gray-500">
				Sorry, we couldn&apos;t find that page.
			</p>
			<Link href="/" className="mt-6 text-blue-600">
				Go Back Home
			</Link>
		</div>
	);
}
