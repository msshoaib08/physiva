'use client';

import { PROCESS } from '@/constant';
import Head from 'next/head';

const ProcessPage: React.FC = () => {
	const handleClick = () => {
		window.location.href = 'tel:+918887776668';
	};

	return (
		<>
			<Head>
				<title>
					Physiva - Your Simple Path to Complete Recovery with Physiotherapy
				</title>
				<meta
					name="description"
					content="Discover Physiva's simple 4-step process for at-home physiotherapy services in India. Expert care, personalized treatment plans, and a smooth recovery journey."
				/>
				<meta
					name="keywords"
					content="physiotherapy, recovery process, home physiotherapy, at-home physiotherapy, 4-step physiotherapy, expert physiotherapists, health recovery, physiotherapy process"
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://physiva.in/" />

				<meta
					property="og:title"
					content="Physiva - Your Simple Path to Complete Recovery"
				/>
				<meta
					property="og:description"
					content="Discover Physiva's simple 4-step process for at-home physiotherapy services in India. Expert care, personalized treatment plans, and a smooth recovery journey."
				/>
				<meta
					property="og:image"
					content="https://physiva.in/og-image-process.png"
				/>
				<meta property="og:url" content="https://physiva.in/" />
				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Physiva - Your Simple Path to Complete Recovery"
				/>
				<meta
					name="twitter:description"
					content="Discover Physiva's simple 4-step process for at-home physiotherapy services in India. Expert care, personalized treatment plans, and a smooth recovery journey."
				/>
				<meta
					name="twitter:image"
					content="https://physiva.in/og-image-process.png"
				/>
			</Head>
			{/* Meta tags end here */}

			<section className="radial-gradient-bg">
				<div className="max-w-7xl px-5 md:px-10 w-full">
					<div className="w-full lg:w-[70%] lg:mx-auto flex flex-col gap-5">
						<h2 className="font-heading text-3xl font-semibold">
							Your Simple Path to{' '}
							<span className="text-blue">Complete Recovery</span>
						</h2>
						<p>
							Physiva&apos;s 4-step process provides convenient, expert care at
							home or online, making your recovery journey smooth, effective,
							and hassle-free.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-16">
						<div className="flex flex-col gap-10">
							<img
								src="/assets/process-img1.jpg"
								alt="physiotherapy image"
								className="w-full h-auto rounded-3xl shadow-2xl"
							/>
							<div className="grid grid-cols-2 gap-10">
								<div className="border-2 border-blue/20 p-6 rounded-3xl">
									<h4 className="text-4xl font-heading font-bold text-heading">
										325
									</h4>
									<p className="text-sm font-semibold pt-2">
										Doctors and specialists <br />
										available
									</p>
								</div>
								<div className="p-6 rounded-3xl bg-blue">
									<h4 className="text-4xl font-heading font-bold text-light">
										20k+
									</h4>
									<p className="text-sm font-semibold text-light pt-2">
										Success stories and <br /> counting
									</p>
								</div>
							</div>
							<img
								src="/assets/process-img2.jpg"
								alt="physiotherapy treatment"
								className="w-full h-auto rounded-3xl shadow-2xl"
							/>
						</div>
						<div className="mt-10 lg:mt-0 flex flex-col gap-10">
							{PROCESS.map(({ step, title, description }) => (
								<div
									key={step}
									className="flex flex-col pb-4 border-b border-heading/10 text-start"
								>
									<div className="w-10 h-10 flex items-center justify-center bg-blue rounded-full">
										<span className="gradient-text">{step}</span>
									</div>
									<div className="mt-4 text-xl font-heading font-medium">
										{title}
									</div>
									<div className="mt-2">{description}</div>

									{step === '01' && (
										<button
											onClick={handleClick}
											className="mt-5 w-fit py-3 px-5 flex items-center gap-2 bg-heading/10 rounded-full transition-all duration-300 ease-in-out hover:shadow-xl"
										>
											<img
												src="/assets/calling-icon.png"
												alt="phone icon"
												className="w-6 h-6"
											/>
											<span className="font-heading font-medium">Call Now</span>
										</button>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProcessPage;
