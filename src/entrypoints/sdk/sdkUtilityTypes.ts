// SDK utility types — types that cannot be expressed as Zod schemas
export type NonNullableUsage<T> = {
  [K in keyof T]: NonNullable<T[K]>
}
