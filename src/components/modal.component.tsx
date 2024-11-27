interface ModalProps {
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div className="bg-light rounded-2xl shadow-lg max-w-lg w-full p-6">
				{children}
			</div>
		</div>
	);
};

export default Modal;
