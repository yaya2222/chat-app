import {z} from "zod"

export const SignUpSchema = z.object({
    username:z.string().min(4),
    email:z.string().email(),
    password:z.string().min(6),
    confirmPassword:z.string().min(6),
    image: z.any().refine((file: File) => !!file, "File is required")
})

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
