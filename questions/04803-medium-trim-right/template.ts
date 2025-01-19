// 文字列の末尾の空白文字（スペース、改行、タブ）を削除する型
// 文字列の末尾が空白文字の場合、その部分を除いた残りの文字列にTrimRightを再帰的に適用する
type TrimRight<S extends string> = S extends `${infer R}${' ' | '\n' | '\t'}` ? TrimRight<R> : S
