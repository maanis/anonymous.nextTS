import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(3, "username must be of atleast 3 characters")
    .max(20, "username must not be exceed 20 characters")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "invalid email address" }),
    password: z.string().min(3),
})