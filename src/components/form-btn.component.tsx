interface FormButtonProps {
	classname: string;
	btnText: string;
	onClick: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({
	classname,
	btnText,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			className={` text-light font-heading font-medium py-2 px-4 rounded-full transition-all duration-300 ease-in-out ${classname}`}
		>
			{btnText}
		</button>
	);
};

export default FormButton;
