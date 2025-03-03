import { DOCTOTORS_TEAM } from '@/constant';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const TeamsCarousel = () => {
	const marqueeSpeed = 20;
	return (
		<Marquee speed={marqueeSpeed} className="mt-10">
			{DOCTOTORS_TEAM.map(({ img, name, experience, speciality }, idx) => (
				<div key={idx} className="flex ps-5">
					<div className="relative rounded-xl overflow-hidden">
						<Image
							src={img}
							alt={`${name} treatment`}
							width={300}
							height={300}
							className="w-[300px] h-[300px] object-cover object-center rounded-xl"
						/>

						<div className="flex flex-col justify-center w-full text-start items-start mt-5 gap-2">
							<span className="font-bold text-lg">{`Dr. ${name}`}</span>
							<span className="font-semibold">
								{`${experience} Years of Experience`}
							</span>
							<span className="font-semibold">{speciality}</span>
						</div>
					</div>
				</div>
			))}
		</Marquee>
	);
};

export default TeamsCarousel;
