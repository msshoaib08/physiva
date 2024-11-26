'use client';

import useMeasure from 'react-use-measure';
import Card from './card.component';
import { animate, useMotionValue, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const InfiniteCarousel = () => {
	const images = [
		{ image: '/treatment-img1.jpg', name: 'Dr. Samrudhi' },
		{ image: '/treatment-img2.jpg', name: 'Dr. Palak' },
		{ image: '/treatment-img3.jpg', name: 'Dr. Harshita' },
		{ image: '/treatment-img4.jpg', name: 'Dr. Maryam' },
		{ image: '/treatment-img5.jpg', name: 'Dr. Adil' },
		{ image: '/treatment-img6.jpg', name: 'Dr. Pratiksha' },
		{ image: '/treatment-img3.jpg', name: 'Dr. Shweta' },
		{ image: '/treatment-img4.jpg', name: 'Dr. Shreya' },
	];

	const FAST_DURATION = 10;
	const SLOW_DURATION = 75;

	const [duration, setDuration] = useState(FAST_DURATION);

	const [ref, { width }] = useMeasure();

	const xTranslation = useMotionValue(0);

	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		let controls;
		const finalPosition = -width / 2 - 8;

		if (mustFinish) {
			controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
				ease: 'linear',
				duration: duration * (1 - xTranslation.get() / finalPosition),
				onComplete: () => {
					setMustFinish(false);
					setRerender(!rerender);
				},
			});
		} else {
			controls = animate(xTranslation, [0, finalPosition], {
				ease: 'linear',
				duration: duration,
				repeat: Infinity,
				repeatType: 'loop',
				repeatDelay: 0,
			});
		}

		return controls?.stop;
	}, [xTranslation, width, duration, rerender]);

	return (
		<section>
			<div className="max-w-7xl px-5 md:px-10 w-full">
				<div className="w-full lg:max-w-[70%] lg:mx-auto flex flex-col justify-between items-center gap-5">
					<h2 className="font-heading text-3xl text-center font-semibold capitalize">
						<span className="text-blue">Experienced Doctors</span> Dedicated to
						Your Recovery
					</h2>
				</div>

				<motion.div
					className="flex gap-4 mt-10"
					ref={ref}
					style={{ x: xTranslation }}
					onHoverStart={() => {
						setMustFinish(true);
						setDuration(SLOW_DURATION);
					}}
					onHoverEnd={() => {
						setMustFinish(true);
						setDuration(FAST_DURATION);
					}}
				>
					{[...images, ...images].map(({ image, name }, idx) => (
						<Card key={idx} image={image} name={name} />
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default InfiniteCarousel;
