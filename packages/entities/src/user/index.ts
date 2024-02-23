import { z } from "zod";

export enum RoleNameEnum {
  Teacher = "教师",
  Header = "教务主任"
}

export enum RoleCodeEnum {
  Teacher = 0,
  Header,
}

export const UserSchema = z.object({
  lastLoginTime: z.number(),
  role: z.nativeEnum(RoleNameEnum)
})

export interface User extends z.infer<typeof UserSchema> { }