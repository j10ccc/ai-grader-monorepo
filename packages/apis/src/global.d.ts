export {}

declare global {

  interface HttpResponse<T> {
    msg: string;
    code: number;
    data: T
  }
}