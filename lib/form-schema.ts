import { z } from "zod";

// Define the shape of your form using a Zod schema.
export const FormSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  text: z
    .string()
    .max(200, { message: "Must be 200 or fewer characters long" })
    .min(5, {
      message: "Message must be at least 5 characters.",
    }),
});
