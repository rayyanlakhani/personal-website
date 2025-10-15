import z from "zod";

export const formSchema = z.object({
  fullname: z.string().min(2, 'Too short').max(50, 'Too long'),
  subject: z.string().min(2, 'Too Short').max(50, 'Too Long'),
  message: z.string().min(2, 'Too Short').max(50, 'Too Long'),
  email: z.email(),
});