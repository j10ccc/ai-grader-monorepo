import ky from "ky";

export function login(props: {
  username: string;
  password: string;
}) {
  return ky.post("/api/user/login", {
    json: props
  }).json<HttpResponse<{ token: string }>>()
}

export function register(props: {
  username: string;
  password: string;
  // FIXME: use type lib
  type: number;
}) {
  return ky.post("/api/user/register", {
    json: props
  }).json<HttpResponse<{ token: string }>>()
}