import { z } from "zod";

export const isAcceptingMessage = z.object({
    accepting: z.boolean()
})