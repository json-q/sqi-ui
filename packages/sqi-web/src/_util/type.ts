/** https://github.com/microsoft/TypeScript/issues/29729 */
export type LiteralUnion<T extends U, U> = T | (U & Record<never, never>);

/** https://gist.github.com/palashmon/db68706d4f26d2dbf187e76409905399 */
export type Prettify<T> = T extends infer O ? { [K in keyof O]: O[K] } : NonNullable<never>;
