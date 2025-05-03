import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
	resend.emails.send({
		from: "agajansahatov.github.com",
		to: "agajan.st@gmail.com",
		subject: "Hello Agajan",
		react: <WelcomeTemplate name="Agajan" />,
	});

	return NextResponse.json({});
}
