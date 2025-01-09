// 文字列から文字のユニオン型を作成
type StringToUnion<S extends string> =
  S extends `${infer F}${infer R}`
    ? F | StringToUnion<R>
    : never;

// 文字列の全ての組み合わせを生成
type AllCombinations<S extends string> =
  [S] extends [never]
    ? ''
    : '' | {
        [K in StringToUnion<S>]: K | `${K}${AllCombinations<Exclude<StringToUnion<S>, K>>}`
      }[StringToUnion<S>]
