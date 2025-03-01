import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCallOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ModalPopup: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	useEffect(() => {
		if (isOpen) {
			const timer = setTimeout(() => {
				onClose();
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [isOpen, onClose]);

	const handleOutsideClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleClickCall = () => {
		window.location.href = 'tel:9137372515';
	};

	const handleClickWhatsApp = () => {
		const phoneNumber = '9137372515';
		const whatsappUrl = `https://wa.me/${phoneNumber}`;

		window.location.href = whatsappUrl;
	};

	const modalVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.3, ease: 'easeOut' },
		},
		exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={handleOutsideClick}
				>
					<motion.div
						className="bg-white p-6 rounded-lg max-w-md w-full mx-4 sm:mx-auto"
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<div className="flex flex-col lg:text-start">
							<h1 className="text-[32px] font-semibold font-heading mb-4 leading-tight capitalize">
								Start Your <span className="text-blue">Pain-Free</span> Journey
								Today!
							</h1>
							<p className="mb-6">
								Get expert care from India&apos;s top physiotherapists at home.
								Affordable, effective, and trusted by thousands for a healthier
								life.
							</p>

							<Image
								src="/assets/modal-image.jpg"
								width={100}
								height={100}
								alt="physiotherapy image"
								className="w-full h-[220px] mx-auto rounded-[10px] object-cover object-center"
							/>

							<div className="flex items-center justify-center flex-col gap-4 mt-6">
								<p>Click to Schedule Your Session Now</p>
								<div className="flex gap-6 items-center">
									<button
										onClick={handleClickCall}
										className="flex justify-center items-center gap-2 bg-blue hover:bg-blue/70 text-white font-medium py-3 px-6 rounded-2xl font-heading transition duration-300 ease-in-out cursor-pointer"
									>
										<IoCallOutline size={24} />
										Call Us
									</button>

									<button
										onClick={handleClickWhatsApp}
										className="flex justify-center items-center gap-2 border border-light-blue text-body font-medium py-3 px-6 rounded-2xl font-heading transition duration-300 ease-in-out  hover:bg-blue hover:text-white hover:border-nonecursor-pointer"
									>
										<FaWhatsapp size={24} />
										Chat Now
									</button>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ModalPopup;
