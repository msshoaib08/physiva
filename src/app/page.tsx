import CallToAction from '@/components/cta.component';
import ProcessPage from '@/pages/process.page';
import HeroPage from '@/pages/hero.page';
import GraphicPage from '@/pages/graphic.page';
import TreatmentPage from '@/pages/treatment.page';
import ContactPage from '@/pages/contact.page';
import TestimonialPage from '@/pages/testimonial.page';

const page: React.FC = () => {
	return (
		<>
			<HeroPage />
			<ProcessPage />
			<CallToAction />
			<TreatmentPage />
			<GraphicPage />
			<TestimonialPage />
			<ContactPage />
		</>
	);
};

export default page;
