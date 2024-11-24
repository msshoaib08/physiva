import { TREATMENT } from '@/constant';

const TreatmentPage: React.FC = () => {
	return (
		<section>
			<div className="max-w-7xl px-5 md:px-10 w-full">
				<div className="w-full lg:max-w-[70%] lg:mx-auto flex flex-col justify-between items-center gap-5">
					<h2 className="font-heading text-3xl text-center font-semibold capitalize">
						Specialized Care for Every{' '}
						<span className="text-blue"> Health Condition </span>
					</h2>
					<p>
						Physiva treats a wide range of conditions, offering personalized
						treatments to help you recover, regain strength, improve mobility,
						and enhance overall well-being.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
					{TREATMENT.map(({ title, image }, idx) => (
						<div
							key={idx}
							className="relative w-full h-40 rounded-2xl flex justify-center items-center"
							style={{
								backgroundImage: image,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<div className="glassmorphism w-1/2 absolute top-0 right-0 h-full rounded-2xl rounded-s-none shadow-none flex justify-center items-center">
								<span className="px-4 font-semibold">{title}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TreatmentPage;
