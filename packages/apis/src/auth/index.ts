import ky from "ky";

export function login(props: {
  username: string;
  password: string;
}) {
  return ky.post("/api/user/login", {
    json: props
  }).json<{ token: string }>()
}