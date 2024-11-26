import InfiniteCarousel from '@/components/infinite-carousel.component';
import PrimaryButton from '@/components/primary-btn.component';

const ContactPage = () => {
	return (
		<section
			id="for-physiotherapist"
			className={`bg-[url('/cta-bg2.jpg')] bg-cover bg-center`}
		>
			<div className="max-w-7xl px-5 md:px-10 w-full">
				<InfiniteCarousel />

				<div className="w-full lg:max-w-[70%] lg:mx-auto flex flex-col justify-center items-center gap-5">
					<h2 className="font-heading text-3xl text-center font-semibold capitalize">
						Are You a Physiotherapist?{' '}
						<span className="text-blue">Join Us! </span>
					</h2>
					<p>
						Be part of a thriving community of over 100 therapists who are
						expanding their patient base, increasing revenue, and advancing
						their careers with Physiva.
					</p>

					<PrimaryButton btnText="Take the Next Step" />
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
