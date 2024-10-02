import { z } from "zod";

export const loginFormSchema = z.object({
    username: z.string().min(5, {
        message: "Username must be at least 5 characters.",
    }),
    password: z.string().min(3, {
        message: "Password must be at least 3 charactres."
    })
})

export type LoginFormData = z.infer<typeof loginFormSchema>
