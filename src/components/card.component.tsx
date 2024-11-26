'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface CardProps {
	image: string;
	name: string;
}

const Card: React.FC<CardProps> = ({ image, name }) => {
	const [showOverlay, setShowOverlay] = useState(false);

	return (
		<motion.div
			className="relative h-[200px] min-w-[200px] bg-light-blue overflow-hidden rounded-2xl flex justify-center items-center"
			onHoverStart={() => setShowOverlay(true)}
			onHoverEnd={() => setShowOverlay(false)}
		>
			<AnimatePresence>
				{showOverlay && (
					<motion.div
						className="absolute inset-0 z-10 flex justify-center items-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<div className="hidden lg:block absolute bg-black pointer-events-none opacity-50 h-full w-full" />
						<motion.h2
							className="hidden absolute bottom-5 bg-white/75 font-semibold text-sm z-10 py-2 px-6 rounded-full lg:flex items-center gap-[0.5ch]"
							initial={{ y: 10 }}
							animate={{ y: 0 }}
							exit={{ y: 10 }}
						>
							<span>{name}</span>
						</motion.h2>
					</motion.div>
				)}
			</AnimatePresence>
			<h2 className="block lg:hidden absolute bottom-3 bg-light/75 font-semibold text-sm z-10 py-2 px-6 rounded-full ">
				{name}
			</h2>
			<Image
				src={image}
				alt={image}
				fill
				style={{ objectFit: 'cover' }}
				sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
			/>
		</motion.div>
	);
};

export default Card;
