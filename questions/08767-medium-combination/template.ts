// 文字列配列のすべての組み合わせを生成する型
type Combination<T extends string[], U = T[number]> = 
  U extends string 
    ? U | `${U} ${Exclude<Combination<T>, U>}`
    : never
