// ユニオン型から特定のtype属性値を持つ型を抽出する。分配条件型を使用して、Uの各構成型を順に評価し、type属性がTと一致する型だけを返す。
type LookUp<U, T extends string> = U extends { type: T } ? U : never
