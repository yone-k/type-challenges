// マップ型とキーリマップを使用して、指定された型Uに割り当て可能なプロパティのみを選択する
type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
}
