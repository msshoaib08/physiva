'use client';

import { useEffect, useState } from 'react';

import ProcessPage from '@/pages/process.page';
import HeroPage from '@/pages/hero.page';
import GraphicPage from '@/pages/graphic.page';
import TreatmentPage from '@/pages/treatment.page';
import ContactPage from '@/pages/contact.page';
import TestimonialPage from '@/pages/testimonial.page';
import PricingPage from '@/pages/pricing.page';
import RequestCallback from '@/components/req-callback.component';
import ModalPopup from '@/components/modal-popup.component';

const Page: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		setIsModalOpen(true);
	}, []);
	return (
		<>
			<ModalPopup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
			<HeroPage />
			<RequestCallback />
			<ProcessPage />
			<TreatmentPage />
			<GraphicPage />
			<PricingPage />
			<TestimonialPage />
			<ContactPage />
		</>
	);
};

export default Page;
