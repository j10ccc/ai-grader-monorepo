import { z } from "zod";

export enum Role {
  Teacher = 0,
  Header
}

// TODO: remove and read name from enum-name map
export const RoleNameEnumMap: Record<string, Role> = {
  "教师": Role.Teacher,
  "教务主任": Role.Header
}

export const RoleEnumNameMap: Record<Role, string> = {
  0: "教师",
  1: "教务主任"
}

export const UserSchema = z.object({
  lastLoginTime: z.number(),
  role: z.nativeEnum(Role)
})

export interface User extends z.infer<typeof UserSchema> { }