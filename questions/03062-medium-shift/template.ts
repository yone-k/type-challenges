// 配列の最初の要素を削除する型を実装する
type Shift<T extends any[]> = T extends [infer _, ...infer R] ? R : []
