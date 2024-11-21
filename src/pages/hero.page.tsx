import PrimaryButton from '@/components/primary-btn.component';
import StatisticsCard from '@/components/stats.component';

const HeroPage: React.FC = () => {
	return (
		<section className="hero relative pt-36 min-h-screen">
			<div className="max-w-7xl px-5 md:px-10 w-full">
				<div className="w-full grid place-items-center grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
					<div className="flex flex-col lg:text-start">
						<h2 className="text-[32px] md:text-[40px] lg:text-[55px] font-semibold font-heading mb-4 leading-tight capitalize">
							Physiotherapy Redefined for Your Recovery
						</h2>
						<p className="mb-6">
							Experience personalized care with India&apos;s top
							physiotherapists. Convenient home treatments, affordable pricing,
							and proven results—join thousands who trust Physiva for a
							pain-free, healthier life.
						</p>
						<PrimaryButton btnText="Book an appointment" />
					</div>

					<div className="my-8 lg:mt-0 relative text-center">
						<img
							src="/hero-img.jpg"
							className="max-w-full h-auto rounded-2xl shadow-2xl"
							alt="hero Image"
						/>
					</div>
				</div>

				<StatisticsCard />
			</div>
		</section>
	);
};

export default HeroPage;
