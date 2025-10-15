"use server";

import { EmailTemplate } from "@/components/ui/email-template";
import { formSchema } from "@/Types/form-schema";
import { Resend } from "resend";
import { z } from "zod";


const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
  

    const { error } = await resend.emails.send({
      from: `onboarding@resend.dev`,
      to: 'raylak82@gmail.com',
      subject: emailFormData.subject,
      react: EmailTemplate({ fullName: emailFormData.fullname , email: emailFormData.email, message: emailFormData.message }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};