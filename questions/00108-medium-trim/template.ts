// 空白文字（スペース、改行、タブ）を表す型エイリアス
type Space = ' ' | '\n' | '\t'

// 文字列型の両端の空白文字を削除する。テンプレートリテラル型と条件型、再帰を組み合わせて実装。
// まず左側の空白を削除し、次に右側の空白を削除する処理を再帰的に適用する。
type Trim<S extends string> = S extends `${Space}${infer R}` 
  ? Trim<R> 
  : S extends `${infer L}${Space}` 
    ? Trim<L> 
    : S
