'use client';

interface PrimaryButtonProps {
	btnText: string;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ btnText }) => {
	const handleClick = () => {
		window.location.href = 'tel:+918887776668';
	};
	return (
		<button
			onClick={handleClick}
			className="inline-flex w-fit mx-auto lg:mx-0 bg-blue hover:bg-blue/70 text-white font-medium py-2 px-6 rounded-lg font-heading transition duration-300 ease-in-out"
		>
			{btnText}
		</button>
	);
};

export default PrimaryButton;
