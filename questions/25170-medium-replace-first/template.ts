// タプル内の最初に出現する特定の型の要素を別の型に置き換える
type ReplaceFirst<T extends readonly unknown[], S, R> = T extends [infer First, ...infer Rest]
  ? First extends S
    ? [R, ...Rest]
    : [First, ...ReplaceFirst<Rest, S, R>]
  : T
