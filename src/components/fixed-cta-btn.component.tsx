'use client';

import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const FixedCTAButtons: React.FC = () => {
	const handleCall = () => {
		window.location.href = 'tel:+919137372515';
	};

	const handleWhatsApp = () => {
		const phoneNumber = '9137372515';
		const whatsappUrl = `https://wa.me/${phoneNumber}`;
		window.location.href = whatsappUrl;
	};
	return (
		<div className="fixed bottom-5 right-6 z-40 flex flex-col gap-8">
			<button
				onClick={handleCall}
				className="flex justify-center items-center p-3 bg-black/80 rounded-full shadow-2xl"
			>
				<FaPhoneAlt size={20} color="#25d366" />
			</button>
			<button
				onClick={handleWhatsApp}
				className="flex justify-center items-center p-3 bg-black/80 rounded-full shadow-2xl"
			>
				<FaWhatsapp size={20} color="#25d366" />
			</button>
		</div>
	);
};

export default FixedCTAButtons;
