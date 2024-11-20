import { CORE_FEATURES } from '@/constant';

const StatisticsCard: React.FC = () => {
	return (
		<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white rounded-[20px] p-8 shadow-2xl gap-10">
			{CORE_FEATURES.map(({ title, icon, ariaLable }) => (
				<div key={title} className="flex items-center gap-3">
					<div className="flex justify-center items-center bg-light rounded-full w-14 h-14">
						<img src={icon} className="w-8 h-8 object-cover" alt={ariaLable} />
					</div>
					<p className="font-heading text-base font-medium text-start">
						{title}
					</p>
				</div>
			))}
		</div>
	);
};

export default StatisticsCard;
