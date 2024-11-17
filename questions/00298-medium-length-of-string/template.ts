// 文字列を一文字ずつ配列に変換するヘルパー型。テンプレートリテラル型と再帰を使用して、
// 文字列の先頭から順に各文字を取り出し、それを配列の要素として追加していく。
type StringToArray<S extends string> =
  S extends `${infer F}${infer R}` ? [F, ...StringToArray<R>] : []

// 文字列の長さを計算する型。まず文字列を文字の配列に変換し、その配列の「length」プロパティを取得することで長さを取得する。
// TypeScriptの型システムでは文字列の長さを直接取得できないため、配列に変換する間接的なアプローチを使用する。
type LengthOfString<S extends string> = StringToArray<S>['length']
