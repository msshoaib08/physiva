'use client';

import { toast, ToastContainer } from 'react-toastify';
import FormButton from './form-btn.component';
import { useState } from 'react';

interface ModalContentProps {
	onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckBoxChange = () => {
		setIsChecked((prev) => !prev);
	};

	const handleGetStartedClick = () => {
		if (!isChecked) {
			toast.error('Please check the box to confirm you have read the terms.');
			return;
		}
		window.open('https://forms.gle/iftasgLSk3jawtrV9', '_blank');
		onClose();
	};
	return (
		<>
			<ToastContainer />
			<div className="relative z-50">
				<h3 className="text-xl font-semibold mb-2 font-heading">
					Consultant Physiotherapist Onboarding
				</h3>

				<span className="flex text-start mb-5">
					Thank you for joining Physica! Please carefully read the terms below
					and provide the necessary details to complete your onboarding process.{' '}
				</span>

				<ol className="mb-6 text-start list-decimal">
					<li className="mb-2">
						<strong>Patient Notification : </strong> As a consultant
						physiotherapist, you will be notified whenever a patient requires
						physiotherapy services, based on the specified criteria.
					</li>
					<li className="mb-2">
						<strong>Payment Policy :</strong> You can charge patients directly
						via online payment or cash. Settlements with Physica will be
						processed weekly.
					</li>
					<li className="mb-2">
						<strong>Lead Sharing : </strong> Once onboarding is complete,
						patient leads will be shared with you via WhatsApp.{' '}
					</li>
					<li className="mb-2">
						<strong>Compliance Requirements : </strong> To maintain this
						partnership: Ensure all sessions are logged accurately. Collect
						payments from patients on time. Non-compliance with these terms may
						result in the cancellation of the arrangement.
					</li>
				</ol>

				<div className="mb-4 flex items-start gap-2">
					<input
						type="checkbox"
						id="read-terms"
						checked={isChecked}
						onChange={handleCheckBoxChange}
						className="mt-0.5 w-4 h-4 cursor-pointer"
					/>
					<label htmlFor="read-terms" className="text-sm">
						I confirm that I have read and agree to the terms and conditions.
					</label>
				</div>

				<div className="flex justify-end gap-3">
					<FormButton
						onClick={onClose}
						btnText="Close"
						classname="bg-heading/80 hover:bg-heading/50"
					/>

					<FormButton
						onClick={handleGetStartedClick}
						btnText="Get Started"
						classname={`bg-blue hover:bg-blue/80 ${
							!isChecked ? 'opacity-50 cursor-not-allowed' : ''
						}`}
						disabled={!isChecked}
					/>
				</div>
			</div>
		</>
	);
};

export default ModalContent;
