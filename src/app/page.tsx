// import CallToAction from '@/components/cta.component';
import ProcessPage from '@/pages/process.page';
import HeroPage from '@/pages/hero.page';
import GraphicPage from '@/pages/graphic.page';

const page: React.FC = () => {
	return (
		<>
			<HeroPage />
			<ProcessPage />
			{/* <CallToAction /> */}
			<GraphicPage />
		</>
	);
};

export default page;
