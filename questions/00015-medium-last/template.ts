// 配列の最後の要素の型を取得する。スプレッド構文と条件型を使用して、配列の最後の要素を推論する。空配列の場合はneverを返す。
type Last<T extends any[]> = T extends [...any[], infer L] ? L : never
