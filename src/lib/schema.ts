import { z } from "zod";

const hasUpperCase = /[A-Z]/;
const hasLowerCase = /[a-z]/;
const hasNumber = /\d/;
const hasSpecialChar = /[!@#$%^&*]/;

export const SignupFormSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(hasUpperCase, {
        message: "Password must have at least one uppercase character",
      })
      .regex(hasLowerCase, {
        message: "Password must have at least one lowercase character",
      })
      .regex(hasNumber, {
        message: "Password must have at least one number",
      })
      .regex(hasSpecialChar, {
        message: "Password must have at least one special character",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
  });
