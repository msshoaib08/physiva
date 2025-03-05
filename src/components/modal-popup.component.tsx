import { motion, AnimatePresence } from 'framer-motion';
import { IoCallOutline } from 'react-icons/io5';
// import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect } from 'react';

export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ModalPopup: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	const handleOutsideClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleClickCall = () => {
		window.location.href = 'tel:9137372515';
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
						className="relative bg-white p-6 rounded-lg max-w-md w-full mx-4 sm:mx-auto"
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
								Click to inquire now or book a physiotherapy session with
								Physiva, and get a qualified physiotherapist at your location
								<span className="text-blue font-bold"> within 3 hours</span>.
							</p>

							<Image
								src="/assets/modal-image.jpg"
								width={250}
								height={100}
								alt="physiotherapy image"
								className="mx-auto rounded-[10px] object-cover object-center"
							/>

							<div className="flex items-center justify-center flex-col gap-4 mt-6">
								<p>Click to inquire now / Schedule Your Session </p>
								<div className="flex flex-col gap-3 items-center w-full">
									<button
										onClick={handleClickCall}
										className="flex justify-center w-full items-center gap-2 bg-blue hover:bg-blue/70 text-white font-medium py-3 px-6 rounded-2xl font-heading transition duration-300 ease-in-out cursor-pointer"
									>
										<IoCallOutline size={24} />
										Call us now
									</button>

									<button
										onClick={onClose}
										className="flex justify-center w-full items-center gap-2 border border-light-blue text-body font-medium py-3 px-6 rounded-2xl font-heading transition duration-300 ease-in-out hover:bg-slate-100 hover:text-heading cursor-pointer"
									>
										<span>Cancel</span>
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
