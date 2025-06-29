import { z } from "zod";

export const messageSchema = z.object({
    message: z
        .string()
        .min(10, "message should be minimum of 10 character")
        .max(300, "message should be maximum of 300 character"),
})