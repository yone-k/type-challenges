// 文字列型をその構成文字のユニオン型に変換する型。テンプレートリテラル型と再帰を使用。
// 文字列を先頭の1文字(F)と残りの部分(R)に分割し、Fと残りの部分に対する再帰呼び出しの結果をユニオン型で結合する。
// 空文字列の場合はneverを返す（ユニオンの単位元）。
type StringToUnion<T extends string> = 
  T extends `${infer F}${infer R}`
    ? F | StringToUnion<R>
    : never
