import { z } from "zod";

// Define the shape of your form using a Zod schema.
export const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  text: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
