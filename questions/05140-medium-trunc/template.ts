// 数値や文字列の小数部分を切り捨てて整数部分だけを返す型
type Trunc<T extends string | number> = 
  `${T}` extends `${infer S}${'.'}${string}` 
    ? S extends '' | '-'
      ? S extends '-'
        ? '-0'
        : '0'
      : S
    : `${T}`
