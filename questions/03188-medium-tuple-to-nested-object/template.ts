// タプルを再帰的にネストされたオブジェクトに変換する型を実装する
type TupleToNestedObject<T extends string[], U> = T extends [infer F extends string, ...infer R extends string[]]
  ? { [K in F]: TupleToNestedObject<R, U> }
  : U
