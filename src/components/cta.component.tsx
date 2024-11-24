import PrimaryButton from './primary-btn.component';

const CallToAction: React.FC = () => {
	return (
		<section className="pb-0">
			<div className="max-w-7xl px-5 md:px-10 w-full">
				<div className="cta-bg relative z-10 h-full flex flex-col justify-center items-center md:items-start overflow-hidden p-10 rounded-2xl shadow-2xl">
					<h2 className="capitalize text-[32px] md:text-[40px] lg:text-[55px] font-bold font-heading text-heading mb-4">
						Let&apos;s get in touch!
					</h2>
					<p className="mb-8 text-center md:text-start lg:max-w-[50%] font-medium">
						Don&apos;t let pain hold you back. Book your first session with top
						physiotherapists and take the first step toward a healthier, happier
						you right from the comfort of home.
					</p>
					<PrimaryButton btnText="Start Your Recovery Today" />
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
