import PrimaryButton from './primary-btn.component';

const CallToAction: React.FC = () => {
	return (
		<div id="schedule" className="pb-0">
			<div className="cta-bg relative z-10 h-full overflow-hidden p-10 rounded-2xl">
				<div className="relative z-10 text-light flex flex-col justify-center items-center md:items-start">
					<h2 className="capitalize text-[32px] md:text-[40px] lg:text-[55px] font-bold font-heading mb-4">
						Let&apos;s get in touch!
					</h2>
					<p className="mb-8 text-center md:text-start lg:max-w-[50%] font-medium">
						Don&apos;t let pain hold you back. Book your first session with top
						physiotherapists and take the first step toward a healthier, happier
						you right from the comfort of home.
					</p>
					<PrimaryButton btnText="Start Your Recovery Today" />
				</div>
				<div className="absolute inset-0 bg-heading/70 -z-1"></div>
			</div>
		</div>
	);
};

export default CallToAction;
