// オブジェクト型の指定されたキーを、新しい値の型で置き換える型
// T: 置き換えるキーのユニオン型
// Y: 新しいキーと値の型を持つオブジェクト型
type ReplaceKeys<U, T extends string | number | symbol, Y> = {
  [K in keyof U]: K extends T
    ? K extends keyof Y
      ? Y[K]
      : never
    : U[K]
}
