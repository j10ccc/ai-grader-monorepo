export type HttpResponse<T> = {
  msg: string;
  code: 200;
  data: T;
} | {
  msg: "fail";
  code: 400;
  data: HttpResponseError;
}

export type HttpResponseError = {
  code: number;
  message: string;
}