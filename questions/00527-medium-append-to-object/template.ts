// オブジェクト型に新しいプロパティを追加する型。マップド型と条件型を使用して実装。
// マップされるキーは元のオブジェクトのキー(keyof T)と新しいキー(U)の合併型となる。
// 条件型を使って、元のオブジェクトに存在するキーの場合は元の値を保持し、新しいキーの場合は指定された値(V)を使用する。
// Tはオブジェクト型に制約し、Uはプロパティキーとして有効な型(string, number, symbol)に制約している。
type AppendToObject<T extends object, U extends string | number | symbol, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}
