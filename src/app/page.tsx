import ProcessPage from '@/pages/process.page';
import HeroPage from '@/pages/hero.page';
import GraphicPage from '@/pages/graphic.page';
import TreatmentPage from '@/pages/treatment.page';
import ContactPage from '@/pages/contact.page';
import TestimonialPage from '@/pages/testimonial.page';
import PricingPage from '@/pages/pricing.page';
import RequestCallback from '@/components/req-callback.component';

const page: React.FC = () => {
	return (
		<>
			<HeroPage />
			<RequestCallback />
			<ProcessPage />
			<TreatmentPage />
			<GraphicPage />
			<PricingPage />
			<TestimonialPage />
			<ContactPage />
		</>
	);
};

export default page;
