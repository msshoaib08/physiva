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
			className="inline-flex w-fit bg-blue hover:bg-blue/70 text-white font-medium py-3 px-6 rounded-2xl font-heading transition duration-300 ease-in-out cursor-pointer"
		>
			{btnText}
		</button>
	);
};

export default PrimaryButton;
