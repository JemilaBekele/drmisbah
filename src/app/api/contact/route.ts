import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        
        const { name, email, phone, company, subject, message } = await req.json();
        
        
        console.log("Received contact form submission:", { name, email, phone, company, subject, message });

        
        const transporter = nodemailer.createTransport({
            host: "smtp.elasticemail.com",
            secure: false,
            port: 2525,
            auth: {
                user: "contact@skyhub-technologies.com",
                pass: "FECC9B5DB3AF32398813B86F94D0E5423956",
            },
        });

        
        const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
        <h2 style="color: #333; text-align: center; margin-bottom: 20px;">New Contact Form Submission</h2>
        <hr style="border: none; border-top: 1px solid #ccc; margin-bottom: 20px;">
        <div style="margin-bottom: 10px;">
            <p style="margin-bottom: 5px;"><strong>Name:</strong> ${name}</p>
            <p style="margin-bottom: 5px;"><strong>Company:</strong> ${company}</p>
            <p style="margin-bottom: 5px;"><strong>Email:</strong> ${email}</p>
            <p style="margin-bottom: 5px;"><strong>Phone Number:</strong> ${phone}</p>
            <p style="margin-bottom: 5px;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin-bottom: 5px;"><strong>Message:</strong></p>
            <p style="padding-left: 20px;">${message}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;">
        <p style="color: #888; text-align: center;"><strong>Contact</strong></p>
    </div>
        `;

        
        const info = await transporter.sendMail({
            from: "contact@skyhub-technologies.com",
            to: "sales@skyhub-technologies.com",
            subject: subject,
            html: htmlContent,
        });

        
        return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    } catch (error) {
        
        console.error("Error occurred while processing contact form submission:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
