// URLパラメータ文字列からパラメータ名を抽出する型
type ParseUrlParams<T extends string> = 
  T extends `${string}:${infer Param}/${infer Rest}`
    ? Param | ParseUrlParams<Rest>
    : T extends `${string}:${infer Param}`
      ? Param
      : never
