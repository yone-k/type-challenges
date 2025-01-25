// 配列の要素を指定した区切り文字で結合する型
type Join<T extends unknown[], U extends string | number = ','> = 
  T extends []
    ? ''
    : T extends [infer F]
      ? `${F & string}`
      : T extends [infer F, ...infer R]
        ? `${F & string}${U}${Join<R, U>}`
        : never
