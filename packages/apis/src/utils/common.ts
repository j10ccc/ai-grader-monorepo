export interface HttpResponse<T> {
  msg: string;
  code: number;
  data: T
}