"use server";
import { Resend } from "resend";
import EmailTemplate from "@/components/emailTemplate";

type SendMessageProps = { email: string; message: string; name: string };
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendMessage({ message, email, name }: SendMessageProps) {
 const response = await resend.emails.send({
  from: process.env.FROM_PRIMARY_EMAIL_ADDRESS!,
  to: [process.env.PRIMARY_EMAIL!],
  subject: `From <Portfolio> >>${name}<<`,
  react: EmailTemplate({ name, message, from: email }),
 });

 return { status: true, message: "Message sent!" };
}
