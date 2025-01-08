import Link from 'next/link';

export default function NotFound() {
	return (
		<section className="flex flex-col items-center justify-center min-h-screen pt-36 bg-light-blue/40">
			<div className="max-w-7xl px-5 md:px10 w-full">
				<div className="flex justify-between items-center gap-10 flex-col">
					<div className="w-full lg:w-[70%]">
						<h1 className="text-4xl lg:text-5xl font-heading text-center text-heading font-bold ">
							Oops! Looks like you&apos;re lost.
						</h1>

						<p className="my-5 font-medium text-lg">
							We couldn&apos;t find the page you were looking for. But
							don&apos;t worry, we&apos;re here to help you get back on track!
							Click below to return to the homepage or explore more.
						</p>

						<Link
							href="/"
							className="bg-blue hover:bg-blue/70 text-white font-medium py-3 px-6 rounded-2xl font-heading transition duration-300 ease-in-out cursor-pointer"
						>
							Go back to Home Page
						</Link>
					</div>
					<video
						autoPlay
						loop
						muted
						className="max-w-full max-h-full object-cover rounded-2xl shadow-2xl"
					>
						<source src="/assets/not-found.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</section>
	);
}
