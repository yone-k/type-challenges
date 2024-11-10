// 文字列の最初の文字を大文字に変換する型。テンプレートリテラル型と条件型、組み込みの Uppercase ユーティリティ型を使用。
// 文字列を最初の文字(F)と残りの部分(R)に分割し、Fを大文字に変換してRと結合する。空文字列の場合はそのまま返す。
type MyCapitalize<S extends string> = S extends `${infer F}${infer R}` 
  ? `${Uppercase<F>}${R}` 
  : S
