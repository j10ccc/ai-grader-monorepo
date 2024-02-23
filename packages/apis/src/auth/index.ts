import ky from "ky";
import { HttpResponse } from "../utils/common";
import { UserEntities } from "@ai-grader/entities";

export function login(props: {
  username: string;
  password: string;
}) {
  return ky.post("/api/user/login", {
    json: props
  }).json<HttpResponse<UserEntities.RoleNameEnum>>()
}

export function register(props: {
  username: string;
  password: string;
  type: UserEntities.RoleCodeEnum;
}) {
  return ky.post("/api/user/register", {
    json: props
  }).json<HttpResponse<{ token: string }>>()
}