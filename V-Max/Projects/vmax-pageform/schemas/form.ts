import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(4).default(''),
  description: z.string().optional().default(''),
});

export type formSchemaType = z.infer<typeof formSchema>;
