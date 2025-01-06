const GraphicPage: React.FC = () => {
	return (
		<section className="radial-gradient-bg">
			<div className="max-w-7xl px-5 md:px-10 w-full">
				<div className="flex flex-col md:flex-row justify-between items-center gap-5">
					<h2 className="font-heading text-3xl text-center lg:text-start font-semibold w-full lg:max-w-[40%] capitalize">
						<span className="text-blue">Take Care</span> of Your Health and Your
						Loved Ones.
					</h2>
					<p className="w-full lg:max-w-[30%] font-semibold">
						Caring for yourself is as important as caring for others. Prioritize
						your physical and mental well-being for a balanced life.
					</p>
				</div>

				<div className="w-full lg:max-w-[80%] relative lg:mx-auto mt-20">
					<img
						src="/assets/graphic-img.jpg"
						alt="physiotherapy image"
						className="rounded-2xl lg:rounded-3xl shadow-3xl w-full h-auto"
					/>

					<div className="w-fit hidden lg:block">
						<div className="absolute top-[20%] -right-12">
							<div className="glassmorphism flex flex-col gap-3 w-full py-3 px-4">
								<div className="flex items-center w-full gap-2">
									<img
										src="/assets/doctor-icon.png"
										alt="doctor icon"
										className="w-6 h-6"
									/>
									<span className="text-sm font-heading">24/7 service</span>
								</div>
								<div className="w-full flex flex-col gap-2">
									<div className="w-[80%] h-2 bg-light rounded-2xl"></div>
									<div className="w-[50%] h-2 bg-light rounded-2xl"></div>
								</div>
							</div>
						</div>

						<div className="glassmorphism absolute py-3 px-6 -right-12 top-[40%] lg:max-xl:top-[50%]">
							<span className="text-sm font-heading ">Hi Kadir!!</span>
						</div>
						<div className="glassmorphism absolute py-3 px-6 -right-12 top-1/2 lg:max-xl:top-[65%]">
							<span className="text-sm font-heading">How may I help you?</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GraphicPage;
