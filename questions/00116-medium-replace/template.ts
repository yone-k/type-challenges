// 文字列型内のサブストリングを別の文字列に置換する型。テンプレートリテラル型と条件型を使用して実装。
// 置換対象のFromが空文字列の場合は何も置換せずSをそのまま返す。
// それ以外の場合、Sを「置換前(L) + From + 置換後(R)」のパターンにマッチさせ、マッチした場合は「L + To + R」に置換する。
// マッチしない場合はSをそのまま返す。
type Replace<S extends string, From extends string, To extends string> = 
  From extends '' 
    ? S 
    : S extends `${infer L}${From}${infer R}` 
      ? `${L}${To}${R}` 
      : S
