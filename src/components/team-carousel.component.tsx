import { DOCTOTORS_TEAM } from '@/constant';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const TeamsCarousel = () => {
	const marqueeSpeed = 30;
	return (
		<div className="flex flex-col">
			<div className="w-full lg:max-w-[70%] lg:mx-auto flex flex-col justify-center items-center gap-5">
				<h2 className="font-heading text-3xl text-center font-semibold capitalize">
					<span className="text-blue">Experienced Doctors </span>Dedicated to
					Your Recovery
				</h2>
			</div>

			<Marquee speed={marqueeSpeed} className="mt-10">
				{DOCTOTORS_TEAM.map(({ img, name }, idx) => (
					<div key={idx} className="flex ps-5">
						<div className="relative group rounded-2xl overflow-hidden">
							<div className="hidden lg:flex justify-center items-center">
								{/* Overlay */}
								<div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 z-10 rounded-2xl transition-opacity duration-500 ease-in-out" />

								<span className="absolute text-sm px-4 py-2 font-medium rounded-full bg-light/60 bottom-3 select-none z-10 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-300">
									{name}
								</span>
							</div>
							<Image
								src={img}
								alt={`${name} treatment`}
								width={200}
								height={300}
								className="min-w-[200px] h-[200px] object-cover rounded-2xl"
							/>

							<div className="flex justify-center items-center">
								<span className="block lg:hidden absolute bottom-3 bg-light/75 font-semibold text-sm z-10 py-2 px-6 rounded-full select-none">
									{name}
								</span>
							</div>
						</div>
					</div>
				))}
			</Marquee>
		</div>
	);
};

export default TeamsCarousel;
