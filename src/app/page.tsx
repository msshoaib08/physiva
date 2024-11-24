import CallToAction from '@/components/cta.component';
import ProcessPage from '@/pages/process.page';
import HeroPage from '@/pages/hero.page';
import GraphicPage from '@/pages/graphic.page';
import TreatmentPage from '@/pages/treatment.page';
import ContactPage from '@/pages/contact.page';
import Footer from '@/components/footer.component';

const page: React.FC = () => {
	return (
		<>
			<HeroPage />
			<ProcessPage />
			<CallToAction />
			<TreatmentPage />
			<GraphicPage />
			<ContactPage />
			<Footer />
		</>
	);
};

export default page;
