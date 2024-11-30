import PrimaryButton from '@/components/primary-btn.component';
import Image from 'next/image';

const PricingPage = () => {
	return (
		<section id="pricing">
			<div className="max-w-7xl px-5 md:px-10 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					<div className="w-full lg:w-[80%] flex flex-col justify-center items-center gap-5 lg:text-start">
						<h2 className="font-heading text-3xl lg:text-5xl font-semibold">
							<span className="text-blue">Affordable Care</span> for Your
							Recovery
						</h2>
						<p>
							Experience expert physiotherapy at a transparent, per-session
							rate. No hidden costs—just personalized care designed to help you
							heal and thrive.
						</p>

						<div className="flex items-center justify-center flex-col w-full lg:justify-start gap-4">
							<div className="w-full h-16 px-5 bg-light rounded-full flex justify-start items-center gap-2">
								<Image
									src="/doctor-icon3.png"
									alt="doctor icon"
									width={35}
									height={35}
									className="w-[35px] h-[35px] object-cover"
								/>

								<span className="text-lg font-medium">
									Expert Physiotherapists at Your Doorstep
								</span>
							</div>
							<div className="w-full h-20 px-5 bg-light rounded-full flex justify-start items-center gap-2">
								<Image
									src="/no-hidden-fee-icon.png"
									alt="doctor icon"
									width={35}
									height={35}
									className="w-[35px] h-[35px] object-cover"
								/>
								<span className="text-lg font-medium">
									Transparent Pricing, No Hidden Costs
								</span>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<div className="w-[400px] h-[400px] relative rounded-full bg-light ">
							<div className="py-16 flex flex-col justify-between items-center ">
								<span className="text-3xl font-semibold">Price</span>
								<span className="text-7xl font-bold mt-10 font-heading">
									₹ 799 <span className="text-base -ml-2">Only</span>
								</span>
								<span className="text-3xl font-semibold mb-10">
									per session
								</span>

								<PrimaryButton btnText="Start Your Recovery Journey Now" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingPage;
