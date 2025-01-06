'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const RequestCallback = () => {
	const [formData, setFormData] = useState({ fullname: '', mobileNumber: '' });
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setIsSubmitting(true);

		if (!formData.fullname || !formData.mobileNumber) {
			toast.error('All fields are required.');
			setIsSubmitting(false);
			return;
		}

		if (formData.fullname.trim().length < 3) {
			toast.error('Full name should be at least 3 characters long.');
			setIsSubmitting(false);
			return;
		}

		if (formData.mobileNumber.trim().length !== 10) {
			toast.error('Mobile number should be exactly 10 digits.');
			setIsSubmitting(false);
			return;
		}

		try {
			const response = await fetch('/api/requestCallback', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setIsSubmitted(true);
				toast.success('Your callback request has been submitted successfully!');
			} else {
				const data = await response.json();
				setError(data.error || 'Something went wrong');
				toast.error(data.error || 'Something went wrong');
			}
		} catch (err) {
			console.log(err);
			setError('Failed to submit the form');
			toast.error('Failed to submit the form');
		} finally {
			setIsSubmitting(false);
		}

		setFormData({ fullname: '', mobileNumber: '' });
	};

	return (
		<section className="w-full py-10">
			<Toaster containerStyle={{ margin: '0', padding: '0', zIndex: 9999 }} />
			<div className="max-w-7xl px-5 md:px-10 w-full ">
				<div className="relative bg-[url('/assets/cta-bg.jpg')] bg-cover bg-center bg-no-repeat p-10 rounded-2xl">
					<div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
					<div className="relative z-[1]">
						<h2 className="text-3xl font-semibold text-white font-heading text-center mb-4">
							Request a Callback
						</h2>
						<p className="text-center mb-6 text-light font-medium">
							Fill out the form below and our team will call you back.
						</p>
						{isSubmitted ? (
							<span className="text-green-600 text-center font-medium bg-light shadow-2xl rounded-2xl py-2 px-4">
								Thank you! We&apos;ll call you back shortly.
							</span>
						) : (
							<form
								onSubmit={handleSubmit}
								className="space-y-4 max-w-[430px] mx-auto"
							>
								{error && <p className="text-red-600 text-center">{error}</p>}
								<div>
									<input
										type="text"
										id="fullname"
										name="fullname"
										value={formData.fullname}
										onChange={handleChange}
										className=" w-full px-4 py-2 bg-light rounded-lg text-body focus:outline-none focus:border-none "
										placeholder="Enter your full name"
									/>
								</div>
								<div>
									<input
										type="tel"
										id="mobileNumber"
										name="mobileNumber"
										value={formData.mobileNumber}
										onChange={handleChange}
										className="w-full px-4 py-2 bg-light rounded-lg text-body focus:outline-none focus:border-none"
										placeholder="Enter your mobile number"
									/>
								</div>
								<button
									type="submit"
									className="inline-flex justify-center items-center gap-2 bg-blue hover:bg-blue/70 text-white font-medium py-3 px-6 rounded-2xl font-heading transition duration-300 ease-in-out cursor-pointer"
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<span className="flex justify-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 animate-spin"
												viewBox="0 0 20 20"
												fill="none"
												stroke="currentColor"
											>
												<path
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M11 3a8 8 0 1 1-8 8 8 8 0 0 1 8-8z"
												/>
											</svg>
											<span className="font-semibold ps-2">Requesting...</span>
										</span>
									) : (
										'Request Callback'
									)}
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default RequestCallback;
