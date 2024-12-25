// Object.entriesの型版を実装
// 各プロパティのキーと値のペアを[K, V]形式のタプル型の共用体として表現
// Required<T>を使用してオプショナルプロパティを必須に変換し、Partial<T>でも正しく動作するようにする
// never型をundefinedに変換して、特殊なケースも適切に処理
type ObjectEntries<T, U = Required<T>> = {
  [K in keyof U]: [K, U[K] extends never ? undefined : U[K]]
}[keyof U]
