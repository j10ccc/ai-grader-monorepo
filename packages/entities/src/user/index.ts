import { z } from "zod";

export enum Role {
  Teacher = 1,
  Header
}

export const RoleNameEnumMap: Record<string, Role> = {
  "教师": Role.Teacher,
  "教务主任": Role.Header
}

export const UserSchema = z.object({
  lastLoginTime: z.number(),
  role: z.nativeEnum(Role)
})

export interface User extends z.infer<typeof UserSchema> { }