// 文字列型の左側の空白文字（スペース、改行、タブ）を削除する。テンプレートリテラル型と条件型、再帰を組み合わせて実装。
// 文字列の先頭が空白文字の場合、その部分を除いた残りの文字列にTrimLeftを再帰的に適用する。
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S
