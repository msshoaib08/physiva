'use client';

import { NAV_ITEMS } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
	const [navActive, setNavActive] = useState<boolean>(false);
	const [scrolled, setScrolled] = useState<boolean>(false);

	const toggleNavMenu = () => setNavActive((prev) => !prev);

	useEffect(() => {
		const handleSCroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleSCroll);
		return () => {
			window.removeEventListener('scroll', handleSCroll);
		};
	}, []);

	return (
		<>
			<header
				className={`w-full h-[70px] flex justify-center items-center fixed inset-0 z-50 transition-all duration-300 ${
					scrolled ? 'bg-light/90' : 'transparent'
				}`}
			>
				<div className="max-w-7xl px-5 md:px-10 w-full flex justify-between items-center">
					<Link href="/">
						<Image
							src="/assets/logo-dark.png"
							width={40}
							height={40}
							alt="physiva logo"
							className="w-10 h-10"
						/>
					</Link>

					{/* Toggle Button */}
					<div className="lg:hidden">
						<button
							onClick={toggleNavMenu}
							className="flex flex-col items-center justify-center gap-1"
						>
							<span
								className={`w-7 h-0.5 bg-black transition-transform duration-300 ease-in-out ${
									navActive && 'rotate-45 translate-y-1'
								}`}
							></span>
							<span
								className={`w-7 h-[3px] bg-black ${
									navActive && '-rotate-45 -translate-y-[2px]'
								}`}
							></span>
						</button>
					</div>

					{/* Desktop Navigation Menu */}
					<nav className="hidden lg:flex lg:items-center lg:space-x-6">
						{NAV_ITEMS.map(({ navItem, url }) => (
							<Link
								key={navItem}
								href={url}
								className="font-heading font-medium text-black"
							>
								{navItem}
							</Link>
						))}
					</nav>

					{/* Mobile Navigation Menu */}
					<nav
						className={`lg:hidden fixed top-[70px] right-0 w-full h-screen bg-light transition-transform duration-300 ease-in-out ${
							navActive ? 'translate-x-0' : 'translate-x-full'
						} flex items-start flex-col px-10 py-24 space-y-6 text-xl`}
					>
						{NAV_ITEMS.map(({ navItem, url }) => (
							<Link
								key={url}
								href={url}
								className="font-medium font-heading text-gray"
								onClick={() => setNavActive(false)}
							>
								{navItem}
							</Link>
						))}
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navbar;
