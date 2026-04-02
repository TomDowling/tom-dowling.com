import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
        return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("RESEND_API_KEY is not set");
        return NextResponse.json({ message: "Email service is not configured." }, { status: 503 });
    }

    const resend = new Resend(apiKey);

    try {
        const { data, error } = await resend.emails.send({
            from: "no-reply@digital-space.io",
            to: "tom@digital-space.io",
            subject: `New Contact Form Submission: ${subject}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
        });

        if (error) {
            console.error("Resend email error:", error);
            return NextResponse.json({ message: "Failed to send message.", error: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: "Message sent successfully!", data }, { status: 200 });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ message: "An unexpected error occurred." }, { status: 500 });
    }
}
