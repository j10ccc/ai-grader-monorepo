export function resultSuccess<T>(data: T) {
  return {
    code: 200,
    data,
    msg: "ok",
  };
}