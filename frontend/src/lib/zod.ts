import { z } from "zod"

export const SignUpSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string(),
  image: z.any()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // path of error
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
