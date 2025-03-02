'use client';

import CallToAction from '@/components/cta.component';
import { TREATMENT } from '@/constant';
import Head from 'next/head';
import Image from 'next/image';

const TreatmentPage: React.FC = () => {
	// const handleClick = () => {
	// 	window.location.href = 'tel:+918887776668';
	// };

	return (
		<>
			<Head>
				<title>
					Physiva - Specialized Physiotherapy Care for Health Conditions
				</title>
				<meta
					name="description"
					content="Physiva offers specialized physiotherapy treatments for a wide range of health conditions to help you recover, regain strength, and improve mobility."
				/>
				<meta
					name="keywords"
					content="physiotherapy, treatment for health conditions, recovery, mobility, rehabilitation, pain relief, Physiva"
				/>
				<link rel="canonical" href="https://physiva.in/" />{' '}
				{/* Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebPage',
							name: 'Treatment - Physiva',
							url: 'https://physiva.in/',
							mainEntity: {
								'@type': 'MedicalBusiness',
								name: 'Physiva',
								url: 'https://physiva.in',
								logo: 'https://physiva.in/logo.png',
								medicalSpecialty: 'Physiotherapy',
								sameAs: 'https://physiva.in',
							},
							offers: {
								'@type': 'Offer',
								url: 'https://physiva.in/',
								eligibleRegion: {
									'@type': 'Place',
									name: 'India',
								},
								eligibleDuration: {
									'@type': 'QuantitativeValue',
									value: '1',
									unitText: 'SESSION',
								},
							},
						}),
					}}
				></script>
			</Head>
			{/* Meta tags end here */}

			<section>
				<div className="max-w-7xl px-5 md:px-10 w-full">
					<CallToAction />

					<div className="w-full lg:max-w-[70%] lg:mx-auto flex flex-col justify-between items-center gap-5 mt-16">
						<h2 className="font-heading text-3xl text-center font-semibold capitalize">
							Specialized Care for Every{' '}
							<span className="text-blue"> Health Condition </span>
						</h2>
						<p>
							Physiva treats a wide range of conditions, offering personalized
							treatments to help you recover, regain strength, improve mobility,
							and enhance overall well-being.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
						{TREATMENT.map(({ title, description, image, icon }, idx) => (
							<div
								key={idx}
								className="relative w-full h-64 rounded-2xl flex justify-center items-center"
								style={{
									backgroundImage: image,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<div className="glassmorphism w-full absolute top-0 right-0 h-full py-4 px-8 rounded-2xl flex flex-col justify-center items-start">
									<div className="flex items-center gap-3">
										<Image
											src={icon}
											width={50}
											height={50}
											alt={`${title} icon`}
											className="rounded-3xl"
										/>

										<span className="font-bold text-xl">{title}</span>
									</div>
									<ul className="mt-4 list-none text-start ms-4">
										{description.map((point, index) => (
											<div key={index} className="flex items-center gap-3">
												<div className="w-2 h-2 rounded-full bg-heading" />
												<li className="font-semibold">{point}</li>
											</div>
										))}
									</ul>

									{/* {idx === TREATMENT.length - 1 && (
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
									)} */}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default TreatmentPage;
