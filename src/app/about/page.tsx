import CallToAction from '@/components/cta.component';
import DoctorTeam from '@/components/team-carousel.component';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<section className="pt-36 min-h-screen h-full relative bg-[url('/assets/about-bg.jpg')] bg-cover bg-center bg-no-repeat">
			<div className="max-w-7xl px-5 md:px-10 w-full">
				<div className="w-full lg:w-[60%] flex flex-col gap-5 lg:text-start">
					<h2 className="font-heading text-3xl lg:text-5xl font-semibold lg:leading-tight">
						Transforming Lives with{' '}
						<span className="text-blue">Expert Care</span> and{' '}
						<span className="text-blue"> Personalized </span> Physiotherapy
						Solutions
					</h2>
				</div>

				<div className="relative w-full h-full lg:max-w-[80%] lg:mx-auto my-16 flex justify-center items-center">
					<img
						src="/assets/about-img2.jpg"
						alt="about image"
						className="rounded-2xl lg:rounded-3xl shadow-3xl w-full h-auto"
					/>

					<Image
						src="/assets/about-img1.jpg"
						width={150}
						height={150}
						alt="about-img"
						className="galssmorphism hidden lg:block w-[150px] h-[150px] absolute top-10  right-10 rounded-2xl object-cover shadow-2xl"
					/>
					<Image
						src="/assets/about-img1.jpg"
						width={150}
						height={150}
						alt="about-img"
						className="galssmorphism hidden lg:block w-[150px] h-[150px] absolute bottom-10 left-10 rounded-2xl object-cover shadow-2xl"
					/>
					<Image
						src="/assets/about-img3.jpg"
						width={150}
						height={150}
						alt="about-img"
						className="galssmorphism hidden lg:block w-[150px] h-[150px] absolute bottom-10 right-10 rounded-2xl object-cover shadow-2xl"
					/>
					<Image
						src="/assets/about-img3.jpg"
						width={150}
						height={150}
						alt="about-img"
						className="galssmorphism hidden lg:block w-[150px] h-[150px] absolute top-10  left-10 rounded-2xl object-cover shadow-2xl"
					/>
				</div>
				<div className="flex">
					<span className="text-center lg:text-start text-xl md:text-2xl font-semibold text-heading/65">
						At Physiva, we believe in empowering your recovery journey with
						expert care and personalized physiotherapy solutions. Our dedicated
						team of experienced professionals is committed to helping you regain
						strength, improve mobility, and enhance your overall well-being.
						Whether it&apos;s managing pain, recovering from surgery, or
						addressing chronic conditions, we provide customized treatments
						tailored to your unique needs. With convenient at-home sessions and
						state-of-the-art techniques, we make it easier for you to achieve
						your recovery goals. Trust Physiva to guide you every step of the
						way, ensuring a seamless and effective rehabilitation process. Your
						health and comfort are our top priorities.
					</span>
				</div>

				<div className="pt-16">
					<div className="mb-16">
						<div className="flex flex-col gap-10">
							<div className="w-full lg:max-w-[70%] lg:mx-auto flex flex-col justify-center items-center gap-5">
								<h2 className="font-heading text-3xl text-center font-semibold capitalize">
									<span className="text-blue">Experienced Physicians </span>
									Committed to Your Healing
								</h2>
							</div>
							<DoctorTeam />
						</div>
					</div>
					<CallToAction />
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
