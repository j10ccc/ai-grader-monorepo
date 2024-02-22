export { };

declare global {
  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
}