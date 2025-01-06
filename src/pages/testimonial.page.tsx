'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { TESTIMONIALS } from '@/constant';

const TestimonialPage: React.FC = () => {
	return (
		<section id="review">
			<div className="max-w-7xl px-5 md:px-10 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					<div className="w-full lg:w-[80%] flex flex-col gap-5 lg:text-start">
						<h2 className="font-heading text-3xl lg:text-5xl font-semibold">
							Real Stories of <br /> <span className="text-blue">Recovery</span>{' '}
							and <span className="text-blue">Trust</span> <br />
						</h2>
						<p>
							Discover how Physiva has transformed lives with expert care,
							personalized treatments, lasting results, and unmatched patient
							satisfaction.
						</p>
					</div>
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper w-full"
					>
						{TESTIMONIALS.map(({ feedback, img, name, treatment }, idx) => (
							<SwiperSlide key={idx} className="mb-16">
								<div className="flex flex-col">
									<Image
										src="/qoute-icon.png"
										width={40}
										height={40}
										alt="qoute icon"
										className="w-8 h-8 mb-3"
									/>

									<span className="text-lg text-start font-semibold">
										{feedback}
									</span>

									<div className="flex items-center gap-4 mt-4">
										<Image
											src={img}
											width={48}
											height={48}
											className="w-12 h-12 object-cover rounded-full"
											alt={`${name.split(' ')[0]}'s profile image`}
										/>
										<div className="flex items-start flex-col">
											<span className="font-heading font-medium text-lg">
												{name}
											</span>
											<span className="text-sm text-heading/70">
												{treatment}
											</span>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default TestimonialPage;
