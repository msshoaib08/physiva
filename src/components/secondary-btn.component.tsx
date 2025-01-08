import { FaWhatsapp } from 'react-icons/fa';

interface SecondaryBtnProps {
	btnText: string;
}

const SecondaryButton: React.FC<SecondaryBtnProps> = ({ btnText }) => {
	const handleClick = () => {
		const phoneNumber = '9137372515';
		const whatsappUrl = `https://wa.me/${phoneNumber}`;

		window.location.href = whatsappUrl;
	};

	return (
		<button
			onClick={handleClick}
			className="inline-flex justify-center items-center gap-2 min-w-[260px] bg-heading/10 hover:shadow-2xl text-heading font-medium py-3 px-6 rounded-2xl font-heading transition duration-300 ease-in-out cursor-pointer"
		>
			<FaWhatsapp size={24} />

			<span>{btnText}</span>
		</button>
	);
};

export default SecondaryButton;
