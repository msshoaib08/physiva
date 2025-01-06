'use client';

import PrimaryButton from '@/components/primary-btn.component';
import SecondaryButton from '@/components/secondary-btn.component';
import StatisticsCard from '@/components/stats.component';
import { FcGoogle } from 'react-icons/fc';
import { IoStar, IoStarHalf } from 'react-icons/io5';
import Head from 'next/head';

const HeroPage: React.FC = () => {
	return (
		<>
			<Head>
				<title>
					Physiva - India&apos;s Top Choice for At-Home Physiotherapy
				</title>
				<meta
					name="description"
					content="Physiva provides top physiotherapy services at home in India. Book an appointment with the best physiotherapists in the country. Affordable, convenient, and trusted by thousands."
				/>
				<meta
					name="keywords"
					content="physiotherapy, at-home physiotherapy, physiotherapists, India, home treatments, physiotherapy services, affordable physiotherapy"
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://physiva.in/" />

				<meta
					property="og:title"
					content="Physiva - India's Top Choice for At-Home Physiotherapy"
				/>
				<meta
					property="og:description"
					content="Physiva provides top physiotherapy services at home in India. Book an appointment with the best physiotherapists in the country. Affordable, convenient, and trusted by thousands."
				/>
				<meta property="og:image" content="https://physiva.in/og-image.png" />
				<meta property="og:url" content="https://physiva.in/" />
				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Physiva - India's Top Choice for At-Home Physiotherapy"
				/>
				<meta
					name="twitter:description"
					content="Physiva provides top physiotherapy services at home in India. Book an appointment with the best physiotherapists in the country. Affordable, convenient, and trusted by thousands."
				/>
				<meta name="twitter:image" content="https://physiva.in/og-image.png" />
			</Head>
			{/* Meta tags end here */}

			<section className="hero relative pt-36 h-full">
				<div className="max-w-7xl px-5 md:px-10 w-full">
					<div className="w-full grid place-items-center grid-cols-1 lg:grid-cols-2 gap-10 mb-8 lg:mb-20">
						<div className="flex flex-col lg:text-start">
							{/* Hero Heading */}
							<h1 className="text-[32px] md:text-[40px] lg:text-[55px] font-semibold font-heading mb-4 leading-tight capitalize">
								India&apos;s <span className="text-blue">Top Choice</span> for
								At-Home Physiotherapy
							</h1>
							<p className="mb-6">
								Experience personalized care with India&apos;s top
								physiotherapists. Convenient home treatments, affordable
								pricing, and proven results—join thousands who trust Physiva for
								a pain-free, healthier life.
							</p>
							<div className="flex items-center justify-center flex-col md:flex-row lg:justify-start gap-4">
								<PrimaryButton btnText="Book an appointment" />
								<SecondaryButton btnText="Chat on WhatsApp" />
							</div>
						</div>

						{/* Hero Image and Rating */}
						<div className="my-8 lg:mt-0 relative text-center">
							<img
								src="/assets/hero-img.jpg"
								className="max-w-full h-auto rounded-2xl shadow-2xl"
								alt="At-Home Physiotherapy Service"
							/>
							<div className="glassmorphism absolute -top-8 right-10 lg:top-1/2 lg:-left-10 flex flex-col py-3 px-4 w-fit h-fit">
								<div className="flex items-center w-full gap-2">
									<FcGoogle size={40} />
									<div className="flex flex-col gap-1">
										<div className="flex items-center">
											{[...Array(4)].map((_, index) => (
												<IoStar key={index} />
											))}
											<IoStarHalf />
										</div>
										<span className="text-sm font-semibold text-body/60">
											4.8/5 rating
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Statistics Card */}
					<StatisticsCard />
				</div>
			</section>
		</>
	);
};

export default HeroPage;
