'use client';

import ModalContent from '@/components/modal-content.component';
import Modal from '@/components/modal.component';
import TeamsCarousel from '@/components/team-carousel.component';
import Head from 'next/head';
import { useState } from 'react';

const ContactPage = () => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebPage',
							name: 'Contact Us - Physiva',
							url: 'https://physiva.in/#for-physiotherapist',
							mainEntity: {
								'@type': 'Organization',
								name: 'Physiva',
								url: 'https://physiva.in',
								logo: 'https://physiva.in/logo.png',
								contactPoint: {
									'@type': 'ContactPoint',
									telephone: '+91-8887776668',
									contactType: 'Customer Service',
									areaServed: 'IN',
									availableLanguage: 'English',
								},
							},
							jobPostings: [
								{
									'@type': 'JobPosting',
									title: 'Physiotherapist',
									description:
										'Join Physiva and be part of our growing network of physiotherapists. Provide expert care to clients across India.',
									datePosted: '2024-12-28',
									hiringOrganization: {
										'@type': 'Organization',
										name: 'Physiva',
										sameAs: 'https://physiva.in',
										logo: 'https://physiva.in/logo.png',
									},
									jobLocation: {
										'@type': 'Place',
										name: 'India',
									},
									employmentType: 'Contract',
									salaryCurrency: 'INR',
									salary: 'Negotiable',
									url: 'https://physiva.in/#for-physiotherapist',
								},
							],
						}),
					}}
				></script>
			</Head>

			{/* Meta tags end here */}

			<section
				id="for-physiotherapist"
				className={`bg-[url('/cta-bg2.jpg')] bg-cover bg-center`}
			>
				<div className="max-w-7xl px-5 md:px-10 w-full">
					<TeamsCarousel />

					<div className="mt-16 w-full lg:max-w-[70%] lg:mx-auto flex flex-col justify-center items-center gap-5">
						<h2 className="font-heading text-3xl text-center font-semibold capitalize">
							Are You a Physiotherapist? <br />
							<span className="text-blue">Join Us! </span>
						</h2>
						<p>
							Be part of a thriving community of over 100 therapists who are
							expanding their patient base, increasing revenue, and advancing
							their careers with Physiva.
						</p>

						<button
							onClick={handleShowModal}
							className="inline-flex justify-center items-center min-w-[220px] bg-blue hover:bg-blue/70 text-white font-medium py-3 px-6 rounded-2xl font-heading transition duration-300 ease-in-out cursor-pointer"
						>
							Take the Next Step
						</button>

						{showModal && (
							<Modal>
								<ModalContent onClose={handleCloseModal} />
							</Modal>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactPage;
