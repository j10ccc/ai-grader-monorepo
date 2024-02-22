import { z } from "zod";

export enum Role {
  Teacher = 1,
  Header
}

export const UserSchema = z.object({
  lastLoginTime: z.string().datetime(),
  role: z.nativeEnum(Role)
})

export interface User extends z.infer<typeof UserSchema> { }