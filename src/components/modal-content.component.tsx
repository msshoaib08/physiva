import FormButton from './form-btn.component';

interface ModalContentProps {
	onGetStarted: () => void;
	onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({
	onGetStarted,
	onClose,
}) => {
	return (
		<>
			<h3 className="text-xl font-semibold mb-2 font-heading">
				Consultant Physiotherapist Onboarding
			</h3>

			<span className="flex text-start mb-5">
				Thank you for joining Physica! Please carefully read the terms below and
				provide the necessary details to complete your onboarding process.{' '}
			</span>

			<ol className="mb-6 text-start list-decimal">
				<li className="mb-2">
					<strong>Patient Notification : </strong> As a consultant
					physiotherapist, you will be notified whenever a patient requires
					physiotherapy services, based on the specified criteria.
				</li>
				<li className="mb-2">
					<strong>Payment Policy :</strong> You can charge patients directly via
					online payment or cash. Settlements with Physica will be processed
					weekly.
				</li>
				<li className="mb-2">
					<strong>Lead Sharing : </strong> Once onboarding is complete, patient
					leads will be shared with you via WhatsApp.{' '}
				</li>
				<li className="mb-2">
					<strong>Compliance Requirements : </strong> To maintain this
					partnership: Ensure all sessions are logged accurately. Collect
					payments from patients on time. Non-compliance with these terms may
					result in the cancellation of the arrangement.
				</li>
			</ol>
			<div className="flex justify-end gap-3">
				<FormButton
					onClick={onClose}
					btnText="Close"
					classname="bg-heading/80 hover:bg-heading/50"
				/>

				<FormButton
					onClick={onGetStarted}
					btnText="Get Started"
					classname="bg-blue hover:bg-blue/80"
				/>
			</div>
		</>
	);
};

export default ModalContent;
