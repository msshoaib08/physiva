'use client';

import DoctorTeam from '@/components/team-carousel.component';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Head from 'next/head';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ContactPage: React.FC = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckBoxChange = () => {
		setIsChecked((prev) => !prev);
	};

	const handleGetStartedClick = () => {
		if (!isChecked) {
			toast.error('Please check the box to confirm you have read the terms.');
			return;
		}
		window.open('https://forms.gle/PgVNFk3LtaSsvv9j9', '_blank');
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

			<ToastContainer />

			<section
				id="for-physiotherapist"
				className={`bg-[url('/assets/cta-bg2.jpg')] bg-cover bg-center`}
			>
				<div className="max-w-7xl px-5 md:px-10 mx-auto w-full">
					<div className="w-full lg:max-w-[70%] lg:mx-auto flex flex-col justify-center items-center gap-5">
						<h2 className="font-heading text-3xl text-center font-semibold capitalize">
							<span className="text-blue">Experienced Doctors </span>Dedicated
							to Your Recovery
						</h2>
					</div>
				</div>
				<DoctorTeam />

				<div className="max-w-7xl px-5 md:px-10 mx-auto w-full">
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

						<AlertDialog>
							<AlertDialogTrigger className="bg-blue hover:bg-blue/70 text-white font-medium py-3 px-6 rounded-2xl font-heading transition duration-300 ease-in-out">
								Take the Next Step
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										Consultant Physiotherapist Onboarding
									</AlertDialogTitle>
									<AlertDialogDescription>
										<span className="flex text-start mb-5">
											Thank you for joining Physica! Please carefully read the
											terms below and provide the necessary details to complete
											your onboarding process.{' '}
										</span>

										<span className="mb-6 text-start flex flex-col">
											<span className="mb-2">
												<strong>1. Patient Notification : </strong> As a
												consultant physiotherapist, you will be notified
												whenever a patient requires physiotherapy services,
												based on the specified criteria.
											</span>
											<span className="mb-2">
												<strong>2. Payment Policy :</strong> You can charge
												patients directly via online payment or cash.
												Settlements with Physica will be processed weekly.
											</span>
											<span className="mb-2">
												<strong>3. Lead Sharing : </strong> Once onboarding is
												complete, patient leads will be shared with you via
												WhatsApp.{' '}
											</span>
											<span className="mb-2">
												<strong>4. Compliance Requirements : </strong> To
												maintain this partnership: Ensure all sessions are
												logged accurately. Collect payments from patients on
												time. Non-compliance with these terms may result in the
												cancellation of the arrangement.
											</span>
										</span>

										<span className="mb-4 flex items-start gap-2">
											<input
												type="checkbox"
												id="read-terms"
												checked={isChecked}
												onChange={handleCheckBoxChange}
												className="mt-0.5 w-4 h-4 cursor-pointer"
											/>
											<label
												htmlFor="read-terms"
												className="text-sm text-start"
											>
												I confirm that I have read and agree to the terms and
												conditions.
											</label>
										</span>
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Cancel</AlertDialogCancel>
									<AlertDialogAction
										onClick={handleGetStartedClick}
										className={`bg-blue hover:bg-blue/80 ${
											!isChecked ? 'opacity-50 cursor-not-allowed' : ''
										}`}
										disabled={!isChecked}
									>
										Get Started
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactPage;
