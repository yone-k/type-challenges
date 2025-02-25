// 修飾キーの組み合わせを生成する（優先順位を保持）
type Combs<T extends any[]> = T extends [infer F, ...infer R]
  ? CombsHelper<F & string, R> | Combs<R>
  : never

type CombsHelper<F extends string, R extends any[]> = R extends [infer H, ...infer Rest]
  ? `${F} ${H & string}` | CombsHelper<F, Rest>
  : never
