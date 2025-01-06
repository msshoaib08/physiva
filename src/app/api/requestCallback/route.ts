import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

export async function POST(req: Request) {
	try {
		const { fullname, mobileNumber } = await req.json();

		if (!fullname || !mobileNumber) {
			return NextResponse.json({
				error: 'Full name and mobile number is required.',
			});
		}

		const transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: EMAIL_USER,
				pass: EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: `"Callback Request" <${EMAIL_USER}>`,
			to: 'physivahelp@gmail.com',
			subject: 'New Callback Request',
			text: `You have a new callback request:\n\nName: ${fullname}\nMobile: ${mobileNumber}`,
			html: `<p>You have a new callback request:</p> 
                   <p><strong>Name: </strong>${fullname}</p> 
                   <p><strong>Mobile Number: </strong>${mobileNumber}</p>`,
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{
				message: 'Request Received and email sent successfully',
			},
			{ status: 200 }
		);
	} catch (err) {
		console.log(err);

		return NextResponse.json(
			{
				error: 'Failed to send request. Please try again later.',
			},
			{ status: 500 }
		);
	}
}
