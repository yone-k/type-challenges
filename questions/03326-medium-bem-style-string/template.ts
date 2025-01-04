// BEMスタイルの文字列を生成する型
// B（ブロック）、E（要素）とM（修飾子）の配列を受け取り、BEMの命名規則に沿った文字列の型を生成する
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = E['length'] extends 0
  ? M['length'] extends 0
    ? B
    : `${B}--${M[number]}`
  : M['length'] extends 0
    ? `${B}__${E[0]}`
    : `${B}__${E[0]}--${M[number]}`
