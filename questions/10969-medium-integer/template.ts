// 数値が整数かどうかを判定する
type Integer<T extends number> = number extends T
  ? never
  : `${T}` extends `${infer N extends number}.${string}`
    ? `${T}` extends `${N}.${'0'}`
      ? Integer<N>
      : never
    : T
