// リテラル型をプリミティブ型に変換する
type ToPrimitive<T> = 
  T extends Function
    ? Function
    : T extends [infer F, ...infer R]
      ? [ToPrimitive<F>, ...ToPrimitive<R>]
      : T extends readonly [infer E]
        ? readonly [ToPrimitive<E>]
        : T extends object
          ? { [P in keyof T]: ToPrimitive<T[P]> }
          : T extends string
            ? string
            : T extends number
              ? number
              : T extends boolean
                ? boolean
                : T
