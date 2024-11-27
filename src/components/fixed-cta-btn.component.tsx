'use client';

import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const FixedCTAButtons = () => {
	const handleCall = () => {
		window.location.href = 'tel:+918887776668';
	};

	const handleWhatsApp = () => {
		const phoneNumber = '+918887776668';
		const whatsappUrl = `https://wa.me/${phoneNumber}`;
		window.location.href = whatsappUrl;
	};
	return (
		<div className="fixed bottom-5 right-6 z-50 flex flex-col gap-8">
			<button
				onClick={handleCall}
				className="flex justify-center items-center p-3 bg-light/80 rounded-full shadow-2xl"
			>
				<FaPhoneAlt size={20} />
			</button>
			<button
				onClick={handleWhatsApp}
				className="flex justify-center items-center p-3 bg-light/80 rounded-full shadow-2xl"
			>
				<FaWhatsapp size={20} />
			</button>
		</div>
	);
};

export default FixedCTAButtons;