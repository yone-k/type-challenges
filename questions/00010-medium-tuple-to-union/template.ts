// タプルの型を各要素型の共用体（ユニオン型）に変換する。インデックス型アクセスとnumber型を使用して全ての要素を抽出する。
type TupleToUnion<T extends readonly any[]> = T[number]
