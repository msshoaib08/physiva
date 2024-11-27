'use client';

import ModalContent from '@/components/modal-content.component';
import Modal from '@/components/modal.component';
import TeamsCarousel from '@/components/team-carousel.component';
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
	);
};

export default ContactPage;
