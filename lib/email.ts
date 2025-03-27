"use server";

import { z } from "zod";
import { FormSchema } from "./form-schema";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendForm = async (formData: z.infer<typeof FormSchema>) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["masterfil420@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: formData.name }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    // return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
