'use client';

import PrimaryButton from '@/components/primary-btn.component';
import SecondaryButton from '@/components/secondary-btn.component';
import StatisticsCard from '@/components/stats.component';
import { FcGoogle } from 'react-icons/fc';
import { IoStar, IoStarHalf } from 'react-icons/io5';

const HeroPage = () => {
	return (
		<section className="hero relative pt-36 min-h-screen">
			<div className="max-w-7xl px-5 md:px-10 w-full">
				<div className="w-full grid place-items-center grid-cols-1 lg:grid-cols-2 gap-10 mb-8 lg:mb-20">
					<div className="flex flex-col lg:text-start">
						<h2 className="text-[32px] md:text-[40px] lg:text-[55px] font-semibold font-heading mb-4 leading-tight capitalize">
							Physiotherapy <span className="text-blue">Redefined</span> for
							Your Recovery
						</h2>
						<p className="mb-6">
							Experience personalized care with India&apos;s top
							physiotherapists. Convenient home treatments, affordable pricing,
							and proven results—join thousands who trust Physiva for a
							pain-free, healthier life.
						</p>
						<div className="flex items-center justify-center flex-col md:flex-row lg:justify-start gap-4">
							<PrimaryButton btnText="Book an appointment" />
							<SecondaryButton btnText="Chat on WhatsApp" />
						</div>
					</div>

					<div className="my-8 lg:mt-0 relative text-center">
						<img
							src="/hero-img.jpg"
							className="max-w-full h-auto rounded-2xl shadow-2xl"
							alt="hero Image"
						/>

						<div className="glassmorphism absolute -top-8 right-10 lg:top-1/2 lg:-left-10 flex flex-col py-3 px-4 w-fit h-fit">
							<div className="flex items-center w-full gap-2">
								<FcGoogle size={40} />

								<div className="flex flex-col gap-1">
									<div className="flex items-center">
										{[...Array(4)].map((_, index) => (
											<IoStar key={index} />
										))}
										<IoStarHalf />
									</div>
									<span className="text-sm font-semibold text-body/60">
										4.8/5 rating
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<StatisticsCard />
			</div>
		</section>
	);
};

export default HeroPage;
