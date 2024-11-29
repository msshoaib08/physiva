import { NAV_ITEMS, SOCIALMEDIA_LINKS } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
	return (
		<section className="bg-blue text-white ">
			<div className=" max-w-7xl px-5 md:px-10 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-20">
					<div className="flex flex-col gap-5 text-start">
						<Image
							src="/next.svg"
							width={80}
							height={80}
							alt="logo"
							className="text-start"
						/>
						<p className="">
							Physiva brings expert physiotherapy to your doorstep, offering
							personalized care to help you regain strength and mobility.
						</p>
						<div className="flex items-center gap-4">
							{SOCIALMEDIA_LINKS.map(({ name, image, url }) => (
								<div
									key={name}
									className="w-10 h-10 bg-light rounded-2xl flex justify-center items-center transition-all duration-300
									 ease-in-out hover:bg-light-blue"
								>
									<a href={url}>
										<img src={image} alt={`${name} icon`} className="w-6 h-6" />
									</a>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col text-start mt-14 md:mt-0">
						<h4 className="text-xl font-medium font-heading">
							Important Links
						</h4>

						<div className="mt-4 flex flex-col gap-3">
							{NAV_ITEMS.map(({ navItem, url }, idx) => (
								<Link
									key={idx}
									href={url}
									className="font-medium transition-all duration-300 ease-in-out hover:text-light/80"
								>
									{navItem}
								</Link>
							))}
						</div>
					</div>

					<div className="flex flex-col text-start mt-14 md:mt-14 lg:mt-0">
						<h4 className="text-xl font-medium font-heading">Contact</h4>
						<p className="mt-2 font-medium">
							02, Upper Floor, beside Silver Enclave, Shil Phata, Thane,
							Maharashtra, 400612
						</p>

						<span className="mt-4 text-lg font-medium font-heading select-none">
							&copy; 2024 Physiva. All rights reserved.
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
