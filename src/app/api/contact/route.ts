import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, company, subject, message } = await req.json();
        
        console.log("Received contact form submission:", { name, email, phone, company, subject, message });

        // Configure transporter with proper authentication
        const transporter = nodemailer.createTransport({
            host: "smtp.elasticemail.com",
            port: 2525,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "infoo@hopebusiness.org",
                pass:"724A3CDF1C9880D3A5D0C913FB1330DCA055",
            },
            tls: {
                rejectUnauthorized: false // For local testing only, remove in production
            }
        });

        // Verify connection configuration
        await transporter.verify((error, success) => {
            if (error) {
                console.log("SMTP connection error:", error);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
            <div style="background-color: #0A2463; padding: 15px; border-radius: 5px 5px 0 0; text-align: center;">
                <h1 style="color: white; margin: 0;">Hope Business Group</h1>
            </div>
            
            <div style="padding: 20px;">
                <h2 style="color: #0A2463; margin-bottom: 20px;">New Contact Form Submission</h2>
                
                <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #028A0F;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 15px 0;">
                    <p><strong>Message:</strong></p>
                    <p style="padding: 10px; background-color: #f5f5f5; border-radius: 3px;">${message}</p>
                </div>
            </div>
        </div>
        `;

        const mailOptions = {
            from: `"Hope Business Group" <${process.env.EMAIL_FROM}>`,
            to: "info@hopebusiness.org",  // Change recipient to the registered email
            subject: `New Contact: ${subject}`,
            html: htmlContent,
            replyTo: email
        };
        

        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent:", info.messageId);
        
        return NextResponse.json(
            { success: true, message: "Your message has been sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { 
                success: false, 
                message: "Failed to send your message. Please try again later.",
               
            },
            { status: 500 }
        );
    }
}